const data = fetch('https://schoolacount.github.io/module3/data.json').then(response => response.json()).then(data => data);
console.log(data);
