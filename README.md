# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).  
 Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

##

### OVERVIEW

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum earum quibusdam eum fugit debitis animi, tenetur explicabo molestias aliquam dignissimos assumenda blanditiis. Officia nostrum, voluptas adipisci sunt eos perferendis sint et sequi nam.quae odio tempore nam dolor fugiat id nulla quam esse accusamus officia, corporis corrupti molestiae facilis exercitationem amet quidem nobis natus consequatur ipsam non! Aspernatur inventore blanditiis doloremque mollitia laboriosam soluta quia recusandae corrupti quibusdam debitis at, officia obcaecati minus enim.

Minus consequuntur fuga dolore error eos laborum dignissimos eligendi, voluptate, laboriosam, mollitia voluptates inventore veniam aut placeat minima ex! Ut nulla quasi tenetur eos commodi, natus necessitatibus nesciunt asperiores quo nobis vitae minus, reprehenderit omnis exercitationem.

Nemo itaque odio eos architecto vero, voluptatum, modi deserunt nihil totam temporibus dolorem vitae eaque, quis culpa nesciunt reprehenderit voluptatibus fuga corrupti aliquid nam aspernatur nulla inventore vel omnis? Deserunt eligendi culpa est eius totam officia rem? Commodi maiores necessitatibus similique nulla ab est tempora ducimus suscipit et? Laboriosam perspiciatis nobis possimus exercitationem ad corporis aliquam sint.

##
### The challenge

Users should be able to:

- See all countries from the API on the homepage
- **Search** for a country using an `input` field
- **Filter** countries by region
- Click on a country to see **more detailed** information on a separate page
- Click through to the border countries on the detail page
- **Toggle** the color scheme between light and dark mode *(`optional`)*

##
### Screenshot
![](./design/desktop-design-home-dark.jpg)

#### this is my interpretation design

##
### Links
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Nemo itaque odio eos architecto vero, voluptatum, modi deserunt nihil totam temporibus dolorem vitae eaque, quis culpa nesciunt reprehenderit voluptatibus fuga corrupti aliquid nam aspernatur nulla inventore vel omnis? Deserunt eligendi culpa est eius totam officia rem? Commodi maiores necessitatibus similique nulla ab est tempora ducimus suscipit et? Laboriosam perspiciatis nobis possimus exercitationem ad corporis    *aliquam sint.*  
oluptatum, modi deserunt nihil totam temporibus dolorem vitae eaque, quis culpa nesciunt reprehenderit voluptatibus fuga corrupti aliquid nam aspernatur nulla inventore vel omnis? Deserunt eligendi culpa est eius totam officia rem? Commodi maiores necessita     
oluptatum modi deserunt nihil totam temporibus dolorem vitae eaque, quis culpa nesciunt reprehenderit voluptatibus fuga corrupti aliquid nam aspernatur nulla   inventore vel omnis? Deserunt eligendi culpa est eius totam officia rem? Commodi maiores necessita

##
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- modern javascript
- js fetch API

```js
const proudOfThisFunc = async () => {
   const  url = "https://restcountries.com/v3.1/all";
   const localUrl ='../data.json';
  try{
    const data = await fetch(url);
    const jsnData = await data.json();
    return jsnData;
  }catch(err){
    alert("data couldn't be fetched, check your internet connection and try again..");
    console.log(err);
    const data = await fetch(localUrl);
    const jsnData = await data.json();
    return jsnData;
  }
}
```

##
### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

##
### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

- Website - [moha_tangx](https://www.your-site.com)
- Frontend Mentor - [@moha_tangx](https://www.frontendmentor.io/profile/moha_tangx)
- Instagram/Threads - [@moha-tangx](https://www.instagram.com/moha_tangx)
- LinkedIn - [moha_tangx](https://www.LinkedIn./profile/moha_tangx)