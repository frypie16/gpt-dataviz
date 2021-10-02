console.log("what do u want");

let canvas = document.querySelector("#canvas");

canvas.addEventListener("click", function (event) {

  console.log("clicking the canvas");
  let art = new Array('human_responses/pixel1.png','human_responses/pixel2.png',
                      'human_responses/pixel3.png','human_responses/pixel4.png',
                      'human_responses/pixel5.png', 'human_responses/pixel6.png',
                      'human_responses/pixel7.png','human_responses/pixel8.png',
                      'human_responses/pixel9.png','human_responses/pixel10.png',
                      'human_responses/pixel11.png', 'human_responses/pixel12.png',
                      'gpt_responses/pixelgpt1.png', 'gpt_responses/pixelgpt2.png',
                      'gpt_responses/pixelgpt3.png', 'gpt_responses/pixelgpt4.png',
                      'gpt_responses/pixelgpt5.png', 'gpt_responses/pixelgpt6.png' ); 

  let currentArt = art[Math.floor(Math.random() * art.length)];
  var divsize = 100;

  var posx = (Math.random() * window.innerWidth - divsize).toFixed();
  var posy = (Math.random() * window.innerHeight - divsize).toFixed();

  imgArray = new Image();
  imgArray.classList.add("imgArray");
  imgArray.src = currentArt;
  
  imgArray.style.left = posx + "px";
  imgArray.style.top = posy + "px";
  imgArray.style.position = "fixed";
  imgArray.style.width = Math.floor((Math.random()*180)+150)+"px";
  canvas.appendChild(imgArray);

  // moved this block of code into this function above seems to have fixed everything. 
  let shuffleButton = document.querySelector(".shuffle");
  shuffleButton.addEventListener("click", function (event) {
    console.log("clicking the suffle button");
  
    Array.from(document.querySelectorAll('.imgArray')).forEach(function(img) {
        
      var posx = (Math.random() * window.innerWidth - divsize).toFixed();
      var posy = (Math.random() * window.innerHeight - divsize).toFixed();
    
      img.style.left = posx + "px"; 
      img.style.top = posy + "px";
  
  })

   });
})
let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function (event) {
  console.log("clicking the clear button");
  canvas.innerHTML = " ";
 });




// var responses = [
//     'It is Certain.',
//     'It is decidedly so.',
//     'Without a doubt.',
//     'Yes definitely.',
//     'You may rely on it.',
//     'As I see it, yes.',
//     'Most likely.',
//     'Outlook good.',
//     'Yes.',
//     'Signs point to yes.',
//     'Reply hazy, try again.',
//     'Ask again later.',
//     'Better not tell you now.',
//     'Cannot predict now.',
//     'Concentrate and ask again.',
//     'Don’t count on it.',
//     'My reply is no.',
//     'My sources say no.',
//     'Outlook not so good.',
//     'Very doubtful.'
// ]

// var randomResponse = responses[Math.floor(Math.random() * responses.length)];

// document.querySelector('#display').innerHTML = randomResponse;