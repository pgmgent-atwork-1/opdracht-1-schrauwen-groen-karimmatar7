(() => {
    const $references = document.getElementById("references");
    const types = ["private", "b2b", "public"];
    const html = types.map((type) => {
        return `
        <div class="${type}" id="${type}">
            <h2>${getTitleforType(type)}</h2>
            <ul>
            ${REFERENCES.filter((reference) => reference.type === type).map((reference) => {
            return `
                <li>
                    <img src="${reference.image}" alt="">
                    <p>${reference.description}</p>
                </li>`
        }).join("")
            }
            </ul>
        </div>
        `})
        .join("");
    $references.innerHTML = html;

    function getTitleforType(type) {
        if (type === "private") {
            return "Privé-omgeving";
        } else if (type === "b2b") {
            return "Zakelijke omgeving"
        } else if (type === "public") {
            return "Openbaar domein"
        }
    }
})()