console.log('Here are all the available people:', people);

$(document).ready(onReady);
let min = 1;
let max = 7;
let person = '';
let userName = '';
function onReady(){


    for (let i = 0; i < people.length; i++){
        userName = people[i].githubUsername;
        let name = people[i].name; 
        $('#addHere').append(`
        <div class="img">
        <img src="https://github.com/${userName}.png?size=250" img class="image" img id="${name}" alt="Profile image of Dev"></img>`)
    }

    randomPerson(min, max);
    $('#addHere').on('click', '.image', function() {
        let personID = $(this).attr('id');
        if (personID === person){
            alert('YOU WIN!');
            randomPerson(min, max);
        }
        else {
            alert('Do you know your instructors? Try again!')
        }
    });
}

function randomPerson(min, max) {
    let number = Math.floor(Math.random() * (1 + max - min) + min);
    console.log(number);
    let el = $('#select');
    el.empty();
    for (let i = 0; i < people.length; i++){
        if (i === number - 1){
            el.append(people[i].name);
            person = people[i].name
        }
    }
    console.log(person);
    return person;
}
