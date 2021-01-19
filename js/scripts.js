$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const responsesArray = [[".person1", person1Input],[".person2", person2Input],[".animal", animalInput], [".exclamation", exclamationInput],[".verb", verbInput],[".noun", nounInput]];
    // use forEach WITH jQuery to push the user-input strings into the appropriate span class in the result story
    responsesArray.forEach(function(responsePair) {
      $(responsePair[0]).text(responsePair[1]);
    })
    $("#story").show();
  });
});