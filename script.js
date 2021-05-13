// slider
let indexPictures = 0;
let position = 0;
let numberPictures = document.body.querySelectorAll('[data-elem="pictures"]').length; //3
let wrapSlider = document.body.querySelector('.container-picture');
let wrapSliderWidth = wrapSlider.offsetWidth; //390px
let slider = document.body.querySelector('.slider-track');
let sliderWhidth = slider.offsetWidth;
let picturesWhidth = wrapSliderWidth;
let trackWidth = (numberPictures * picturesWhidth) - wrapSliderWidth;

// slider left and right bttns
const leftButton = findLeftButton();
bindClickListenerLeftButton(leftButton);
const rightButton = findRightButton();
bindClickListenerRightButton(rightButton);
// piano keys
const whitePianoKeys = findAllWhitePianoKeys();
bindClickListenerWhiteKeys(whitePianoKeys);
const blackPianoKeys = findAllBlackPianoKeys();
bindClickListenerBlackKeys(blackPianoKeys);
//piano bttns
const playBttn = document.body.querySelector('.bttn-play');
bindClickListenerPlayAudio(playBttn);
const pauseBttn = document.body.querySelector('.bttn-pause');
bindClickListenerPauseAudio(pauseBttn);
const stopBttn = document.body.querySelector('.bttn-stop');
bindClickListenerStopAudio(stopBttn);

// slider functions
function findLeftButton() {
    let leftButton = document.body.querySelector('.slider_button-left');
    return leftButton;
}

function findRightButton() {
    let rightButton = document.body.querySelector('.slider_button-right');
    return rightButton;
}

function bindClickListenerLeftButton(leftButton) {
    leftButton.addEventListener('click', () => {
        findAudio().load();
        indexPictures--;
        position += picturesWhidth;
        changPosition = slider.style.transform = `translateX(${position}px)`;

        activatingIndicators();
        findAudio().play();
        blockBttns();
    });

}

function bindClickListenerRightButton(rightButton) {
    rightButton.addEventListener('click', () => {
        findAudio().load();
        indexPictures++;
        position -= picturesWhidth;
        changPosition = slider.style.transform = `translateX(${position}px)`;

        activatingIndicators();
        findAudio().play();
        blockBttns();
    });

}



function findAllWhitePianoKeys() {
    let keys = document.body.querySelectorAll('.piano-key');
    return keys;
}

function bindClickListenerWhiteKeys(pianoKeys) {
    pianoKeys.forEach(pianoKeys => {
        pianoKeys.addEventListener('click', (pianoKeys) => {
            const dataNum = pianoKeys.toElement.dataset.numberKey;
            console.log(dataNum);
            let audioKey = document.body.querySelector(`[data-key-num='${dataNum}']`);
            audioKey.play();
        });
    });
}

function findAllBlackPianoKeys() {
    let keys = document.body.querySelectorAll('.piano-key-black');
    return keys;
}

function bindClickListenerBlackKeys(pianoKeys) {
    pianoKeys.forEach(pianoKeys => {
        pianoKeys.addEventListener('click', (pianoKeys) => {
            const dataNum = pianoKeys.toElement.dataset.numberKeyBlack;
            let audioKey = document.body.querySelector(`[data-key-num='${dataNum}']`);
            audioKey.play();
        });
    });
}



// functions play/pause/stop audio
function findAudio() {
    let audio = document.body.querySelector(`[data-audio-index="${indexPictures}"]`);
    return audio;
}

function bindClickListenerPlayAudio(playBttn) {
    playBttn.addEventListener('click', () => {
        activatingIndicators();
        findAudio().play();
    });
}

function bindClickListenerPauseAudio(pauseBttn) {
    pauseBttn.addEventListener('click', () => {
        pauseIndicators();
        findAudio().pause();
    });
}

function bindClickListenerStopAudio(stopBttn) {
    stopBttn.addEventListener('click', () => {
        stopIndicators()
        findAudio().load();
    });
}



// Indicators
function activatingIndicators() {
    let indicators = document.body.querySelectorAll('.indicator');
    indicators.forEach((item) => {
        item.className = "indicator active";
    }) 
}
function pauseIndicators() {
    let indicators = document.body.querySelectorAll('.indicator');
    indicators.forEach((item) => {
        item.className = "indicator pause";
    }) 
}
function stopIndicators() {
    let indicators = document.body.querySelectorAll('.indicator');
    indicators.forEach((item) => {
        item.className = "indicator";
    }) 
}

// button block functions
function blockBttns() {
    styleСhangeSliderBttn();
    leftButton.disabled = position === 0;
    rightButton.disabled = position === -trackWidth;
}

function styleСhangeSliderBttn() {
    (position === 0) ? leftButton.className = 'slider_button-left block': leftButton.className = 'slider_button-left';
    (position === -trackWidth) ? rightButton.className = 'slider_button-right block': rightButton.className = 'slider_button-right';
}


blockBttns();