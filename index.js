const timeStart = document.getElementById("timestart");
const timeEnd = document.getElementById("timeend");

function calcTime(){
  let getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1]); //получение даты из строки (подставляются часы и минуты
    let different = (getDate(timeEnd.value) - getDate(timeStart.value));

      let hours = Math.floor((different % 86400000) / 3600000);
     let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
          let result = hours + ':' + minutes;
          console.log(result)
            document.querySelector(".out").innerText = result;
            }
            timeStart.addEventListener("input", calcTime)

            timeEnd.addEventListener("input", calcTime)