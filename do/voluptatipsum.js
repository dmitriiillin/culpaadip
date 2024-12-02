// Get the play button element
var playButton = document.getElementById('playButton');

// Set the initial value
playButton.value = 'Play';

// Add an event listener to read the value
playButton.addEventListener('click', function() {
  var value = playButton.value;
  console.log('Value: ' + value);
});

// Add a function to write the value
function setPlayButtonValue(newValue) {
  playButton.value = newValue;
}

// Example of writing a new value
setPlayButtonValue('Pause');
