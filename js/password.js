function check(){

    let input = document.forms["passwordForm"]["password"].value;
    if(input == "password"){
        //document.getElementById("input").innerHTML="";
        document.getElementById("input").innerHTML='<video width=100% height=auto controls ><source src="../../media/videoTest.mp4" type="video/mp4"></video>';
    }
    else{
        document.getElementById("passwordForm").innerHTML="<input type='password'class='form-control is-invalid'  id='password' name='password' placeholder='Enter password' required><div id='passwordHelpBlock' class='invalid-feedback'>Incorrect password</div><br><input type='button' class='btn btn-primary'value='Submit' onclick='check();'>"
    }
}