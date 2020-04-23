const FORM = document.getElementById("contact_form");

FORM.addEventListener('submit', event => {
    event.preventDefault();
    var fdata = {};
    for (let index = 0; index < FORM.elements.length; index++) {
        if(FORM.elements[index].name != "Button") {
            fdata[FORM.elements[index].name] = FORM.elements[index].value;
        }
    }
    
    var fdata_JSON = JSON.stringify(fdata);    
    
    document.getElementById("container").appendChild(fdata);

    console.log(fdata_JSON);
    
    // FORM.reset();
});