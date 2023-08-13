async function getData() {
  let url = "../data.json";
  let data = await fetch(url);
  let jsnData = await data.json();
  console.log(jsnData);
}
// getData();