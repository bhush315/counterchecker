let sentence = "At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine.";

function checker(sentence) {
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    // Vowel counter
    for (let char of sentence) {
        lengthCounter++;
        if ("aeiouAEIOU".includes(char)) {
            vowelCounter++;
        }
    }

    // Words counter
    wordCounter = sentence.trim().split(/\s+/).length;

    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}


checker(sentence);
