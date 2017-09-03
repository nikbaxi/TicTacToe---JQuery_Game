var random= Math.floor(Math.random() * 2);
var torf = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
var won1 = '<h5 id="h1" >Game Over... Congrats Player 1 you won!</h5><center><button class="btn waves-effect center">Play Again?</button></center>';
var won2 = '<h5 id="h1" >Game Over... Congrats Player 2you won!</h5><center><button class="btn waves-effect center">Play Again?</button></center>';
var won = '<h5 id="h1"  >Game Over... Congrats you won!</h5><center><button class="btn waves-effect center">Play Again?</button></center>';
var lost = '<h5 id="h1" >Game Over... Oops you lost!</h5><center><button class="btn waves-effect center">Play Again?</button></center>';
var draw = "<h5 id='h1' >Game Over... It's a draw!</h5><center><button class='btn waves-effect center'>Play Again?</button></center>";
var block = $('td');

var player1 = "";
var selectPlayer;
var code;
//on load
$(document).ready(function(){
    $("#chooseCode").hide();
    $(".container").hide();

    $(".container").hide(function () {
        
        $("#askPlayer").show(1000);    
    });
    
    $("input").on("click", function(){
        if ($("input:checked").val() == "player2") {
            alert("you selected player");
            selectPlayer = "player2";
            $("#chooseCode").show();
                $("select").on("click", function(){
                    if($("option:selected").val() == "X"){
                        code = "X";
                        alert("thanks for selecting the code: " + code);    
                    }else if ($("option:selected").val() == "O") {
                        code = "O";
                        alert("thanks for selecting the code: " + code);
                    }

                    $("#askPlayer").hide(1000);
                    $(".container").show(2000);
                    $("#message").html("");
                    
                    if(random === 0 && selectPlayer === "player2"){
                        $("#playerChance").html( "<p> player 1 plays first</p> ") ;
                    } else if(random === 1 && selectPlayer === "player2"){
                        $("#playerChance").html( "<p> player 2 plays first</p> ") ;
                    }
                });
        }else if ($("input:checked").val() == "computer") {
            alert("you selected computer");
            selectPlayer = "computer";
            $("#askPlayer").hide(1000);
            $(".container").show(2000);
            $("#message").html("");
            code = "X";
        }
    });
});

//print the correct code accordingly
function checkRun(x) {
    if ( selectPlayer == "player2") { 
        if (random === 0) {
            $(x).html(code);
            checkIfSomeoneWon();
        }else{
            if (code === "X"){  
                c = "O" ; 
            }else if(code === "O"){
                c = "X";
            }
            $(x).html(c);
            checkIfSomeoneWon();
        }
    }else if (selectPlayer === "computer") {
        
        $(x).html('X');
        if(checkIfSomeoneWon()) {   
        }
        else
            computerPlays();
    }
}

//this function to reset the code
function reset() {
    $('td').html('');
    $('#message').html('');
    $('#playerChance').html("");
    
    $('td').on('click', run);
    // $("#chooseCode").hide();
    // $(".container").show();
    // $("#askPlayer").show();
}

function home() {
    $("#chooseCode").hide();
    $(".container").hide();
    $("#askPlayer").show(1000); 

         location.reload();
}


//this function to check if someone won the game 
function checkIfSomeoneWon() {
    //Check left to right
    if ($('#b1').html() === 'X' && $('#b2').html() === 'X' && $('#b3').html() === 'X')
    {
        if(code === "X"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b1').html() === 'O' && $('#b2').html() === 'O' && $('#b3').html() === 'O')
    {
        if(code === "O"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b4').html() === 'X' && $('#b5').html() === 'X' && $('#b6').html() === 'X')
    {
        if(code === "X"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b4').html() === 'O' && $('#b5').html() === 'O' && $('#b6').html() === 'O')
    {
        if(code === "O"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b7').html() === 'X' && $('#b8').html() === 'X' && $('#b9').html() === 'X')
    {
        if(code === "X"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b7').html() === 'O' && $('#b8').html() === 'O' && $('#b9').html() === 'O')
    {
        if(code === "O"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    //Checks top to bottom
    else if ($('#b1').html() === 'X' && $('#b4').html() === 'X' && $('#b7').html() === 'X')
    {
        if(code === "X"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b1').html() === 'O' && $('#b4').html() === 'O' && $('#b7').html() === 'O')
    {
        if(code === "O"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b2').html() === 'X' && $('#b5').html() === 'X' && $('#b8').html() === 'X')
    {
        if(code === "X"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b2').html() === 'O' && $('#b5').html() === 'O' && $('#b8').html() === 'O')
    {
        if(code === "O"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b3').html() === 'X' && $('#b6').html() === 'X' && $('#b9').html() === 'X')
    {
        if(code === "X"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b3').html() === 'O' && $('#b6').html() === 'O' && $('#b9').html() === 'O')
    {
        if(code === "O"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    //Checks diagonal
    else if ($('#b1').html() === 'X' && $('#b5').html() === 'X' && $('#b9').html() === 'X')
    {
        if(code === "X"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b1').html() === 'O' && $('#b5').html() === 'O' && $('#b9').html() === 'O')
    {
        if(code === "O"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b3').html() === 'X' && $('#b5').html() === 'X' && $('#b7').html() === 'X')
    {
        if(code === "X"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    else if ($('#b3').html() === 'O' && $('#b5').html() === 'O' && $('#b7').html() === 'O')
    {
        if(code === "O"){
            $('#message').html(won1);
        }else{
            $('#message').html(won2);
        }
        $('td').off('click');
        return true;
    }
    //Checks if it's draw
    else if ($('#b1').html() !== '' && $('#b2').html() !== '' && $('#b3').html() !== '' && $('#b4').html() !== '' && $('#b5').html() !== '' && $('#b6').html() !== '' && $('#b7').html() !== '' && $('#b8').html() !== '' && $('#b9').html() !== '') {
        $('#message').html(draw);
        $('td').off('click');
        return true;
    }
}

//this function to for computer to play
function computerPlays() {
    random = Math.floor(Math.random() * 9);
    if ($('#b5').html() === '') {
        $('#b5').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b5').html() === 'X') && torf[10]) {
        torf[10] = false;
        $('#b1').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b1').html() === 'O' && $('#b7').html() === 'O' && $('#b4').html() === '') && torf[11]) {
        torf[11] = false;
        $('#b4').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b1').html() === 'O' && $('#b4').html() === 'O' && $('#b7').html() === '') && torf[23]) {
        torf[23] = false;
        $('#b7').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b1').html() === 'O' && $('#b5').html() === 'O' && $('#b9').html() === '') && torf[26]) {
        torf[26] = false;
        $('#b9').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b3').html() === 'O' && $('#b5').html() === 'O' && $('#b7').html() === '') && torf[27]) {
        torf[27] = false;
        $('#b7').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b7').html() === 'O' && $('#b5').html() === 'O' && $('#b3').html() === '') && torf[28]) {
        torf[28] = false;
        $('#b3').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b5').html() === 'O' && $('#b9').html() === 'O' && $('#b1').html() === '') && torf[29]) {
        torf[29] = false;
        $('#b1').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b2').html() === 'O' && $('#b5').html() === 'O' && $('#b8').html() === '') && torf[25]) {
        torf[25] = false;
        $('#b8').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b1').html() === 'O' && $('#b3').html() === 'O' && $('#b2').html() === '') && torf[24]) {
        torf[24] = false;
        $('#b2').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b3').html() === 'O' && $('#b9').html() === 'O' && $('#b6').html() === '') && torf[12]) {
        torf[12] = false;
        $('#b6').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b5').html() === 'O' && $('#b8').html() === 'O' && $('#b2').html() === '') && torf[22]) {
        torf[22] = false;
        $('#b2').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b1').html() === 'X' && $('#b2').html() === 'X' && $('#b3').html() === '' || $('#b5').html() === 'X' && $('#b7').html() === 'X' && $('#b3').html() === '') && torf[0]) {
        torf[0] = false;
        $('#b3').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b2').html() === 'X' && $('#b3').html() === 'X' && $('#b1').html() === '' || $('#b5').html() === 'X' && $('#b9').html() === 'X' && $('#b1').html() === '') && torf[1]) {
        torf[1] = false;
        $('#b1').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b4').html() === 'X' && $('#b5').html() === 'X' && $('#b6').html() === '') && torf[2]) {
        torf[2] = false;
        $('#b6').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b5').html() === 'X' && $('#b6').html() === 'X' && $('#b4').html() === '') && torf[3]) {
        torf[3] = false;
        $('#b4').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b1').html() === 'X' && $('#b4').html() === 'X' || $('#b8').html() === 'X' && $('#b9').html() === 'X' && $('#b7').html() === '') && torf[4]) {
        torf[4] = false;
        $('#b7').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b7').html() === 'X' && $('#b8').html() === 'X' || $('#b3').html() === 'X' && $('#b6').html() === 'X' && $('#b9').html() === '') && torf[5]) {
        torf[5] = false;
        $('#b9').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b2').html() === 'X' && $('#b5').html() === 'X' && $('#b8').html() === '') && torf[6]) {
        torf[6] = false;
        $('#b8').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b8').html() === 'X' && $('#b5').html() === 'X' && $('#b2').html() === '') && torf[7]) {
        torf[7] = false;
        $('#b2').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b1').html() === 'X' && $('#b7').html() === 'X' && $('#b4').html() === '') && torf[8]) {
        torf[8] = false;
        $('#b4').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b3').html() === 'X' && $('#b9').html() === 'X' && $('#b6').html() === '') && torf[9]) {
        torf[9] = false;
        $('#b6').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b3').html() === 'X' && $('#b5').html() === 'X' && $('#b7').html() === '') && torf[13]) {
        torf[13] = false;
        $('#b7').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b1').html() === 'X' && $('#b5').html() === 'X' && $('#b9').html() === '') && torf[14]) {
        torf[14] = false;
        $('#b9').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b7').html() === 'X' && $('#b5').html() === 'X' && $('#b3').html() === '') && torf[15]) {
        torf[15] = false;
        $('#b3').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b5').html() === 'X' && $('#b9').html() === 'X' && $('#b1').html() === '') && torf[16]) {
        torf[16] = false;
        $('#b1').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b4').html() === 'X' && $('#b7').html() === 'X' && $('#b1').html() === '') && torf[17]) {
        torf[17] = false;
        $('#b1').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b3').html() === 'X' && $('#b6').html() === 'X' && $('#b9').html() === '') && torf[18]) {
        torf[18] = false;
        $('#b9').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b1').html() === 'X' && $('#b3').html() === 'X' && $('#b2').html() === '') && torf[19]) {
        torf[19] = false;
        $('#b2').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b7').html() === 'X' && $('#b9').html() === 'X' && $('#b8').html() === '') && torf[20]) {
        torf[20] = false;
        $('#b8').html('O');
        checkIfSomeoneWon();
    }
    else if (($('#b6').html() === 'X' && $('#b9').html() === 'X' && $('#b3').html() === '') && torf[21]) {
        torf[21] = false;
        $('#b3').html('O');
        checkIfSomeoneWon();
    }
    else if ($(block[random]).html() === '') {
        $(block[random]).html('O');
        checkIfSomeoneWon();
    }
    else if ($('#b1').html() !== '' && $('#b2').html() !== '' && $('#b3').html() !== '' && $('#b4').html() !== '' && $('#b5').html() !== '' && $('#b6').html() !== '' && $('#b7').html() !== '' && $('#b8').html() !== '' && $('#b9').html() !== '') {
        return null;
    }
    else {
        computerPlays();
    }
}
$('td').on('click', run);

function run(){
    if ($(this).html() === 'X' || $(this).html() === 'O') {
    }else{
        if(selectPlayer === "player2"){
            checkRun(this);
            if(random === 0){
                random = random + 1;
                if($('#message').html() === ""){
                    $("#playerChance").html( "<p> player 2 chance</p>") ;
                }else{
                    $("#playerChance").html("") ;
                }
            }else{
                random = random - 1;
                if($('#message').html() === ""){
                    $("#playerChance").html( "<p> player 1 chance</p> ") ;
                }else{
                    $("#playerChance").html("") ;
                }
           }
        }else if(selectPlayer === "computer"){
            checkIfSomeoneWon();
            checkRun(this);
        }
    }
}


$('#message').on('click', 'button', reset);
$('#homePage').on('click',  home);
