document.addEventListener('DOMContentLoaded', function () {
    var radioButtons = document.getElementsByName('options');
    var selectedOption = '';

    function handleRadioButtonChange() {
        console.log("a");
        console.log(selectedOption);
        selectedOption = document.querySelector('input[name="options"]:checked').value;
        chrome.storage.local.set({ selectedOption: selectedOption });
    }

    for (var i = 0; i < radioButtons.length; i++) {
        console.log("b");
        radioButtons[i].addEventListener('change', handleRadioButtonChange);
    }

    var wordInput1 = document.getElementById('wordInput1');
    var submitButton1 = document.getElementById('submitButton1');
    var wordDisplay1 = document.getElementById('wordDisplay1');

    var wordInput2 = document.getElementById('wordInput2');
    var submitButton2 = document.getElementById('submitButton2');
    var wordDisplay2 = document.getElementById('wordDisplay2');

    chrome.storage.local.get('theWord1', function (result) {
        var storedWord1 = result.theWord1;
        if (storedWord1) {
            wordDisplay1.textContent = storedWord1;
        }
    });

    chrome.storage.local.get('theWord2', function (result) {
        var storedWord2 = result.theWord2;
        if (storedWord2) {
            wordDisplay2.textContent = storedWord2;
        }
    });

    submitButton1.addEventListener('click', function () {
        var word1 = wordInput1.value.trim();
        if (word1 !== '') {
            wordDisplay1.textContent = word1;
            chrome.storage.local.set({ theWord1: word1 });
        } else {
            wordDisplay1.textContent = '';
            chrome.storage.local.remove('theWord1');
        }
    });

    submitButton2.addEventListener('click', function () {
        var word2 = wordInput2.value.trim();
        if (word2 !== '') {
            wordDisplay2.textContent = word2;
            chrome.storage.local.set({ theWord2: word2 });
        } else {
            wordDisplay2.textContent = '';
            chrome.storage.local.remove('theWord2');
        }
    });

    removeButton1.addEventListener('click', function () {
        wordDisplay1.textContent = '';
        chrome.storage.local.remove('theWord1');
    });

    removeButton2.addEventListener('click', function () {
        wordDisplay2.textContent = '';
        chrome.storage.local.remove('theWord2');
    });
});
