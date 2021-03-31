    (async() => {
let response = await fetch('https://schoolacount.github.io/module3/data.json');
let data = await response.json(); 
console.log(data)
})();
