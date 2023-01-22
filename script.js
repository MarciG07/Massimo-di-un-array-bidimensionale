
function numero(){
  let num = document.getElementById("n_array").value;
  document.write("<h1>Massimo di <strong id = 'num'>"+ num +"</strong> array</h1>");
  for (let i = 0; i < num; i++){
    
    document.write("<link href='style.css' rel='stylesheet' type='text/css' /><input type = 'number' id = '"+ i +"' placeholder = 'N° elementi array "+ i +"'></br></br>");
  
  };
  document.write("<button class = 'procedi' onclick = elementi()>Procedi</button></br></br></br>");
};

function elementi(){
  let num = document.getElementById("num").innerHTML;
  for (let i = 0; i < num; i++){
    let num2 = document.getElementById(i).value;
    for (let x = 0; x < num2; x++){
      x++;
      let y = x+9;
      document.write("<input id = "+i+""+y+" placeholder = '"+x+"° numero'>");
      y = y-9;
      x--;
    };
    document.write("</br></br>");
  };
  document.write("</br></br><button class = 'procedi2' onclick = calcolo()>Procedi</button></br></br>");
};

function calcolo(){
  let array = [];
  let num = document.getElementById("num").innerHTML;
  for (let i = 0; i < num; i++){
    let num2 = document.getElementById(i).value;
    for (let x = 0; x < num2; x++){
      x=x+10;
      let num3 = document.getElementById(i+""+x).value;
      let num4 = Number(num3);
      x=x-10;
      array.push(num4);
    }
  };
  let max = 0;
  for(let number of array){
    if(number > max){
      max = number;
    };
  };
  document.write("<p>Il numero massimo nell'array bidimensionale è "+max+".");
}