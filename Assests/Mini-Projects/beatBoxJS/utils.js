/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
// beats object creator class
class Beat {
 constructor(audioSrc) {
  this.audio = new Audio(audioSrc)
 }
 play = () => {
  this.audio.currentTime = 0;
  this.audio.play();
 }
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
 constructor(color, keyCode) {
  this.color = color
  this.keyCode = keyCode
  this.element = document.getElementById(keyCode)
  this.setButtonColorInHTML();
  this.transitionEnd();
 }

 setButtonColorInHTML = () => {
  this.element.style.borderColor = this.color
 }
 transitionEnd = () => {
  this.element.addEventListener('transitionend', this.deselect)
 }
 // To set the background color and boxShadow
 select = () => {
  this.element.style.backgroundColor = this.color
  this.element.style.boxShadow = `0px 0px 17px ${this.color}`

 }

 // To reset background color and boxShadow
 deselect = () => {
  this.element.style.backgroundColor = 'transparent'
  this.element.style.boxShadow = 'none'
 }
}