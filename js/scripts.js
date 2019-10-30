// TAYLOR

// var vowells = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// var pigSentence = function(input)
// var sentence = input.split(' ');
// newSentence = sentence.map(function(event) {


  var globalArray = [];

  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];




  function translator(input){
    var wordArray = input.split(" ");
    console.log("Word array is: ",wordArray);

    wordArray.forEach(function(word) {
      var firstLetter = word.slice(0,1);
      var secondLetter = word.slice(1,2);
      var thirdLetter = word.slice(2,3);
      // console.log(consonants);

      // console.log(firstLetter);
      if (firstLetter === "a" ||firstLetter ===  "e" ||firstLetter ===  "i" ||firstLetter ===  "o" ||firstLetter ===  "u") {
        globalArray.push(word+"way");
        // console.log(wordResult);
      }
      else if (firstLetter != "a" ||firstLetter !=  "e" ||firstLetter !=  "i" ||firstLetter !=  "o" ||firstLetter !=  "u") {

        // consonants.forEach(function(letter) {
          if ((firstLetter === "q") && (secondLetter === "u")) {
            console.log("made it QU");
            var word2 = word.split("");
            word2.splice(word.length,2,word[0],word[1]);
            word2.splice(0,2);
            console.log(word2);
            var word3 = word2.join("");
            globalArray.push(word3+"ay");
            console.log(word3);
          }
          else if (consonants.includes(firstLetter) && consonants.includes(secondLetter) && consonants.includes(thirdLetter)) {
            console.log("made it TOP");
            var word2 = word.split("");
            word2.splice(word.length,0,word[0],word[1],word[2]);
            word2.splice(0,3);
            console.log(word2);
            var word3 = word2.join("");
            globalArray.push(word3+"ay");
            console.log(word3);
          }
          else if (consonants.includes(firstLetter) && consonants.includes(secondLetter)) {
            console.log("made it MIDDLE");
            var word4 = word.split("");
            word4.splice(word.length,2,word[0],word[1]);
            word4.splice(0,2);
            var word5 = word4.join("");
            globalArray.push(word5+"ay");
            // console.log(word5);
          }
          else {
            console.log("made it BOTTOM");
            var word6 = word.split("");
            word6.splice(word.length,1,word[0]);
            word6.splice(0,1);
            var word7 = word6.join("");
            globalArray.push(word7+"ay");
            // console.log(word7);
          }
          // });
        }
        else {
          console.log("crap");
        }
        console.log("LOOK AT THIS: ",globalArray);
      });
    };




    //
    // var slicedSentence = input.slice(0,1);
    // console.log("wordArray: ",wordArray);
    // console.log("slicedSentence: ",slicedSentence);










    $(document).ready(function() {
      $("form#pig-latin").submit(function(event) {
        event.preventDefault();

        var sentenceInput = $("input#userSentence").val();


        translator(sentenceInput);

      });
    });
