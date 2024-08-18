minute = 0;
second = 0;
milisecond = 0;

timeout = null;



starttime = () => {
    milisec.innerText = `: ${milisecond++}`;

    if (milisecond < 10) {
        milisec.innerText = `:0 ${milisecond++}`
    } else {
        milisec.innerText = `: ${milisecond++}`;
    }
    if (milisecond == 100) {
        milisecond = 0;
        sec.innerText = `: ${second++}`;
        if (second < 10) {
            sec.innerText = `:0${second}`
        } else {
            sec.innerText = `: ${second}`;
        }

        if (second >= 60) {
            second = 0;
            min.innerText = ` ${minute++}`;
            if (minute < 10) {
                min.innerText = `0${minute}`
            } else {
                min.innerText = `${minute}`;
            }


        }
    }

}





stoptime = () => {
    clearInterval(timeout);
}

const resettime = () => {
    clearInterval(timeout);
    milisec.innerHTML = ":&nbsp;00 &nbsp;";
    sec.innerHTML = ":&nbsp;&nbsp;00 &nbsp; ";
    min.innerHTML = "&nbsp;00 &nbsp;";
    minute = second = milisecond = 0;
    laps.style.display = "none";
    count = 0;

    // Clear laps list
    const lapList = document.querySelector(".lists");
    lapList.innerHTML = ""; // Remove all list items
};



let count = 0;
laptime = () => {
    laps.style.display = "block"
    count++;
    const li = document.createElement("li");
    li.setAttribute("style", "padding:7px",)

    li.innerText = `#${count}   -   ${minute}: ${second} : ${milisecond}`;
    laps.append(li);
};





const reset = document.querySelector(".reset").addEventListener("click", resettime);
const start = document.querySelector(".start").addEventListener("click", function () {

    if (timeout !== null) {
        clearInterval(timeout);
    }
    timeout = setInterval(starttime, 20)
});
const stop = document.querySelector(".stop").addEventListener("click", stoptime);

const lapp = document.querySelector(".lapp").addEventListener("click", laptime);
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const milisec = document.querySelector("#milisec");
const laps = document.querySelector(".laps");

// Existing code...
