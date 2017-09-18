$(document).ready(function() {
var albums;
  $.get('https://lit-fortress-6467.herokuapp.com/object', function albums(data) {
    console.log(data.results[0])

    $("body").on("click", '#image3', function() {
      $("textarea").append(data.results[0].artist + ": " + data.results[0].title + '&#xA;');

    })

    $("body").on("click", '#image5', function() {
      $("textarea").append(data.results[1].artist + ": " + data.results[1].title + '&#xA;');

    })

    $("body").on("click", '#image1', function() {
      $("textarea").append(data.results[2].artist + ": " + data.results[2].title + '&#xA;');

    })

    $("body").on("click", '#image2', function() {
      $("textarea").append(data.results[3].artist + ": " + data.results[3].title + '&#xA;');

    })

    $("body").on("click", '#image4', function() {
      $("textarea").append(data.results[4].artist + ": " + data.results[4].title + '&#xA;');

    })

  })

})



$(document).ready(function(){
    $("#submit_button").click(function(){
        $.get("https://lit-fortress-6467.herokuapp.com/post ", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });
});


function myFunction() {
    console.log("reset")
  }
