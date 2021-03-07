const message = document.getElementById("message")

    /*
    1. Split message words and store it in an array.
    2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
    */

    let words = message.replaceAll(",", " ").replaceAll(".", " ").toLowerCase().split(" ").sort();

    let index = words.indexOf("");

    do {
        words.splice(index, 1);
        index = words.indexOf("");
    } while (index != -1);

    const countOccurrences = (words, val) => words.reduce((a, v) => (v === val ? a + 1 : a), 0);

    let counts = words.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
    }, {});
    let maxCount = Math.max(...Object.values(counts));



    let messageWords = words
    let theMostFrequentWord = Object.keys(counts).filter(k => counts[k] === maxCount);
    let numberOfWordsInTheMessage = words.length;


    console.log(The most frequent word of the message is "${theMostFrequentWord}")
    console.log(The number of words in the message is ${numberOfWordsInTheMessage})


function RandomPhrasesАndPictures(){
  
let RandomNumber = Math.floor(Math.random() * 3)

const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

phrase.innerHTML=randomPhrasesAndPictures[RandomNumber].phrase;
picture.src=randomPhrasesAndPictures[RandomNumber].imageURL;

}