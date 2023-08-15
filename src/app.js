
// dark mode toggling
const darkModeBtn = document.querySelector(".dark-mode-toggle-btn");
const toggleDarkMode = () => {
  const elements = document.querySelectorAll(".element,.background");
  elements.forEach((element) => element.classList.toggle("dark"))
};
darkModeBtn.addEventListener("click",()=>toggleDarkMode())

const createCard = (country) => {
  const cardsContainer = document.querySelector(".cards-container");
  const card = document.createElement("div");
  card.classList = "card element";
  card.innerHTML = `<div class="card-img"><img src="${country.flags.png} alt="loading..."/></div>
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
                    </div>`;
  cardsContainer.appendChild(card);
};


async function getData() {
  let url = "../data.json";
  let data = await fetch(url);
  let jsnData = await data.json();
  return jsnData;
}


const renderCard = async () => {
  const countries = await getData();
  countries.forEach((country) => {
    createCard(country);
  })
}

renderCard()

const input = document.getElementById("search-input");
console.log(input);

