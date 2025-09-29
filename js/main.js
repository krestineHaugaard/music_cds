// Grabiing my table so I can easily fill it with elements and data

const table = document.querySelector("#DataTabel");

// This is where i create the different table elements for my table

const tabelHead = document.createElement("thead");
const tabelBody = document.createElement("tbody");
const tabelTR = document.createElement("tr");
const tHeadAuthor = document.createElement("th");
const tHeadTitle = document.createElement("th");
const tHeadYear = document.createElement("th");


// Here i give the three head categories some inner text or "titles" 

tHeadAuthor.innerText = "Author";
tHeadTitle.innerText="Title";
tHeadYear.innerText="Year";

// Here i append the categories to the table, and after to the tablehead and lastly to the table istself

tabelTR.append(tHeadAuthor, tHeadTitle, tHeadYear);

tabelHead.appendChild(tabelTR);

table.appendChild(tabelHead);

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
    deleteButton.innerText = "Delete";

    // Here i create a template for the body of the table

    const template = document.createElement("tr");
    template.appendChild(document.createElement("td"));
    template.appendChild(document.createElement("td"));
    template.appendChild(document.createElement("td"));
    template.appendChild(deleteButton);

    // Here i clone my templete and then I fill out the element whit our form data 

    let dataCollection = template.cloneNode(true);
    dataCollection.querySelector("td:nth-of-type(1)").innerText = dataAuthor;
    dataCollection.querySelector("td:nth-of-type(2)").innerText = dataTitle;
    dataCollection.querySelector("td:nth-of-type(3)").innerText = dataYear;
    // I added the eventlistner after it was cloned, because clone node does not clone functions
    dataCollection.querySelector("button").addEventListener("click", () => {
        // I also tried with a unik ID for the tr element that worked, but this is more simple and ->
        // becuase the function is embedded like this, the button knows what to delete
        tabelBody.removeChild(dataCollection);
    });

    // Once the clone is done 

    tabelBody.appendChild(dataCollection);

    table.appendChild(tabelBody);

    // I use e.target.reset() to clean my input fields, making it easier to type in new data

    e.target.reset();
})





