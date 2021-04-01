'use strict';

(async () => {let data = await fetch('https://schoolacount.github.io/module3/data.json').then(x => x.json()); x(data); })();

const x = data => {
  let y;
  const headers = [];
  const val = [];

  for (let i = 0; i < data.length; i++) {
    document.body.appendChild(document.createElement("DIV")).appendChild(document.createElement("UL"))[i];
    document.querySelectorAll("div")[i].appendChild(document.createElement("HR"));
    document.querySelectorAll("div")[i].className = `list${1+i}`;

    for (let x = 0; x < Object.keys(data[0]).length; x++) {
      document.querySelectorAll("div ul")[i].appendChild(document.createElement("LI")).appendChild(document.createElement("H3"))[x];
      headers.push(Object.keys(data[i])[x]);
      val.push(Object.values(data[i])[x]);
    }
    y = val.length === 15 ? val.splice(4,1).concat(val.splice(8,1)).concat(val.splice(12,1)) : false;
  }
  for (let t = 0; t < document.querySelectorAll("div ul h3").length; t++) {
    
    document.querySelectorAll("div ul h3")[t].innerText = `${headers[t]}:`;

    if(t === 4)  {document.querySelectorAll("div ul li")[4].appendChild(document.createElement("IMG")).src=y[0]; continue;}   
    if(t === 9)  {document.querySelectorAll("div ul li")[9].appendChild(document.createElement("IMG")).src=y[1]; continue;}
    if(t === 14)  {document.querySelectorAll("div ul li")[14].appendChild(document.createElement("IMG")).src=y[2]; continue;}
    
    document.querySelectorAll("div ul li")[t].appendChild(document.createElement("P"));
  }

    for (let p=0; p < val.length; p++) {document.querySelectorAll("div ul p")[p].innerText=val[p];}

}
