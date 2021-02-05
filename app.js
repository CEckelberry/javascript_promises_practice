//PART 1 Number Facts
let url = "http://numbersapi.com/11?json"

let myFirstPromise = axios.get(url);
myFirstPromise
.then(data => console.log(data.data.text));




let bulk_url = "http://numbersapi.com/4,33,451?json";
let bulkpromise = axios.get(bulk_url);
let list = document.getElementById("my_list");


bulkpromise
.then(data => {
    console.log(data)
    bulk_dict = data.data
    return bulk_dict
})
.then(bulk_dict => {
    for (let [key, value] of Object.entries(bulk_dict)) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(value));
    list.appendChild(item);
    }
})

let div = document.getElementById("4_things")

let mySecondPromise = axios.get(url);
let myThirdPromise = axios.get(url);
let myFourthPromise = axios.get(url);

myFirstPromise
.then(data => {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(data.data.text));
        div.appendChild(p);

})

mySecondPromise
.then(data => {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(data.data.text));
        div.appendChild(p);

})

myThirdPromise
.then(data => {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(data.data.text));
        div.appendChild(p);

})

myFourthPromise
.then(data => {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(data.data.text));
        div.appendChild(p);

})

//PART 2 Deck of Cards

card_url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
let firstCardPromise = axios.get(card_url);
firstCardPromise
.then(data => {
    console.log(data)
    console.log(`${data.data.cards[0].value} of ${data.data.cards[0].suit}`)
})


let secondCardPromise = axios.get(card_url);
secondCardPromise
.then(data => {
    let first = `${data.data.cards[0].value} of ${data.data.cards[0].suit}`
    // console.log(data)
    secondCardUrl = `https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1`
    return axios.get(secondCardUrl)
    .then(data2 => {
        // console.log(data)
        // console.log(data2)
        console.log(`${data.data.cards[0].value} of ${data.data.cards[0].suit}`)
        console.log(`${data2.data.cards[0].value} of ${data2.data.cards[0].suit}`)
        })
})


