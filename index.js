'use strict';

(async () => {
  let data = await fetch('https://schoolacount.github.io/module3/data.json').then(x => x.json());
  x(data);
})();

const x = data => {
  const headers = [];

  for (let i = 0; i < data.length; i++) {
    document.body.appendChild(document.createElement("DIV")).appendChild(document.createElement("UL"))[i];
    document.querySelectorAll("div")[i].appendChild(document.createElement("HR"));
    document.querySelectorAll("div")[i].className = `list${1+i}`;

    for (let x = 0; x < Object.keys(data[0]).length; x++) {
      document.querySelectorAll("div ul")[i].appendChild(document.createElement("LI")).appendChild(document.createElement("H3"))[x];
      headers.push(Object.keys(data[i])[x]);
    }

  }
  for (let t = 0; t < document.querySelectorAll("div ul h3").length; t++) {
    document.querySelectorAll("div ul h3")[t].innerText = `${headers[t]}:`;
  }

}
