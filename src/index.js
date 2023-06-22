//As a user, I can:
//1. CLICK ON DOGS IN THE DOG BAR TO SEE MORE INFO ABOUT THE GOOD PUPPER; MORE INFO INCLUDES A DOG PIC, A DOG NAME, AND A DOG BUTTON THAT INDICATES WHETHER IT IS A GOOD DOG OR A BAD DOG;
//2. CLICK ON GOOD DOG/BAD DOG BUTTON IN ORDER TO TOGGLE PUP GOODNESS;
//3. CLICK ON "FILTER GOOD DOGS" BUTTON IN ORDER TO JUST SEE GOOD DOGS OR SEE ALL DOGS IN DOG BAR.

//STEP 2: ADD PUPS TO DOG BAR
//On the page, there is a div with the id of "dog-bar". When the page loads, use fetch to get all of the pup data from your server. When you have this information, you'll need to add a span with the pup's name to the dog bar (ex: <span>Mr. Bonkers</span>).

//First, I need to:
//[x] set the url to a variable in the global scope
//[x] write a fetch function that takes in a url and returns a fetch
//[x] take the fetch function, pass in the URL, chain a .then that iterates over the returned array and passes in the render function 
//[x] declare the dog bar id DOM selector in global scope
//[x] write a render function that takes in the dogsObj and creates a span with the dogs names using the key.value from the obj

//STEP 3: SHOW MORE INFO ABOUT EACH PUP
//When a user clicks on a pup's span in the div#dog-bar, that pup's info (image, name, and isGoodDog status) should show up in the div with the id of "dog-info". Display the pup's info in the div with the following elements:
//1. an img tag with the pup's image url
//2. an h2 with the pup's name
//3. a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false. Ex:
// <img src="dog_image_url" />
// <h2>Mr. Bonkers</h2>
// <button>Good Dog!</button>

//Then, I need to:
//[x] add an event listener to the span element that passes in a callback function that renders the dog info in the div
//[x] create a render function to render the dog info based on the html elements above
//[x] write a conditional for the button value to show good dog or bad dog based on the truthy-ness of its object value
//[x] append elements to the DOM


// STEP 4: TOGGLE GOOD DOG
// When a user clicks the Good Dog/Bad Dog button, two things should happen:
// The button's text should change from Good to Bad or Bad to Good

//Not doing:

// The corresponding pup object in the database should be updated to reflect the new isGoodDog value
// You can update a dog by making a PATCH request to /pups/:id and including the updated isGoodDog status in the body of the request.

//Lastly, I need to:
//[] add an event listener to the button that when clicked, uses a conditional statement to toggle the text of the button



//Global variables

const URL = "http://localhost:3000/pups"
const img = document.createElement('img')
const pupName = document.createElement('h2')
const button = document.createElement('button')


//DOM Selectors

const dogBar = document.querySelector('#dog-bar')
const dogInfo = document.querySelector('#dog-info')


//Initializer
getAllDogs(URL)
.then(dogArr => {
    dogArr.forEach(renderDogs)
})

//Fetch function

function getAllDogs(url) {
    return fetch(url)
    .then(res => res.json())
}

//Render functions

function renderDogs(dogs) {
    const span = document.createElement("span")
    
    span.textContent = dogs.name
    
    dogBar.appendChild(span)
    
    span.addEventListener('click', () => renderDogInfo(dogs))
}

function renderDogInfo(dogs) {
    img.src = dogs.image
    pupName.textContent = dogs.name
    
    if (dogs.isGoodDog) { 
        button.textContent = "Good Dog!"
    } else {
        button.textContent = "Bad Dog!"
    }
    
    dogInfo.append(img)
    dogInfo.append(pupName)
    dogInfo.append(button)
    
    button.addEventListener('click', () => {
        if (button.textContent = "Good Dog!") {
            button.textContent = "Bad Dog!"
        } else if (button.textContent = "Bad Dog!") {
            button.textContent = "Good Dog!"
        }
    })
}

//Event listeners

