const whitePianoKeys = findAllWhitePianoKeys();
bindClickListenerWhiteKeys(whitePianoKeys);

const blackPianoKeys = findAllBlackPianoKeys();
bindClickListenerBlackKeys(blackPianoKeys);



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