function randomIndex() {
    randomNumber = Math.floor(Math.random() * flagsArray.length);
    return randomNumber;
}

function randomFlag(){
    randomIndex();
    console.log(randomNumber);
    $("img").attr("src", flagsArray[randomNumber].imagePath);
}

function checkAnswer() {
    var userAnswer = $("input").val().toLowerCase();
    
    if(userAnswer === flagsArray[randomNumber].name) {
        $("body").css("background", "green");
    } else {
        alert("WRONG - that was " + flagsArray[randomNumber].name);
        $("body").css("background", "red");
    }
    $("input").val("");
}

// generate new random flag //
$("#start-button").on("click", function(){
    randomFlag();
    $("#start-button").css("display", "none");
    $("#input-for-answers").css("visibility", "visible");
    $("#submit-button").css("visibility", "visible");
});
// check user's answer on submit button click //
$("#submit-button").on("click", function(){
    checkAnswer();
    randomFlag();
});
// check user's answer on enter button press //
$("input").on('keypress',function(e) {
    if(e.which == 13) {
        checkAnswer();
        randomFlag();
    }
});
