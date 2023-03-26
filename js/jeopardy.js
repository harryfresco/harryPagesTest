let answer;

function getRandom() {
    //fetchRandom() outputs a promise, so you have to resolve with .then()
    fetchRandom().then(resp=>{answer =addToTable(resp)})
    
}
  
  getRandom()
function check(){
    let guess = document.forms["guessForm"]["guess"].value;
    console.log(answer)
    if(answer.toLowerCase().includes(guess.toString().toLowerCase())){
        console.log("YEs")
        document.getElementById('result').innerHTML="<div class='alert alert-success' role='alert'>Correct!</div>"
    }
    else if(guess.toLowerCase().includes(answer.toString().toLowerCase())){
        console.log("YEs")
        document.getElementById('result').innerHTML="<div class='alert alert-success' role='alert'>Correct!</div>"

    }
    else{console.log("no")
    document.getElementById('result').innerHTML="<div class='alert alert-danger' role='alert'>Incorrect! The answer was "+answer+"</div>"
  }
}
  
  
  
  // Get a random question - Outputs a promise with a question object
  async function fetchRandom() {
    const resp = await fetch("http://jservice.io/api/random");
    const json = await resp.json();

  
    console.log(json)
    return json;
  }
  
  function addToTable(response){
   
    let tbody = document.getElementById("tbody");

    // <tr>
    //     <td>Mark</td>
    //     <td>Otto</td>
    //     <td>@mdo</td>
    // </tr>
    console.log(response);

    

        //notexpired
        
          tbody.innerHTML="<tr><td>Category: </td><td> "+response[0].category.title.toString()+"</td> <tr><td colspan=2> "+response[0].question.toString()+"</td></tr></tr>"
      
return response[0].answer.toString()
    
    // let row =table.insertRow();
 
    //     let cell1 = row.insertCell();
    //     let cell2 = row.insertCell();
    //     let cell3 = row.insertCell();
    //     let cell4 = row.insertCell();
    //     cell1.innerHTML = response.id.toString();
    //     cell2.innerHTML = response.name.toString();
    //     cell3.innerHTML = response.expiry.toString();
    //     cell4.innerHTML = response.grade.toString();
    
}