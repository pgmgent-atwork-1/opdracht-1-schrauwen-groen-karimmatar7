(() => {
    const $aptitude = document.getElementById("aptitude");
    const $reference = document.getElementById("reference-aptitude");

    const htmlaptitude = SERVICES.filter((serve) => serve.type === "aptitude-one").map((serve) => {
        return `<li><div class="zoom"><a href=""><img src="${serve.image}" alt=""></div><h2>${serve.title}</h2><p>${serve.description}</p><button href="" class="more-information-aptitude">${serve.button}</button></a></li>`
    }).join("");

    $aptitude.innerHTML = htmlaptitude;

    const htmlref = REFERENCES.slice((4)).map((refe) => {
        return `<li><img src="${refe.image}"></img> <p>${refe.description}</p></li>`
    }).join("");
    $reference.innerHTML = htmlref;
})()