// Grabiing my table so I can easily fill it with elements and data

const table = document.querySelector("#DataTabel");

// This is where i create the different table elements for my table

const tabelHead = document.createElement("thead");
const tabelBody = document.createElement("tbody");
const tabelTR = document.createElement("tr");
const tHeadAuthor = document.createElement("th");
const tHeadTitle = document.createElement("th");
const tHeadYear = document.createElement("th");
const tHeadDelete = document.createElement("th");


// Here i give the three head categories some inner text or "titles" 

tHeadAuthor.innerText = "Author";
tHeadTitle.innerText="Title";
tHeadYear.innerText="Year";

// Here i append the categories to the table, and after to the tablehead and lastly to the table istself

tabelTR.append(tHeadAuthor, tHeadTitle, tHeadYear, tHeadDelete);

tabelHead.appendChild(tabelTR);

table.appendChild(tabelHead);

table.appendChild(tabelBody);

// Here i handle the submit

document.querySelector("#FormData").addEventListener("submit", (e) => {
    // Making sure there is no reload of the page, because then our form data disapears
    
    e.preventDefault();

    // Grabbing the data from the form after the submit

    const dataAuthor = e.target.txtAuthor.value;
    const dataTitle = e.target.txtTitle.value;
    const dataYear = e.target.txtYear.value;

    // Here i create a default deletebutton and give it some inne text

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';

    // Here i create a template for the body of the table

    const template = document.createElement("tr");
    template.appendChild(document.createElement("td"));
    template.appendChild(document.createElement("td"));
    template.appendChild(document.createElement("td"));
    template.appendChild(document.createElement("td"));

    // Here i clone my templete and then I fill out the element whit our form data 

    let dataCollection = template.cloneNode(true);
    dataCollection.querySelector("td:nth-of-type(1)").innerText = dataAuthor;
    dataCollection.querySelector("td:nth-of-type(2)").innerText = dataTitle;
    dataCollection.querySelector("td:nth-of-type(3)").innerText = dataYear;
    dataCollection.querySelector("td:nth-of-type(4)").appendChild(deleteButton);
    // I added the eventlistner after it was cloned, because clone node does not clone functions
    dataCollection.querySelector("button").addEventListener("click", () => {
        // I also tried with a unik ID for the tr element that worked, but this is more simple and ->
        // becuase the function is embedded like this, the button knows what to delete
        tabelBody.removeChild(dataCollection);
    });

    // Once the clone is done being filled with data

    tabelBody.appendChild(dataCollection);
   
    // I use e.target.reset() to clean my input fields, making it easier to type in new data

    e.target.reset();
})





