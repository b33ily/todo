class SoundManager {
  constructor() {
    this.sounds = {
      complete: new Audio('sounds/complete.mp3')
    };
    this.enabled = true;
  }

  play(soundName) {
    if (this.enabled) {
      this.sounds[soundName].currentTime = 0;
      this.sounds[soundName].play();
    }
  }
}

const soundManager = new SoundManager();