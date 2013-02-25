(function() {
  if (typeof window.console === 'undefined' || typeof window.console.log === 'undefined') {
    return;
  }

  window.console.ransom = function() {
    for (var i = 0; i < arguments.length; i += 1) {
      var message = arguments[i];
      ransomify(message);
    }
  };

  function ransomify(message) {
    var letters = message.split('');
    var ransomNote = "";
    var ransomStyles = [];

    for (var i = 0; i < letters.length; i += 1) {
      var letter = letters[i];
      ransomNote += "%c" + letter;
      ransomStyles.push(getRandomRansomStyle(letter));
    }

    mail(ransomNote, ransomStyles);
  }

  function getRandomRansomStyle(letter) {
    var styles = [];
    styles.push(getRandomRansomColor());
    styles.push(getRandomRansomFontSize());
    styles.push(getRandomRansomBackgroundColor(letter));
    styles.push(getRandomRansomMargin());
    return styles.join(';');
  }

  function getRandomRansomColor() {
    return 'color:' + randColor();
  }

  function getRandomRansomFontSize() {
    return 'font-size:' + randInt(15, 45) + 'px';
  }

  function getRandomRansomBackgroundColor(letter) {
    if (letter === " ") {
      return "";
    }
    return 'background:' + randColor();
  }

  function getRandomRansomMargin() {
    return 'margin-right:' + randInt(0, 3);
  }

  function randColor() {
    var red = randInt(256, 512).toString(16).substring(1);
    var green = randInt(256, 512).toString(16).substring(1);
    var blue = randInt(256, 512).toString(16).substring(1);
    return '#' + red + green + blue;
  }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function mail(ransomNote, ransomStyles) {
    ransomStyles.unshift(ransomNote);
    console.log.apply(console, ransomStyles);
  }
})();

