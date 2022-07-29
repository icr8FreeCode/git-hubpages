function evaluateMC(id, correct) {
    if (correct) {
        document.getElementById(id).innerHTML = 'Yep!';
        document.getElementById(id).style.color = 'blue';
    } else {
        document.getElementById(id).innerHTML = 'Nope!';
        document.getElementById(id).style.color = 'red';
    }
}

function highlight(id, answer) {
    text = document.getElementById(id).innerHTML
    if (text.indexOf('Correct') !== -1 || text.indexOf('Nope') !== -1) {
        return
    }
    if (answer) {
        document.getElementById(id).style.background = 'lightgreen';
        document.getElementById(id).innerHTML = text + ' - Correct!';
    } else {
        document.getElementById(id).innerHTML = text + ' - Nope!';
        document.getElementById(id).style.color = 'red';
    }
}

function revealTrueFalse(id, correct) {
    if (document.getElementById(id).innerHTML != '') {
        document.getElementById(id).innerHTML = '';
    } else if (correct) {
        document.getElementById(id).innerHTML = 'True';
        document.getElementById(id).style.color = 'blue';
    } else {
        document.getElementById(id).innerHTML = 'False';
        document.getElementById(id).style.color = 'red';
    }
}

function revealAnswer(id, answer) {
    if (document.getElementById(id).innerHTML != '') {
        document.getElementById(id).innerHTML = '';
    } else {
        document.getElementById(id).innerHTML = '- ' + answer;
        document.getElementById(id).style.color = 'blue';
    }
}

function reveal(id) {
    state = document.getElementById(id).style.opacity
    if (state > 0) {
       document.getElementById(id).style.opacity = 0;
    } else {
       document.getElementById(id).style.opacity = 1;
    }
}

function revealBinaryAnswer(id, correct) {
    if (document.getElementById(id).innerHTML != '') {
        document.getElementById(id).innerHTML = '';
    } else if (correct) {
        document.getElementById(id).innerHTML = '- Property';
        document.getElementById(id).style.color = 'blue';
    } else {
        document.getElementById(id).innerHTML = '- Method';
        document.getElementById(id).style.color = 'red';
    }
}
  