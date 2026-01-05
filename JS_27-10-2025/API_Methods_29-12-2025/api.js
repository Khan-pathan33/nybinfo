let data=[]
    fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    return data.json()

})

.then((d)=>{
  data=d;
    console.log(d)
})
.catch((e)=>{
    
    console.log(e)
})
console.log(data)

fetch("https://api.example.com/users/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Alex Updated",
    email: "alex@newmail.com"
  })
})
.then(response => response.json())
.then(data => console.log(data));
async function getJoke() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    document.getElementById('joke').innerText = data.setup + ' ... ' + data.punchline;
}


async function getUser() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];
    document.getElementById('user').innerHTML = `
        <img src="${user.picture.medium}">
        <p>${user.name.first} ${user.name.last}</p>
        <p>${user.email}</p>
        <p>${user.location.country}</p>
    `;
}

async function getPrices() {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await res.json();
    document.getElementById('prices').innerHTML = `
        <p>Bitcoin: $${data.bitcoin.usd}</p>
        <p>Ethereum: $${data.ethereum.usd}</p>
    `;
}

async function getQuote() {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    document.getElementById('quote').innerText = `"${data.content}" — ${data.author}`;
}
