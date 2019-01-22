$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "adjective", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });



    //was reduced as seen on line 3
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var adjectiveInput = $("input#adjective").val();
    // var nounInput = $("input#noun").val();
    //
    //was reduced as seen on line 5
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".adjective").text(adjectiveInput);
    // $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
