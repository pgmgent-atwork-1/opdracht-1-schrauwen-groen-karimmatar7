(() => {
    const $maintenance = document.getElementById("maintenance");
    const $reference = document.getElementById("reference-maintenance");

    const preview = SERVICES.filter((ser) => ser.type === "maintenance-one").map((ser) => {
        return `<li><a href="">
        <div class="zoom"><img src="${ser.image}" alt=""></div><h2>${ser.title}</h2><p>${ser.description}</p><button href="" class="more-information-aptitude">${ser.button}</button></a></li>`
    }).join("");

    $maintenance.innerHTML = preview;

    const htmlref = REFERENCES.slice((4)).map((refe) => {
        return `<li><img src="${refe.image}"></img> <p>${refe.description}</p></li>`
    }).join("");
    $reference.innerHTML = htmlref;
})()