import html2canvas from "html2canvas";

export default class SwotMatrix {

    constructor (form,matrixTable, itemsList) {
        this.form = form;
        this.matrixTable = matrixTable;
        this.itemsList = itemsList;
        this.counter = 0;
        this.textarea = document.getElementById("textinput");
        
        this.exportbtn = document.getElementById("export");
        this.exportbtn.addEventListener("click",this.handelExport);
        
        this.form.addEventListener('submit', this.handelForm.bind(this));
        
    }

    handelExport() {
        const matrix = document.getElementById("matrix")
        html2canvas(matrix).then(canvas => {
            const dataURL = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = dataURL;
            link.download = "swot-matrix";
            link.click();
        }).catch(err => {
            console.error("Error exporting as PNG");
            console.log(err);
        });
    }

    handelForm(event) {
     event.preventDefault();
     const formData = new FormData(this.form);   
     const data = Object.fromEntries(formData.entries());
     this.updateTable(data);
     this.insertItemList(data);
     this.counter++;

     this.textarea.value = ""; 
     console.log(data);
    }

    createItem(text , id) {
        const item = document.createElement("div");
        item.className = "item";
        item.id = "div" + id; 

        const textp = document.createElement("p");
        textp.textContent = text; 
        
        const buttonEdit = document.createElement("button");
        const buttonDelete = document.createElement("button");

        buttonDelete.textContent = "Delete";
        buttonEdit.textContent = "Edit";    
        
        buttonEdit.addEventListener("click", (event) => this.handelEdit(id));
        buttonDelete.addEventListener("click", (event) => this.handleDelete(id));
        
        item.appendChild(textp);
        item.appendChild(buttonEdit);
        item.appendChild(buttonDelete);

        return item;
    }
    
    insertItemList(data) {
        

        // const item = `<div id="div${this.counter}" class="item">
        //                 <p>${data.text}</p>
        //                 <button type="button">edit</button>
        //                 <button type="button" onclick="(event) => handleDelete(${this.counter})">delete</button></div>`;
        const id = this.counter;
        const item = this.createItem(data.text, id);
        this.itemsList.appendChild(item);
    }


    handelEdit(id) {
        const listElement = document.getElementById(id);
        const text  = listElement.textContent;        
        this.textarea.value = text;
        this.handleDelete(id);
    }
    handleDelete(id) {
        
        const divElement = document.getElementById("div"+id);
        const listElement = document.getElementById(id);

        divElement.remove();
        listElement.remove();

    }

    updateTable(data) {
        switch(data.field) {
            case 'S':
                this.matrixTable.rows[1].cells[0].innerHTML += `<li id="${this.counter}">${data.text}</li>`;
                break;
            case 'W':
                this.matrixTable.rows[1].cells[1].innerHTML += `<li id="${this.counter}">${data.text}</li>`;
                break;
            case 'O':
                this.matrixTable.rows[3].cells[0].innerHTML += `<li id="${this.counter}">${data.text}</li>`;
                break;
            case 'T':
                this.matrixTable.rows[3].cells[1].innerHTML += `<li id="${this.counter}">${data.text}</li>`;
                break;
            default:
                console.log("idk what you talking about cuh");
        }
    }

}