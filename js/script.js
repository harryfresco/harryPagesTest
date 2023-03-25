function getName(){
    let nameInput=document.forms["getNameForm"]["nameInput"].value;

    document.getElementById("nameOutput").innerHTML = nameInput;
    console.log(nameInput);
}