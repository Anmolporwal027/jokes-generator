const joke = document.querySelector(".jokes");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const btn = document.querySelector("#btn");

async function generate(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.joke);
    joke.textContent = data.joke
}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    generate(url);
})

