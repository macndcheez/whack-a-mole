$(document).ready(function() {
    // select start button
    const $startBtn = $('#start');

    // build a jquery array-like object of the squares
    const $square = $('.square');

    // 
    const $points = $('#points');
    // listen for clicks on start button
    $startBtn.on("click", function() {
    // when clicked, call a function that  selects a random square and
    // turns the backgroun green, and continues to call every 3 sec
        setInterval(function () {
            randomSquare();
        }, 3000);
        randomSquare();
    });
    // when clicked, call a function that selects a 
    //random square and turns the background green

    // write a function that randomly selects a square and 
    // adds a class to turn the background green
    function randomSquare() {
        const randomSquare = $square[Math.floor(Math.random() * $square.length)];
        $(randomSquare).addClass('green-bg');

        // remove "green-bg" after 3 seconds (event loop)
        setTimeout(function() {
            $(randomSquare).removeClass('green-bg')
        }, 2000)
    }
    // add event listener to the squares
    $square.on("click", function(event) {
        // if a square is clicked and has green-bg
      if ($(event.target).hasClass('green-bg')){
          // immediately remove green-bg class
          $(event.target).removeClass('green-bg')

        
        // add one point to scoreboard
       // pulls current point value ($points.text())
       // converts it to an integer (parseInt)
        const newPointValue = parseInt($points.text()) + 1;
        $points.text(newPointValue)

      } else {
        console.log("no points for you");
      }
    });
    // add one point to the leaderboard




    
})