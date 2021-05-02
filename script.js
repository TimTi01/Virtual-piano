const whitePianoKeys = findAllWhitePianoKeys();
bindClickListenerWhiteKeys(whitePianoKeys);
const blackPianoKeys = findAllBlackPianoKeys();
bindClickListenerBlackKeys(blackPianoKeys);

// slider
let position = 0;
let wrapSlider = document.body.querySelector('.container-picture');
let wrapSliderWidth = wrapSlider.offsetWidth; //290px
let slider = document.body.querySelector('.slider-track');
let sliderWhidth = slider.offsetWidth;

let picturesWhidth = wrapSliderWidth;

// slider-bttns-start
const leftSliderKey = findLeftSliderKeys();
bindClickListenerSlidBttnLeft(leftSliderKey);
const rightSliderKey = findRightSliderKey();
bindClickListenerSlidBttnRight(rightSliderKey);
// slider-bttns-end


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

function findLeftSliderKeys() {
    let leftButton = document.body.querySelector('.slider_button-left');
    return leftButton;
}

function bindClickListenerSlidBttnLeft(bttn) {
    bttn.addEventListener('click', (bttn) => {
        position -= picturesWhidth;

        changPosition = slider.style.transform = `translateX(${-picturesWhidth}px)`;
        console.log(position);
    });
}



function findRightSliderKey() {
    let rightButton = document.body.querySelector('.slider_button-right');
    return rightButton;
}

function bindClickListenerSlidBttnRight(bttn) {
    bttn.addEventListener('click', (bttn) => {
        position += picturesWhidth;

        changPosition = slider.style.transform = `translateX(${picturesWhidth}px)`;
        console.log(position);
    });
}