

function translator(input){
  var wordArray = input.split(" ");



 wordArray.forEach(function(word) {
   var firstLetter = word.slice(0,1);
   console.log(firstLetter);
    if (firstLetter === "a" ||firstLetter ===  "e" ||firstLetter ===  "i" ||firstLetter ===  "o" ||firstLetter ===  "u") {
      var wordResult = word.concat("way")
      console.log(wordResult);
    }
 });

  //
  // var slicedSentence = input.slice(0,1);
  // console.log("wordArray: ",wordArray);
  // console.log("slicedSentence: ",slicedSentence);




};





$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var sentenceInput = $("input#userSentence").val();


    translator(sentenceInput);

  });
});
