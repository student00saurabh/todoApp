let form = document.querySelector("form");

let table = document.querySelector("table");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inp1 = document.querySelector("#input1").value;
  let inp2 = document.querySelector("#input2").value;
  let inp3 = document.querySelector("#input3");

  if (inp2 == "") {
    alert("please enter a task , then click");
  } else {
    let row = document.createElement("tr");
    row.className = "table-row";
    table.appendChild(row);
    let item1 = document.createElement("td");
    let item2 = document.createElement("td");
    let item3 = document.createElement("td");
    let delbtn = document.createElement("td");
    let audio = document.createElement("audio");
    audio.setAttribute("src", "alarm.mp3");
    audio.setAttribute("preload", "auto");

    item1.innerText = inp1;
    item2.innerText = inp2;
    delbtn.className = "delete";
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-trash";
    row.appendChild(delbtn);
    row.appendChild(item1);
    row.appendChild(item2);
    if (inp3.checked) {
      row.appendChild(item3);
      item3.appendChild(audio);
      let stop = document.createElement("button");
      stop.innerText = "stop";
      stop.className = "stop-btn";
      item3.appendChild(stop);
      let targetTime = new Date(inp1).getTime();
      let currentTime = new Date().getTime();
      let timeDifference = targetTime - currentTime;

      setTimeout(() => {
        audio.play();
        row.style.backgroundColor = "yellow";
      }, timeDifference);
      stop.onclick = function () {
        audio.pause();
        row.style.backgroundColor = "#fcf9b6";
      };
    } else {
      row.appendChild(item3);
      item3.innerText = " ";
    }
    delbtn.appendChild(icon);
  }
  inp1 = "";
  inp2 = "";
  inp3 = "";
});

table.addEventListener("click", function (event) {
  console.log(event.target.nodeName);
  if (event.target.nodeName == "I") {
    let td = event.target.parentElement;
    let td_pr = td.parentElement;
    td_pr.remove();
  }
});
