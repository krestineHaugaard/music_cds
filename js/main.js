// Det her virker men er for simpelt

// document.querySelector("#FormData").addEventListener("submit", (e) => {
//     e.preventDefault();

//     const dataAuthor = e.target.txtAuthor.value;
//     const dataTitle = e.target.txtTitle.value;
//     const dataYear = e.target.txtYear.value;

//     console.log(dataAuthor, dataTitle, dataYear);

//     const dataOverview = document.querySelector("#DataTabel");

//     const authorText = document.createElement("p");

//     const titleText = document.createElement("p");

//     const yearText = document.createElement("p");

//     authorText.appendChild(document.createTextNode(dataAuthor));

//     titleText.appendChild(document.createTextNode(dataTitle));

//     yearText.appendChild(document.createTextNode(dataYear));

//     dataOverview.appendChild(authorText);
//     dataOverview.appendChild(titleText);
//     dataOverview.appendChild(yearText);

// })



// Det her skal rettes meget til

document.querySelector("#FormData").addEventListener("submit", (e) => {
    e.preventDefault();

    const dataAuthor = e.target.txtAuthor.value;
    const dataTitle = e.target.txtTitle.value;
    const dataYear = e.target.txtYear.value;

    const dataOverview = document.querySelector("#DataTabel");

    const tabel = document.createElement("table");

    const tabelHead = document.createElement("thead");

    const tabelTR = document.createElement("tr");

    const tHeadAuthor = document.createElement("th");

    const tHeadTitle = document.createElement("th");

    const tHeadYear = document.createElement("th");

    // tHeadAuthor.appendChild(document.createTextNode("Author"));

    // tHeadTitle.appendChild(document.createTextNode("Title"));

    // tHeadYear.appendChild(document.createTextNode("Year"));

    tabelTR.appendChild(tHeadAuthor.innerText);

    tabelTR.appendChild(tHeadAuthor + tHeadTitle + tHeadYear);

    tabelTR.appendChild(tHeadAuthor + tHeadTitle + tHeadYear);

    tabelHead.appendChild(tabelTR);

    tabel.appendChild(tabelHead);

    dataOverview.appendChild(tabel);


})







