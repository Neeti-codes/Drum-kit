const drums = document.querySelectorAll('.drum');

document.addEventListener('keydown', (event) => {
    generateSound(event.key);
    const drum = document.querySelector(`.drum${event.key}`);
    if (drum) giveAnimate(drum);
});

drums.forEach((drum) => {
    drum.addEventListener('click', (event) => {
        let word = event.target.innerText;
        generateSound(word);
        giveAnimate(event.target);
    });
});

function generateSound(word) {
    let audioFile;
    switch (word) {
        case 'a': audioFile = 'sounds/crash.mp3'; break;
        case 'd': audioFile = 'sounds/snare.mp3'; break;
        case 's': audioFile = 'sounds/tom-2.mp3'; break;
        case 'w': audioFile = 'sounds/tom-3.mp3'; break;
        case 'j': audioFile = 'sounds/kick-bass.mp3'; break;
        case 'k': audioFile = 'sounds/tom-1.mp3'; break;
        case 'l': audioFile = 'sounds/tom-4.mp3'; break;
        default: console.log('Enter valid key');
    }
    if (audioFile) {
        let audio = new Audio(audioFile);
        audio.play();
    }
}

function giveAnimate(drum) {
    drum.classList.add('animate');
    setTimeout(() => drum.classList.remove('animate'), 200);
}
