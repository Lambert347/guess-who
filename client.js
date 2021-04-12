console.log('Here are all the available people:', people);

$(document).ready(onReady);
let min = 1;
let max = 7;



function onReady(){
    
    $('#addHere').append(
        `<img src="https://github.com/devjanaprime.png?size=250" alt="Profile image of Dev"></img>`
    );
    $('#addHere').append(
        `<img src="https://github.com/DoctorHowser.png?size=250" alt="Profile image of Dane"></img>`
    );
    $('#addHere').append(
        `<img src="https://github.com/mbmosman.png?size=250" alt="Profile image of Mary"></img>`
    );
    $('#addHere').append(
        `<img src="https://github.com/kdszafranski.png?size=250" alt="Profile image of Kris"></img>`
    );
    $('#addHere').append(
        `<img src="https://github.com/eschwartz.png?size=250" alt="Profile image of Edan"></img>`
    );
    $('#addHere').append(
        `<img src="https://github.com/cassandradanger.png?size=250" alt="Profile image of Casie"></img>`
    );
    $('#addHere').append(
        `<img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris"></img>`
    );
    randomPerson(min, max);
}

function randomPerson(min, max) {
    let el = $('#select');
    el.empty();
    let number = Math.floor(Math.random() * (1 + max - min) + min);
    console.log(number);
    for (let i = 0; i < people.length; i++){
        if (i === number - 1){
            el.append(people[i].name);
        }
    }
}

