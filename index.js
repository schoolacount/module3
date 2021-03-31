let data;

    (async() => {
let response = await fetch('https://schoolacount.github.io/module3/data.json');
data = await response.json(); 
console.log(data)
})();

