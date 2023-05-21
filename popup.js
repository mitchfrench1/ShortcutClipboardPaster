document.addEventListener('DOMContentLoaded', function () {
    var wordInput1 = document.getElementById('wordInput1');
    var submitButton1 = document.getElementById('submitButton1');
    var wordDisplay1 = document.getElementById('wordDisplay1');

    // Retrieve the word from Chrome storage when the popup is loaded
    chrome.storage.local.get('theWord1', function (result) {
        var storedWord1 = result.theWord1;
        if (storedWord1) {
            wordDisplay1.textContent = storedWord1;
        }
    });

    submitButton1.addEventListener('click', function () {
        var word1 = wordInput1.value.trim();
        if (word1 !== '') {
            wordDisplay1.textContent = word1;
            chrome.storage.local.set({ theWord1: word1 });
        } else {
            wordDisplay1.textContent = '';
            chrome.storage.local.remove('theWord1'); // Remove the word from storage if it's empty
        }
    });

    removeButton1.addEventListener('click', function () {
        wordDisplay1.textContent = '';
        chrome.storage.local.remove('theWord1');
    })
});
