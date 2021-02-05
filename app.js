let url = "http://numbersapi.com/11?json"

let myFirstPromise = axios.get(url);
myFirstPromise
.then(data => console.log(data.data.text))