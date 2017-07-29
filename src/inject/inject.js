(function(){
	// 17 = ctrl
	// 220 = backslash

	console.log('is this running? good');

	var keyMap = {};

	// great read - https://stackoverflow.com/questions/5203407/javascript-multiple-keys-pressed-at-once
	onkeydown = onkeyup = function(e){
    keyMap[e.keyCode] = e.type == 'keydown';
		if(keyMap[17] && keyMap[220]) {
			var range = document.createRange();
			var activeElement = document.activeElement;
			var defaultValue = activeElement.value;
			var selectedText = getSelectionText();
			var selectedNode = window.getSelection().anchorNode.parentNode;

			if(knayi.fontDetect(selectedText) === 'zawgyi') {
					activeElement.value = knayi.fontConvert(selectedText, 'unicode');
			} else {
					activeElement.value = knayi.fontConvert(selectedText, 'zawgyi');
			}

		}
	}

	function getSelectionText(selectStart, selectEnd) {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
	}

})();