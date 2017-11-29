const markovGenerator = (inputStrs) => {
  let markovObj = {
    // store words to start the generated str with
    starters: [],
    wordAssociations: {}
  };

  // iterate through each input string
  inputStrs.forEach((str) => {
    // split that string into an array of words
    let words = str.split(' ');
    // markovObj.starters.push(words[0]);
    
    // associate each word with the next word
    for (var i = 0; i < words.length; i++) {
      if (i !== (words.length - 1)) {
        markovObj.starters.push(word);
        let word = words[i];
        let next = words[i + 1];
        if (markovObj.wordAssociations[word]) markovObj.wordAssociations[word].push(next);
        else markovObj.wordAssociations[word] = [next];
      }
    }
  });

  markovObj.generateTweet = function() {
    let generatedTweet = [];
    generatedTweet.push(this.starters[Math.floor(Math.random() * (this.starters.length))]);
    // add words while length < 20 and the next word isn't an end
    let prev = generatedTweet[0]
    while(generatedTweet.length < 20 && prev) {
      let options = this.wordAssociations[prev];
      if (!options) break;
      let next = options[Math.floor(Math.random() * (options.length))];
      generatedTweet.push(next);
      prev = next;
    }
    if(generatedTweet[generatedTweet.length - 1] === false) generatedTweet.pop();
    return generatedTweet.join(' ');
  };
  return markovObj;
}

module.exports = markovGenerator;
