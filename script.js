function label_create(tagname,attrname,attrvalue,content){
    var ele =document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;

}

function break_create(){
    var ele = document.createElement('br');
    return ele;
}

function input_create(tagname,attr1name,attr1value,attrIdname,attrIdvalue){
    var element=document.createElement(tagname);
    element.setAttribute(attr1name,attr1value);
    element.setAttribute(attrIdname,attrIdvalue);
    return element;
}
  
function button_create(tagname,attr1name,attr1value,attr2name,attr2value,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    ele.innerHTML=content;
    return ele;
}

var form = document.createElement('form');

var first_name_label= label_create("label", "for", "Fname", "First-name");
var first_br=break_create();
var first_name_input= input_create("input","type", "text", "id", "Fname");
form.append(first_name_label, first_br, first_name_input);

form.appendChild(document.createElement('br'));

var middle_name_label=label_create("label", "for","Mname","Middle-name");
var middle_br=break_create();
var middle_name_input= input_create("input","type","text","id","Mname");
form.append(middle_name_label,middle_br,middle_name_input);

form.appendChild(document.createElement('br'));

var last_name_label=label_create("label","for","Lname","Last-name");
var last_br=break_create();
var last_name_input= input_create("input","type","text","id","Lname");
form.append(last_name_label,last_br,last_name_input);

form.appendChild(document.createElement('br'));

var email_label = label_create("label","for","email","Email");
var email_br = break_create();
var email_input = input_create("input","type","email","id","email");
form.append(email_label,email_br,email_input);

form.appendChild(document.createElement('br'));

var password_label=label_create("label","for","password","Password");
var password_br =break_create();
var password_input = input_create("input","type","password","id","password");
form.append(password_label,password_br,password_input);

form.appendChild(document.createElement('br'));

var submit_button= button_create("button","type","button","onclick","foo()","Submit");
form.append(submit_button);

document.body.append(form);


function foo(){
    var ele1 = document.getElementById("Fname").value;
    var ele2 = document.getElementById("Mname").value;
    var ele3 = document.getElementById("Lname").value;
    var ele4 = document.getElementById("email").value;
    var ele5 = document.getElementById("password").value;
    console.log(ele1,ele2,ele3,ele4,ele5);
}