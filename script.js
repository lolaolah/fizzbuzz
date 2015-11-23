function FizzBuzz() {
    for (var i=1; i<=100; i++) {
        if (i%15===0) {
        LogFizzBuzzResults("FizzBuzz")
        }
        else if (i%5===0) {
        LogFizzBuzzResults("Buzz")
            }
        else if (i%3===0) {
        LogFizzBuzzResults("Fizz")
        }
        else {
        LogFizzBuzzResults(i)
      }
    }
}

function LogFizzBuzzResults(text) {
  var new_li = $("<li>"+
                   text+
                  "</li>"
);

$("#results").append(new_li);
}

$(function(){
    $('#start').click(FizzBuzz);
});
