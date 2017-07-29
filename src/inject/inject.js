(function(){
	var keyMap = {};
	// great read - https://stackoverflow.com/questions/5203407/javascript-multiple-keys-pressed-at-once
	onkeydown = onkeyup = function(e){
		keyMap[e.keyCode] = e.type == 'keydown';
		if(keyMap[17] && keyMap[220]) {
			var activeElement = document.activeElement;
			var defaultValue = activeElement.value;
			var selectedText = getSelectionText();
			if(knayi.fontDetect(selectedText) === 'zawgyi') {
				activeElement.value = knayi.fontConvert(selectedText, 'unicode');
			} else if (knayi.fontDetect(selectedText) === 'zawgyi') {
				activeElement.value = knayi.fontConvert(selectedText, 'zawgyi');
			} else {
				activeElement.value = defaultValue;
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
