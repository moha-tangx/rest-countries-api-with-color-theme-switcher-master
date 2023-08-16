// dark mode toggling
{const darkModeBtn = document.querySelector(".dark-mode-toggle-btn");
const toggleDarkMode = () => {
  const elements = document.querySelectorAll(".element,.background");
  elements.forEach((element) => element.classList.toggle("dark"))
};
darkModeBtn.addEventListener("click",()=>toggleDarkMode())
}
// filter by region toggle button open & close
{const filterBtn = document.querySelector(".select");
 const options = document.querySelector(".options");
 filterBtn.addEventListener("click", () => options.classList.toggle("show"));
};
// getting data from the API
async function getData() {
  let url = "https://restcountries.com";
  let localUrl = "../data.json";
  try {
    let data = await fetch(localUrl);
    let jsnData = await data.json();
    return jsnData;
  } catch (error) {
    alert("images not available check your connection and try again to see images ")
    console.log(error);
    let data = await fetch(localUrl);
    let jsnData = await data.json();
    return jsnData;
  }
}
// create cardfrom the data gotten from  the Api
const cardsContainer = document.querySelector(".cards-container");
const createCard = (country) => {
  const card = document.createElement("div");
  card.classList = "card element";
  card.innerHTML =
    `             <a href = "" >
                  <div class="card-img">
                      <img src="../public/Moha_tangx logo.png" alt="loading..."/>
                    </div>
                    <div class="card-description">
                        <p class="name">${country.name}</p>
                        <small class="population">
                            population: ${country.population}
                        </small><br>
                        <small class="region">
                            region: ${country.region}
                        </small><br>
                        <small class="capital">
                            capital: ${country.capital}
                        </small>
                        </a>` ;
  cardsContainer.appendChild(card);
};
const renderCards = async () => {
  const countries = await getData();
  countries.forEach((country) => {
   createCard(country);
  });
};
renderCards()
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
    })
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
})

const words = "hello everyone in this programme and not some of u guys";
const some = "some";
