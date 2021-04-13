console.log('Here are all the available people:', people);

$(document).ready(onReady);
//declares the min and max variables, and the person and userName variables
let min = 1;
let max = 7;
let person = '';
let userName = '';
function onReady(){

    //for loop to move through the array and append the profile picture for each person in the array to the DOM.
    for (let i = 0; i < people.length; i++){
        userName = people[i].githubUsername;
        let name = people[i].name;
        //Also uses the name property for each person in the array to add a unique image id 
        $('.imgParent').append(`
        <img src="https://github.com/${userName}.png?size=250" img class="image" img id="${name}" 
        alt="Profile image of Dev"></img>`)
    }

    //calls the randomPerson function
    randomPerson(min, max);
    //When a profile picture element is clicked on, the function gets the id of that element and sets it to the variable personID
    $('#addHere').on('click', '.image', function() {
        let personID = $(this).attr('id');
        //if that id (the name of the person in the array) is equal to value in the person variable (the person randomly generated)
        //the user is alerted that they won and the randomPerson function is called again, starting the whole process over
        if (personID === person){
            alert('YOU WIN!');
            randomPerson(min, max);
        }
        //if the user clicks on the wrong image, they are notified but are given more chances to get it right.
        else {
            alert('Do you know your instructors? Try again!')
        }
    });
}

//function to generate a random person, then return that person
function randomPerson(min, max) {
    //generates a random number between 1 and 7, the number of people in the array
    let number = Math.floor(Math.random() * (1 + max - min) + min);
    //targets the select element in the index file and set it to an el variable
    let el = $('#select');
    el.empty();
    //loop to lopp through the array of people 
    //if the index number i is equal to the random number minus 1 (because arrays start at index 0 and go to 6 for a 7 length array)
    //then the el variable is appended with the name of that person from the array in data.js.
    //this is now the name of the person is randomized, by grabbing the person corresponding with the random number every time the function is run.
    for (let i = 0; i < people.length; i++){
        if (i === number - 1){
            el.append(people[i].name);
            //sets the person variable to the name at that index in the array
            person = people[i].name
        }
    }
    //return the person variable for later use
    console.log(person);
    return person;
}
