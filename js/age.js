function getAge() {
    let name = document.forms["getNameForm"]["name"].value;
    let locale = document.forms["getNameForm"]["locale"].value;
    fetchAge(name, locale).then(resp=>{ document.getElementById("age").innerHTML = "<h1>"+resp.name+"! Your age is: "+resp.age+" </h1>"})
  
  }
  
  

  
  
  
  // Get a random meme - Outputs a promise with a meme ID
  async function fetchAge(name,locale) {
    const resp = await fetch("https://api.agify.io?name="+name+"&country_id="+locale);
    const json = await resp.json();

  
    console.log(json)
    return json;
  }
  
  // Make a meme with two words - Outputs a promise with the object
   async function makeMeme(word1, word2) {
   let id = await readAll()
  
    //console.log(id)
    let bodyVar = "username=" + username + "&password=" + password + "&template_id=" + id + "&text0=" + word1 + "&text1=" + word2;
  
    //console.log(bodyVar)
    const response = fetch("https://api.imgflip.com/caption_image", {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:bodyVar
      
  
    }).then(response => response.json())
    .then(data => {return data});
  //console.log(await response)
  
    return await response
  }
