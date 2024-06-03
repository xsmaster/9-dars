
let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];


let wordsWithN = [];
let wordsWithoutN = [];


for (let word of letterSearch) {
    if (word.toLowerCase().includes('н')) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
}

console.log("Слова с буквой 'н':", wordsWithN);
console.log("Слова без буквы 'н':", wordsWi);





























// for(let index = 0; index < mevalar.length; index++){
//     console.log(mevalar[index]);
// } 