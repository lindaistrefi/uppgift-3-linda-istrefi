// Declare variable
const EndPhrase = "Goodbye World";

//Where to pick up in the DOM
const Hello = document.querySelector("#Hello");
const myButton = document.querySelector("#ClickHere");


// Apply function (from Hello to Goodbye)

myButton.addEventListener("click", function(event)
{
   
    Hello.innerHTML = EndPhrase;


}
);
