// slider
let songNumber = 1;
let indexPictures = 0;
let position = 0;
let numberPictures = document.body.querySelectorAll('[data-elem="pictures"]').length;
let wrapSlider = document.body.querySelector('.container-picture');
let wrapSliderWidth = wrapSlider.offsetWidth; 
let slider = document.body.querySelector('.slider-track');
let sliderWhidth = slider.offsetWidth;
let picturesWhidth = wrapSliderWidth;
let trackWidth = (numberPictures * picturesWhidth) - wrapSliderWidth;
// slider left and right bttns
const leftButton = findLeftButton();
const rightButton = findRightButton();
// piano keys
const whitePianoKeys = findAllWhitePianoKeys();
WhiteKeys(whitePianoKeys);
const blackPianoKeys = findAllBlackPianoKeys();
BlackKeys(blackPianoKeys);
//piano bttns
const playBttn = document.body.querySelector('.bttn-play');
const pauseBttn = document.body.querySelector('.bttn-pause');
const stopBttn = document.body.querySelector('.bttn-stop');
// checkbox
const checkbox = document.body.querySelector('.check_input');
// slider count
let sliderCount = document.body.querySelector('.slider_count');


// slider functions
function findLeftButton() {
    let leftButton = document.body.querySelector('.slider_button-left');
    return leftButton;
}

function findRightButton() {
    let rightButton = document.body.querySelector('.slider_button-right');
    return rightButton;
}

leftButton.addEventListener('click', () => {
    songNumber--;
    count();

    findAudio().load();
    indexPictures--;
    position += picturesWhidth;
    changPosition = slider.style.transform = `translateX(${position}px)`;

    activatingIndicators();
    findAudio().play();
    blockBttns();
});

rightButton.addEventListener('click', () => {
    songNumber++;
    count();

    findAudio().load();
    indexPictures++;
    position -= picturesWhidth;
    changPosition = slider.style.transform = `translateX(${position}px)`;

    activatingIndicators();
    findAudio().play();
    blockBttns();
});

function count() {
    sliderCount.textContent = `${songNumber}/${numberPictures}`;
}



function findAllWhitePianoKeys() {
    let keys = document.body.querySelectorAll('.piano-key');
    return keys;
}

function WhiteKeys(pianoKeys) {
    pianoKeys.forEach(pianoKeys => {
        pianoKeys.addEventListener('click', (pianoKeys) => {
            const dataNum = pianoKeys.toElement.dataset.numberKey;
            let audioKey = document.body.querySelector(`[data-key-num='${dataNum}']`);
            audioKey.currentTime = 0;
            audioKey.play();
        });
    });
}

function findAllBlackPianoKeys() {
    let keys = document.body.querySelectorAll('.piano-key-black');
    return keys;
}

function BlackKeys(pianoKeys) {
    pianoKeys.forEach(pianoKeys => {
        pianoKeys.addEventListener('click', (pianoKeys) => {
            const dataNum = pianoKeys.toElement.dataset.numberKeyBlack;
            let audioKey = document.body.querySelector(`[data-key-num='${dataNum}']`);
            audioKey.currentTime = 0;
            audioKey.play();
        });
    });
}



// functions play/pause/stop audio
function findAudio() {
    let audio = document.body.querySelector(`[data-audio-index="${indexPictures}"]`);
    return audio;
}

playBttn.addEventListener('click', () => {
    if (indexPictures === 0) {
        if (checkbox.checked) {
            activatingIndicators();
            setTimeout(audioAttention, 6500);
            playAttention();
        } else {
            activatingIndicators();
            findAudio().play();
        }
    } else if (indexPictures === 1) {
        if (checkbox.checked) {
            activatingIndicators();
            setTimeout(audioWellHe, 4000);
            wellHe();
        } else {
            activatingIndicators();
            findAudio().play();
        }
    } else if (indexPictures === 2) {
        if (checkbox.checked) {
            activatingIndicators();
        } else {
            activatingIndicators();
            findAudio().play();
        }
    }
});

pauseBttn.addEventListener('click', () => {
    pauseIndicators();
    findAudio().pause();
});

stopBttn.addEventListener('click', () => {
    stopIndicators()
    findAudio().load();
});



function audioAttention() {
    findAudio().currentTime = 16;
    findAudio().play();
}

function audioWellHe() {
    findAudio().currentTime = 16.5;
    findAudio().play();
}


/* ===============================================================
    Songs
==================================================================*/
function playAttention() {
    let key_1 = document.body.querySelector('[data-number-key="s-re"]');
    let key_2 = document.body.querySelector('[data-number-key-black="3-2b"]');
    let key_3 = document.body.querySelector('[data-number-key="3-re"]');

    function audio_1() {
        let audioKey_1 = document.body.querySelector('[data-key-num="s-re"]');
        return audioKey_1;
    }
    function audio_2() {
        let audioKey_2 = document.body.querySelector('[data-key-num="3-2b"]');
        return audioKey_2;
    }
    function audio_3() {
        let audioKey_3 = document.body.querySelector('[data-key-num="3-re"]');
        return audioKey_3;
    }

    setTimeout(function() {
        key_1.className = 'piano-key active_w-b';
        audio_1().volume = 0.2;
        audio_1().play();
        audio_1().currentTime = 0;

        key_2.className = 'piano-key-black active_b-b';
        audio_2().volume = 0.5;
        audio_2().play();
        audio_2().currentTime = 0;
    }, 0);
    setTimeout(function() {
        key_1.className = 'piano-key';
        key_2.className = 'piano-key-black';
    }, 500);


    setTimeout(function() {
        key_3.className = 'piano-key active_w-b';
        audio_3().volume = 0.5;
        audio_3().play();
        audio_3().currentTime = 0;
    }, 1000);
    setTimeout(function() {
        key_3.className = 'piano-key';
    }, 1500);


    setTimeout(function() {
        key_1.className = 'piano-key active_w-b';
        audio_1().play();
        audio_1().currentTime = 0;

        key_2.className = 'piano-key-black active_b-b';
        audio_2().play();
        audio_2().currentTime = 0;
    }, 2000);
    setTimeout(function() {
        key_1.className = 'piano-key';
        key_2.className = 'piano-key-black';
    }, 2500);
    

    setTimeout(function() {
        key_3.className = 'piano-key active_w-b';
        audio_3().play();
        audio_3().currentTime = 0;
    }, 3000);
    setTimeout(function() {
        key_3.className = 'piano-key';
    }, 3500);


    setTimeout(function() {
        key_1.className = 'piano-key active_w-b';
        audio_1().play();
        audio_1().currentTime = 0;

        key_2.className = 'piano-key-black active_b-b';
        audio_2().play();
        audio_2().currentTime = 0;
    }, 4000);
    setTimeout(function() {
        key_1.className = 'piano-key';
        key_2.className = 'piano-key-black';
    }, 4500);
    

    setTimeout(function() {
        key_3.className = 'piano-key active_w-b';
        audio_3().volume = 0.5;
        audio_3().play();
        audio_3().currentTime = 0;
    }, 5000);
    setTimeout(function() {
        key_3.className = 'piano-key';
    }, 5500);
}

function wellHe() {
    let key_1 = document.body.querySelector('[data-number-key="1-re"]');//F1
    let key_2 = document.body.querySelector('[data-number-key="s-mi"]');
    let key_3 = document.body.querySelector('[data-number-key-black="4-1b"]');
    let key_4 = document.body.querySelector('[data-number-key="1-si"]');
    let key_5 = document.body.querySelector('[data-number-key="2-do"]');
    let key_6 = document.body.querySelector('[data-number-key="2-re"]');

    function audio_1() {
        let audioKey_1 = document.body.querySelector('[data-key-num="1-re"]');
        return audioKey_1;
    }
    function audio_2() {
        let audioKey_2 = document.body.querySelector('[data-key-num="s-mi"]');
        return audioKey_2;
    }
    function audio_3() {
        let audioKey_3 = document.body.querySelector('[data-key-num="4-1b"]');
        return audioKey_3;
    }
    function audio_4() {
        let audioKey_4 = document.body.querySelector('[data-key-num="1-si"]');
        return audioKey_4;
    }
    function audio_5() {
        let audioKey_5 = document.body.querySelector('[data-key-num="2-do"]');
        return audioKey_5;
    }
    function audio_6() {
        let audioKey_6 = document.body.querySelector('[data-key-num="2-re"]');
        return audioKey_6;
    }

    setTimeout(function() {
        key_1.className = 'piano-key active_w-b';
        audio_1().volume = 0.5;
        audio_1().play();
        audio_1().currentTime = 0;

        key_2.className = 'piano-key active_w-b';
        audio_2().volume = 0.5;
        audio_2().play();
        audio_2().currentTime = 0;
    }, 0);

    setTimeout(function() {
        key_1.className = 'piano-key';
        key_2.className = 'piano-key';
    }, 300);

    setTimeout(function() {
        key_3.className = 'piano-key-black active_b-b';
        audio_3().volume = 0.5;
        audio_3().play();
        audio_3().currentTime = 0;
    }, 600);

    setTimeout(function() {
        key_3.className = 'piano-key-black';
    }, 900);

    setTimeout(function() {
        key_4.className = 'piano-key active_w-b';
        audio_4().volume = 0.5;
        audio_4().play();
        audio_4().currentTime = 0;
    }, 1000);

    setTimeout(function() {
        key_4.className = 'piano-key';
    }, 1300);

    setTimeout(function() {
        key_5.className = 'piano-key active_w-b';
        audio_5().volume = 0.5;
        audio_5().play();
        audio_5().currentTime = 0;
    }, 1400);

    setTimeout(function() {
        key_5.className = 'piano-key';
    }, 1700);

    setTimeout(function() {
        key_6.className = 'piano-key active_w-b';
        audio_6().volume = 0.5;
        audio_6().play();
        audio_6().currentTime = 0;
    }, 1800);

    setTimeout(function() {
        key_6.className = 'piano-key';
    }, 2100);

    setTimeout(function() {
        key_3.className = 'piano-key-black active_b-b';
        audio_3().volume = 0.5;
        audio_3().play();
        audio_3().currentTime = 0;
    }, 2200);
    
    setTimeout(function() {
        key_3.className = 'piano-key-black';
    }, 2400);

    setTimeout(function() {
        key_5.className = 'piano-key active_w-b';
        audio_5().volume = 0.5;
        audio_5().play();
        audio_5().currentTime = 0;
    }, 2800);

    setTimeout(function() {
        key_5.className = 'piano-key';
    }, 3100);
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
count();