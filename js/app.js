$(document).ready(function() {
    // select start button
    const $startBtn = $('#start');
    const $square = $('.square');
    // listen for clicks on start button
    $startBtn.on("click", function() {

        randomSquare();
    })
    // when clicked, call a function that selects a 
    //random square and turns the background green

    // write a function that randomly selects a square and 
    // adds a class to turn the background green
    function randomSquare() {
        const randomSquare = $square[Math.floor(Math.random() * $square.length)];
        $(randomSquare).addClass('green-bg');

        setTimeout(function() {
            $(randomSquare).removeClass('green-bg')
        }, 3000)
    }

    
})