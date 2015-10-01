var codetalkers = [];

function resetNames(){
	codetalkers = ['Alice', 'Kadi', 'Shoshana', 'Catherine', 'Christine', 'Deyka', 'Katherine', 'Sophia', 'Rachel','Lubna'];
}

function namePicker(){
	var namePick = codetalkers.splice(Math.floor(Math.random() * codetalkers.length),1);

	if(codetalkers.length > 0){
		document.getElementById('chosen_one').innerHTML = (namePick);
		// document.body.style.backgroundColor = "navy";
		document.body.style.backgroundColor = (function(h){return '#000000'.substr(0,7-h.length)+h})((~~(Math.random()*(1<<24))).toString(16))
	}
	else {
		resetNames();
	}
}

function detectSpecialKeys(e){
		var evtobj = window.event? event : e
		if (evtobj.keyCode == 32)
		namePicker();
		}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.onClick=namePicker();


