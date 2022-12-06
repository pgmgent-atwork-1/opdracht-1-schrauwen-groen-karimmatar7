(() => {
    const $prive = document.getElementById("private");
    const $business = document.getElementById("business");
    const $public = document.getElementById("public");

    const htmlprivate = REFERENCES.filter((reference) => reference.type === "private").map((reference) => {
        return `<li><img src="${reference.image}" alt=""><p>${reference.description}</p></li>`
    }).join("");

    $prive.innerHTML = htmlprivate;

    const htmlb2b = REFERENCES.filter((ref) => ref.type === "b2b").map((ref) => {
        return `<li><img src="${ref.image}" alt=""><p>${ref.description}</p></li>`
    }).join("");

    $business.innerHTML = htmlb2b;

    const htmlpublic = REFERENCES.filter((refere) => refere.type === "public").map((refere) => {
        return `<li><img src="${refere.image}" alt=""><p>${refere.description}</p></li>`
    }).join("");

    $public.innerHTML = htmlpublic;

})()