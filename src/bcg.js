export default class BCG {

    constructor (form,projectList, BCGmatrix) {
        this.form = form;
        this.projectList = projectList;
        this.BCGmatrix = BCGmatrix;

        this.form.addEventListener('submit', this.handelForm.bind(this));
    }

    getConstraints() {
        const MGCEle = document.getElementById("MGC");
        const MSCEle = document.getElementById("MSC");
        const MGC = MGCEle.value;
        const MSC = MGCEle.value;
        
    }

    handelForm(event) {
     event.preventDefault();
     const formData = new FormData(this.form);   
     const data = Object.fromEntries(formData.entries());
    
    }


    insertList
}