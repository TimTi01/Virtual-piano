const whitePianoKeys = findAllWhitePianoKeys();
bindClickListenerWhiteKeys(whitePianoKeys);
const blackPianoKeys = findAllBlackPianoKeys();
bindClickListenerBlackKeys(blackPianoKeys);

// slider
let position = 0;
let numberPictures = document.body.querySelectorAll('[data-elem="pictures"]').length; //3
let wrapSlider = document.body.querySelector('.container-picture');
let wrapSliderWidth = wrapSlider.offsetWidth; //390px
let slider = document.body.querySelector('.slider-track');
let sliderWhidth = slider.offsetWidth;
let picturesWhidth = wrapSliderWidth;
let trackWidth = (numberPictures * picturesWhidth) - wrapSliderWidth;



// slider-bttns
const leftButton = document.body.querySelector('.slider_button-left');
const rightButton = document.body.querySelector('.slider_button-right');

function findAllWhitePianoKeys() {
    let keys = document.body.querySelectorAll('.piano-key');
    return keys;
}

function bindClickListenerWhiteKeys(pianoKeys) {
    pianoKeys.forEach(pianoKeys => {
        pianoKeys.addEventListener('click', (pianoKeys) => {
            const dataNum = pianoKeys.toElement.dataset.numberKey;
            let audio = document.body.querySelector(`[data-key-num='${dataNum}']`);
            audio.play();
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
            let audio = document.body.querySelector(`[data-key-num='${dataNum}']`);
            audio.play();
        });
    });
}



// slider-functions-start


leftButton.addEventListener('click', () => {
    position += picturesWhidth;
    changPosition = slider.style.transform = `translateX(${position}px)`;

    blockBttns();
});


rightButton.addEventListener('click', () => {
    position -= picturesWhidth;
    changPosition = slider.style.transform = `translateX(${position}px)`;
    
    blockBttns();
});



// button block functions
function blockBttns() {
    leftButton.disabled = position === 0;
    rightButton.disabled = position === -trackWidth;
}

blockBttns();