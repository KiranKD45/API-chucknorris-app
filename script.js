const container = document.getElementById("container");



function Jokee() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response)=>{return response.json()})
    .then((data)=>{container.innerHTML = data.value})
    .catch("something wrong happened")
}