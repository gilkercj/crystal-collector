
$("document").ready(function () {


    var goalNumber = Math.floor(Math.random() * 100) + 20;
    var crystals = ['red', 'blue', 'yellow', 'green'];
    var crystalval = [];
    var userScore = 0;



    for (var i = 0; i < crystals.length; i++) {
        var initVal = Math.ceil(Math.random() * 12);
        crystalval.push(initVal);

    }
    $('#goal-number').text(goalNumber);


    // $("#red-crystal").val(crystalval[0]);
    console.log(goalNumber);
    console.log(crystalval);

    $(".crystal").on("click", function () {
        var i = this.value;
        userScore += crystalval[i];
        // userScore++;
        $('#user-number').text(userScore);
        if (userScore > goalNumber) {
            $('#title').text("You Lose.");
            $('#reset-area').html('<div><button id="reset">Play Again</button></div>');
            crystalval = [0,0,0,0];
        }
        if (userScore === goalNumber) {
            $('#title').text("You Win!!!");
            $('#reset-area').html('<div><button id="reset">Play Again</button></div>');
            crystalval = [0,0,0,0];
        }
    });
    $("#reset-area").on("click", function () {
        goalNumber = Math.floor(Math.random() * 100) + 20;
        userScore = 0;
        $('#title').text('Crystal Collector');
        $('#goal-number').text(goalNumber);
        $('#user-number').text(userScore);
        $('#reset-area').html("")
        console.log(goalNumber);
        console.log(crystalval);
        crystalval = [];
        for (var i = 0; i < crystals.length; i++) {
            var initVal = Math.ceil(Math.random() * 12);
            crystalval.push(initVal);

        }
    });

});