const img = document.getElementById("img");
const buttons = document.getElementById("buttonsDiv");
const body = document.body;
let colorIndex = 0;
let intervalId = null;





const trafficLight = (event) => {
    stopAutomatic();
    turOn[event.target.id]();
};

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    }else{
        colorIndex = 0;
    }
}

const changecolor = () => {
    const colors = ['red', 'yelow', 'green'];
    const color = colors[colorIndex];
    turOn[color]();
    nextIndex();
};

function stopAutomatic () {
    clearInterval (intervalId);
}

const turOn = {
  red: () => {  
    img.src = "./assets/images/semafaro2/red.png";
    body.style.backgroundImage = "url('./assets/images/CidadeColor/cidadeRed.jpeg')";
},

  yelow: () => {  
    img.src = "./assets/images/semafaro2/yelow.png";
    body.style.backgroundImage = "url('./assets/images/CidadeColor/cidadeYelow.jpeg')";
},
  green: () => {  
    img.src = "./assets/images/semafaro2/green.png";
    body.style.backgroundImage = "url('./assets/images/CidadeColor/cidadeGreen.jpeg')";
},
  automatic: () => intervalId = (setInterval(changecolor, 1500))  
};

buttons.addEventListener("click", trafficLight);

