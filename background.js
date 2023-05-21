chrome.commands.onCommand.addListener(function (command) {
    if (command === "logMessage") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: () => {
                    chrome.storage.local.get("theWord1", function (result) {
                        const theWord1 = result.theWord1;
                        if (theWord1) {
                            console.log(theWord1);
                        } else {
                            console.log("I have been summoned");
                        }
                    });
                },
            });
        });
    }
});
