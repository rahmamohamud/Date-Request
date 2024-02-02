document.addEventListener("DOMContentLoaded", function() {
    const clickingYes = document.getElementById('yes');
    const clickingNo = document.getElementById('no');


     //Initial position of the 'NO' button
    let initialX = 200;
    let initialY = 0; 
    let noButton = document.getElementById("no");
    noButton.style.left = initialX + "px";
    noButton.style.top = initialY + "px";

    //Clicking the 'yes' button
    clickingYes.addEventListener('click', function() {
        
        //New box with different text
        document.getElementById('words').innerHTML ='<h2>YAAAAAAAAAAAAAAAAAAAY</h2><h4>✨ SEE YOU SATURDAY ✨ <br> 💞💖💛💗💖💖💛💗💖</h4>';

        //More cute cat gifs, because why not?
        document.getElementById('gif').innerHTML = '<img class="cat-image" src = "https://media1.tenor.com/m/CpS4vBQcsesAAAAC/cute-cat-love.gif"><br><img class="cat-image" src = "https://media1.tenor.com/m/18_N-yQk-z4AAAAC/hug-cat-love.gif"><br>';
       
        //Remove the container with the buttons
        document.getElementById('case').innerHTML = '';
        
    });

   

    // Clicking the 'no' button
    clickingNo.addEventListener('click', function() {
        moveButton(); // Call the moveButton function
    });

    //The moveButton function (where all the magic happens)
    function moveButton() {

        //container with buttons
        let caseContainer = document.getElementById("case");

        //the noButton === the magician
        let noButton = document.getElementById("no");
        let yesButton = document.getElementById("yes");

        //Container dimentions
        let caseRect = caseContainer.getBoundingClientRect();

        let maxX = caseRect.width - noButton.offsetWidth;
        let maxY = caseRect.height - noButton.offsetHeight;

        //Calculating new random position
        let newX = Math.floor(Math.random() * maxX);
        let newY = Math.floor(Math.random() * maxY);

        //Check for collision with YES button so that it doesn't hover over it and block access to the 'yes' button
        while (
            newX < yesButton.offsetLeft + yesButton.offsetWidth &&
            newX + noButton.offsetWidth > yesButton.offsetLeft &&
            newY < yesButton.offsetTop + yesButton.offsetHeight &&
            newY + noButton.offsetHeight > yesButton.offsetTop
        ) {
            newX = Math.floor(Math.random() * maxX);
            newY = Math.floor(Math.random() * maxY);
        }

        //Setting the new position
        noButton.style.left = newX + "px";
        noButton.style.top = newY + "px";

        //Crying cat GIF because why are you saying no?
       document.getElementById('gif').innerHTML = '<img class="cat-image" src = "https://media1.tenor.com/m/gK32v_OWs0kAAAAC/omg-cat.gif">'; 

    }

    //Add event listeners for mouseover and touchstart outside the 'clickingNo' event listener for a good mobile experience
    noButton.addEventListener("mouseover", moveButton);
    noButton.addEventListener("touchstart", moveButton);
});
