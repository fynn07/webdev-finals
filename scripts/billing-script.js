

function addItem(){
    let initial_value = document.getElementById('cost');
    let dropdown_option = document.getElementById('option-name');

    let number = parseInt(dropdown_option.value, 10);
    let text = dropdown_option.options[dropdown_option.selectedIndex].text;

    initial_value.innerHTML = parseInt(initial_value.innerHTML, 10) + number;

    let para = document.createElement("p");
    let node = document.createTextNode(text);
    para.appendChild(node);

    let element = document.getElementById("items-purch");
    element.appendChild(para);
}

function redirect(){
    window.location.href = "billing.html"
}


