class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        let html = "";

        fields.forEach(field => {
            html += `<label>${field.label}</label>
                     <input type="${field.type}" id="${field.label}"><br><br>`;
        });

        document.getElementById("form").innerHTML = html;
    }

    getFormData() {
        let data = {};

        this.fields.forEach(field => {
            data[field.label] = document.getElementById(field.label).value;
        });

        return data;
    }
}

let fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

let form = new FormBuilder(fields);

function submitForm() {
    let data = form.getFormData();
    document.getElementById("result").innerHTML =
        JSON.stringify(data);
    console.log(data);
}

