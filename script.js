function FizzBuzz() {
var text=$("#start").val();


        if (text%15===0) {
        LogFizzBuzzResults("FizzBuzz");
        }
        else if (text%5===0) {
        LogFizzBuzzResults("Buzz");
            }
        else if (text%3===0) {
        LogFizzBuzzResults("Fizz");
        }
        else {
        LogFizzBuzzResults(text);
    }
}

function LogFizzBuzzResults(text) {
  $("#results").html('the answer is: '+text);
}

$(function () {
  $("#start").keypress(function(event) {
      if (event.which === 13) {
          event.preventDefault();
          FizzBuzz();
          $("#start").val('');
  }}
)}
);


//$(function(){
//    $('#start').keyup(FizzBuzz);
// });
