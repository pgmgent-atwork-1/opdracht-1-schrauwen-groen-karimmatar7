(() => {
    const $services = document.getElementById("services");
    const $reference = document.getElementById("reference");
    const type = $services.dataset.type;
    $services.innerHTML = SERVICES.filter((serve) => serve.type === type).map((serve) => {
        return `<li>
        <div class="zoom">
        <a href="">
        <img src="${serve.image}" alt=""></div>
        <h2>${serve.title}</h2>
        <p>${serve.description}</p>
        <button href="" class="more-information-aptitude">${serve.button}</button>
        </a></li>`
    }).join("");

    $reference.innerHTML = REFERENCES.slice(0, 6).map((refe) => {
        return `<li><img src="${refe.image}"></img> 
        <p>${refe.description}</p></li>`
    }).join("");
})()