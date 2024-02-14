var buttoncolors = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userClickedPattern = [];
var level = 0 ;
var started = false ;


$(document).keydown(function(){

    if(!started){
        
        nextSequence();
        $("h1").text("LEVEL " + level);
        started = true;
    }


});


function nextSequence() {
    level++;
    var randomnumber = Math.floor(Math.random() * 4);
    var randomchosencolor = buttoncolors[randomnumber];
    gamepattern.push(randomchosencolor);
    $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchosencolor);
    console.log(gamepattern);

}
$(".btn").click(function () {
    var userchosencolor = $(this).attr("id");
    userClickedPattern.push(userchosencolor);
    console.log(userClickedPattern);
    playsound(userchosencolor);
    animatePress(userchosencolor);
    checkanswer(userClickedPattern.length-1);
})

function checkanswer(currentLevel){
    if(gamepattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if(gamepattern.length===userClickedPattern.length){
            console.log("yay !");
            userClickedPattern=[];
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else{
        console.log("wrong");   
        var loseaudio = new Audio("sounds/wrong.mp3");
        loseaudio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startover();
    }
    
}
function startover(){
    level = 0;
    gamepattern=[];
    started = false;
    userClickedPattern=[];
}






function playsound(name) {

    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}
function animatePress(currentcolor) {

    $("#" + currentcolor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentcolor).removeClass("pressed");
    }, 100);
}





















