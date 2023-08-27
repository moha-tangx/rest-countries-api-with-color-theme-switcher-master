"use strict";
// !navigator.onLine && alert("you seem to be offline please check your connection and try again")

// checkig our url to see if we are on the homepage..
const loadIndex = !location.pathname.includes("country");

// dark mode toggling
{
  const darkModeBtn = document.querySelector(".dark-mode-toggle-btn");
  const toggleDarkMode = () => {
    const elements = document.querySelectorAll(".element,.background");
    elements.forEach((element) => element.classList.toggle("dark"));
  };
  darkModeBtn.addEventListener("click", () => toggleDarkMode());
}

// filter by region toggle button open & close...
const filterToggle = () => {
  const filterBtn = document.querySelector(".select");
  const options = document.querySelector(".options");
  filterBtn.addEventListener("click", () => options.classList.toggle("show"));
};

// checking if we are on index page to load the filter toggle functionality or not...
loadIndex && filterToggle();

async function createCountryPage(country) {
  const countryPage = document.querySelector(".details");

  // value of counties attribute
  const getBorders = country.borders;
  const getNativeName = country.name.nativeName.eng;
  const getcurrencies = country.currencies;
  const getLanguages = country.languages;

  // declaration before assigning to normalized data
  let borders;
  let nativeName;
  let nativeNameObj;
  let currencies;
  let languages;

  // for if get borders returns an array
  let bordersList = [];

  //normalizing nativeName...
  {
    typeof getNativeName == "object"
      ? (nativeName = getNativeName.official)
      : (nativeName = getNativeName);
    typeof getNativeName == "undefined" &&
      (nativeNameObj = country.name.nativeName);
    for (const key in nativeNameObj) {
      const element = nativeNameObj[key];
      nativeName = element.common;
    }
  }
  // normalzing languages
  {
    for (let key in getLanguages) {
      let lang = getLanguages[key];
      languages = lang;
    }
  }

  // normalizing currencies
  {
    for (const currency in getcurrencies) {
      if (Object.hasOwnProperty.call(getcurrencies, currency)) {
        const element = getcurrencies[currency];
        currencies = element.name;
      }
    }
  }
  
  // normalizing borders...
  {
    let countries = await getData();
  let list = await countries.filter((country) =>
    typeof getBorders == "object" &&
    getBorders.includes(country.cca3)
  );
  for (let country in list) {
    let element = list[country];
    bordersList.push(element.name.common);
  }
  typeof getBorders == "undefined"
    ? (borders = "no borders")
      : (borders = bordersList.map((b) => `<li>${b}</li>`).join(" "));
  }

  countryPage.innerHTML = `
              <div class="left-img">
                  <img src=${country.flag.svg} alt=${country.flags.alt}>
              </div>
              <div class="right-text">
                  <h1 class="name">${country.name.official}</h1>
                  <ul class="info">
                      <li>native Name:${nativeName}</li>
                      <li>population:${country.population}</li>
                      <li>Region:${country.region}</li>
                      <li>sub Region:${country.subregion}</li>
                      <li>Capital:${country.capital}</li>
                      <li>Top level domain:${country.tld}</li>
                      <li>curencies:${currencies} </li>
                      <li>languages:${languages}</li>
                  </ul>
                  <ul class="border-countries ">
                 <div>
                   border countries:
                 </div> 
                  ${borders}
                  </ul>
              </div>`;
}

// getting data from the API...
async function getData() {
  let url = "https://restcountries.com/v3.1/all";
  let localUrl = "../data.json";
  try {
    let data = await fetch(url);
    let jsnData = await data.json();
    return jsnData;
  } catch (error) {
    // alert(
    //   ` check your connection and try again`
    // );
    // console.log(error);
    let data = await fetch(localUrl);
    let jsnData = await data.json();
    return jsnData;
  }
}
// create cardfrom the data gotten from  the Api...
function createCard(country) {
  const cardsContainer = document.querySelector(".cards-container");
  const card = document.createElement("div");
  card.classList = "card element";
  card.innerHTML = `
                     <div class="card-img">
                      <img src="${country.flags.png}" alt="loading..."/ loading="lazy">
                    </div>
                     <div class="card-description">
                        <p class="name">${country.name.common}</p>
                        <small class="population">
                            population: ${country.population}
                        </small><br>
                        <small class="region">
                            region: ${country.region}
                        </small><br>
                        <small class="capital">
                            capital: ${country.capital}
                        </small>
                      </div>`;
  cardsContainer.appendChild(card);

  card.addEventListener("click", () => {
    localStorage.setItem("mycountry", JSON.stringify(country));
    location = "./country.html";
  });
}
const homePageActivites = () => {
  (async () => {
    const countries = await getData();
    countries.forEach((country) => {
      loadIndex && createCard(country);
    });
  })();

  // filter by region selection handling
  const regions = document.querySelectorAll("option");
  regions.forEach((region) => {
    const continent = region.value;
    region.parentElement.addEventListener("click", () => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.classList.contains("hide") && card.classList.remove("hide");
        const MarkupRegion = card.querySelector(".region");
        const regionValue = MarkupRegion.innerText.split(" ", 2)[1];
        regionValue !== continent && card.classList.add("hide");
      });
    });
  });

  // search
  const input = document.querySelector("input");
  input.addEventListener("input", (e) => {
    const inputValue = e.target.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList.contains("hide") && card.classList.remove("hide");
      const name = card.querySelector(".name");
      const nameValue = name.innerText.trim().toLowerCase();
      !nameValue.includes(inputValue) && card.classList.add("hide");
    });
  });
};

// checking to see if we are  on the home page to exacute(call()) the functions associated with the homePage...
loadIndex && homePageActivites();

// getting the data stored in the local storage to display the data on the country homepage...
let myCountry = JSON.parse(localStorage.getItem("mycountry"));
!loadIndex && createCountryPage(myCountry);

// testing sake
{
  (() => {
    let list = [];
    let myval;

    (async function inner() {
      let myList = [1, 2, 3, 4, 5, 6];
      list = myList.slice();
      myval = list.map((n) => `<ul>${n}</ul>`).join(" ");
    })();

    console.log();
  })();

  let man = async (n, expo) => n ** expo;
  // console.log(man(2, 3));

  function woman(n, expo) {
    return n ** expo;
  }
  // console.log(woman(3,4));
}
