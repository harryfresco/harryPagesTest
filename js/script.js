function getMeme() {
  let word1 = document.forms["getNameForm"]["word1"].value;
  let word2 = document.forms["getNameForm"]["word2"].value;
  makeMeme(word1, word2).then(resp=>{ document.getElementById("meme").innerHTML = "<img src="+resp.data.url+" height=50%>"})

}


const username = "hazzafresh";
const password = "Fresco1!";



// Get a random meme - Outputs a promise with a meme ID
async function readAll() {
  const resp = await fetch(`https://api.imgflip.com/get_memes`);
  const json = await resp.json();
  
    // Create array of memes
    let memes = json.data.memes;

    // Generate random index based on number of memes
    let randIndex = Math.floor(Math.random() * memes.length)
    // Choose memeid
    let randMeme = json.data.memes[randIndex].id;

  //console.log(randMeme)
  return randMeme;
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

async function makeRandomMeme(){

  let word1 = await randomWord()
  let word2 = await randomWord()

   makeMeme(word1, word2).then(resp=>{ document.getElementById("meme").innerHTML = "<img src="+resp.data.url+"  height=50%> "})
   //document.getElementById("clear").innerHTML = "<button onClick='clear()'>Clear</button>"

}
// Get a random word
async function randomWord(){

  const resp = await fetch(`https://random-word-api.herokuapp.com/word`);
  const json = await resp.json();
 
    let word = json[0];

  return word;



    
}