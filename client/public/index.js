/*for (let i = 0; i < 10; i++) {

    let p = document.createElement("p");
    let a = document.createAttribute("data-cool");
    a.value = "airco";
    p.setAttributeNode(a);
    document.createAttribute("class")
    p.innerText = "Hello " + i;
    if (i % 2 === 0) {
        p.style.color = "#FF0000";
    }
    document.body.appendChild(p);
};*/

const urenSpan = document.getElementById("uren");
const minutenSpan = document.getElementById("minuten");
const secondenSpan = document.getElementById("seconden");

async function getTime() {
    let response = await fetch("/api/v1/time");
    let tijd = await response.json();

    urenSpan.innerText = tijd.uren;
    minutenSpan.innerText = tijd.minuten;
    secondenSpan.innerText = tijd.seconden;
};

(async function () {
    //await getTime();
    setInterval(getTime, 1000);
})();

