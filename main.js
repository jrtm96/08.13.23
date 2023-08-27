const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;

console.log(yearlyRent);

console.log("Hello from the other siiiiide");



const firstName = "Jose";

const madeUpLastName = "Rosa";

console.log(`Hello, World! My name is  ${firstName} ${madeUpLastName}, Nice to meet you!`);



const skyIsBlue = true;

if (skyIsBlue) {
    console.log("The sky is blue!");
} else {
    console.log("The sky is not blue!");
}



let friendsAtParty = 0;

const friends = 20;


// while (friendsAtParty < 20) {
// friendsAtParty = friendsAtParty + 1;
//    friendsAtParty++;
//};
console.log(friendsAtParty); // expect 20, logs 20


//project
const timesToRepeat = 10;

const character = "m"

//some loop that takes that character and repeats it that many times

// const storingCounter = 0;

// while (storingCounter < timesToRepeat) {
//     let newCharacter = "";
//     newCharacter + "m";
//     storingCounter++;
//     console.log(newCharacter);
// }

let newCharString = "";

for (let i = 0; i < timesToRepeat; i++) {
    newCharString = newCharString + character;

}
console.log(newCharString);

// is equivalent to built in Method padStart

console.log("".padStart(timesToRepeat, character));

//curiousity:
console.log("".padStart(timesToRepeat, character));
//console logs :"my god this food is " not expected
console.log(" good".padStart(timesToRepeat, character));
//console logs:"mmmmm good" interesting, 10 character spaces but mmmmm starts at the beginning, not at the end, expected "start" part of padStart tomean that anything in string would appear at beginning but not true.

const person = {
    name: "Jose Rosa",
    city: "Chitown",
    state: "IL",
    favoriteFood: "Pizza",
    numberOfTacosWanted: 100,
    wantsOneMillionDollars: true
}

const residence = 'city';

console.log(person);
console.log(person.name); //OPTIMAL
console.log(person["name"]); // CAN BE USED BUT NOT OPTIMAL
console.log(`${person.name} is from ${person.city}, ${person.state}. He loves ${person.favoriteFood} and Tacos! if he could have any amount of Tacos right now, he would have ${person.numberOfTacosWanted}. True. Does ${person.name} want 1 Million Dollars? ${person.name} says: \"${person.wantsOneMillionDollars}\"`
);

console.log(`${person.residence} lives at`);
console.log(person.residence);

const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
};

const button = document.querySelector(".event-button");
button.addEventListener("click", function () { alert("Hey There!"); });

const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");
input.addEventListener("keyup", function () {
    paragraph.innerText = input.value;
});

const colInput = document.querySelector(".color-input");
const colPara = document.querySelector(".color-box");
input.addEventListener("change", function () {
    colPara.style.backgroundColor = colInput.value;
});

document.querySelector(".button-container").addEventListener("click", function (event) {
    alert(`You Clicked ${event.target.innerText}`);
});


// calculator logic

//select the display element and save it to a variable "display"
const display = document.querySelector(".display");

//add a click event listener to the calculator
const calculatorBody = document.querySelector(".calculator");
// calculator.addEventListener("click", function(event) {
//     //check if the clicked element is a button so that the display is not clicked.
//     if (event.target.tagName.toLowerCase() === 'button') //then
//     {
//         //append the buttons text to the display
//         display.innerText += event.target.innerText;
//     }
// });

//now i need to run create a way so that when "=" is pressed the equation on the display gets solved
calculatorBody.addEventListener("click", function (event) {
    //check if the clicked element is a button so that the display is not clicked.
    if (event.target.tagName.toLowerCase() === 'button') //then
    {
        if (event.target.innerText === '=') //evaluate the expression in the display and evaluate the result
        {
            try {
                display.innerText = eval(display.innerText.replace('x', '*').replace('%', '/')); //evaluate, chaining
            } catch (error) {
                display.innerText = "error: " + error.message;
            }
        } else if (event.target.innerText === 'C') {
            //clear the display
            display.innerText = '_';
        } else if (event.target.innerText === 'del') {
            //remove the last character from the display
            display.innerText = display.innerText.slice(0, -1);
            // }else {
            //     //append the buttons text to the display
            //     display.innerText += event.target.innerText;
        } else {
            // If the display is '_' and the button pressed is a number
            if (display.innerText === '_') {
                // If it's a number other than '0', replace '0' with the number
                if (!isNaN(event.target.innerText) && display !== '_') {
                    display.innerText = event.target.innerText;
                } else if (isNaN(event.target.innerText)) { // If it's not a number, append it
                    display.innerText += event.target.innerText;
                }
                // If it's '0', do nothing
            } else {
                display.innerText += event.target.innerText;
            }
        }
    }
});

const dogsImagesAPIURL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

// function addNewDoggo() {
//     const promise = fetch(dogsImagesAPIURL);
//     promise.then(function (response) {
//         const proccessingPromise = response.text();
//         return proccessingPromise;
//     })
//         .then(function (proccessedResponse) {
//             const dogObject = JSON.parse(proccessedResponse);
//             const img = document.createElement("img");
//             img.src = dogObject.message;
//             img.alt = "Cute Dog";
//             doggos.appendChild(img);
//         }).catch(function (error) {
//             // handle the error
//             alert("error with API");
//         });
// }
// document.getElementById("dog-btn").addEventListener("click", addNewDoggo)


async function addNewDoggo() {
    const promise =  await fetch(dogsImagesAPIURL);
    const proccessedResponse = await promise.json();
    const img = document.createElement("img");
    img.src = proccessedResponse.message;
    img.alt = "Cute Dog";
    doggos.appendChild(img)
}
document.getElementById("dog-btn").addEventListener("click", addNewDoggo)