let stickers = [{
        name: "Banana",
        image: "./assets/img/banana.jpg"
    },
    {
        name: "Bear",
        image: "./assets/img/bear.jpg"
    },
    {
        name: "Bee",
        image: "./assets/img/bee.jpg"
    },
    {
        name: "Car",
        image: "./assets/img/car.jpg"
    },
    {
        name: "Carrot",
        image: "./assets/img/carrot.jpg"
    },
    {
        name: "Cow",
        image: "./assets/img/cow.jpg"
    },
    {
        name: "Dog",
        image: "./assets/img/cat.jpg"
    },
    {
        name: "Duck",
        image: "./assets/img/duck.jpg"
    },
    {
        name: "Donut",
        image: "./assets/img/donut.jpg"
    },
    {
        name: "Pig",
        image: "./assets/img/pig.jpg"
    },
    {
        name: "Plane",
        image: "./assets/img/plane.jpg"
    },
    {
        name: "Pizza",
        image: "./assets/img/pizza.jpg"
    }
]
let letters = ["B", "C", "D", "P"]

//function to shuffle the arrays
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

//main function of the game
function displayImages(letter) {
    displayLetter(letter)
    let currentLetter = letter
    const scorePlace = document.querySelector(".score span")
    const chances = document.querySelector(".chances")
    const optimism = document.querySelector(".optimism")
    let total = 100
    let wrong = 4
    let right = []
    scorePlace.innerHTML = total
    let arrayShuffled = shuffle(stickers)
    for (const key in arrayShuffled) {
        if (arrayShuffled.hasOwnProperty(key)) {
            const element = arrayShuffled[key];
            if (element.name[0] !== currentLetter) {
                var image = new Image(150, 150)
                image.src = element.image
                const lugar = document.querySelector(".car")
                const newImage = lugar.appendChild(image)
                newImage.addEventListener('click', event => {
                    newImage.classList.add('animated', 'wobble')
                    wrong -= 1
                    let tries = document.querySelector(".message span")
                    tries.innerText = wrong
                    chances.classList.remove("chances")
                    chances.classList.add("chancesDisplay", "animated", "bounceOutUp")
                    chances.innerHTML = "You have " + wrong + " more tries"
                    if (wrong <= 1) {
                        chances.innerHTML = "This is your last chance!"
                    }
                    gameHope()
                    if (wrong === 0) {
                        loseMessage()
                        gameReload()
                    }
                })
            } else {
                var image = new Image(150, 150)
                image.src = element.image
                const lugar = document.querySelector(".car")
                const newImage = lugar.appendChild(image)
                newImage.addEventListener('click', event => {
                    newImage.classList.add('animated', 'fadeOutUp')
                    right.push(element)
                    optimism.classList.remove("optimism")
                    optimism.classList.add("optimismDisplay", "animated", "bounceOutUp")
                    gameGreetings()
                    if (right.length === 3) {
                        party()
                        gameReload()
                    }
                });
            }
        }
    }
}
// display the letter 
function displayLetter(letter){
    let place = document.querySelector(".letter h1")
    place.innerText = letter
}
//function that show the winner state

function party() {
    let node = document.querySelector(".loser");
    node.classList.remove("loser")
    node.classList.add("winner", "animated", "infinite", "swing")
    let background = document.querySelector(".displayGame")
    background.classList.add("loser")
}

//function to start the game again

function gameReload() {
    let timeoutID
    timeoutID = window.setTimeout(reload, 2000);

    function reload() {
        location.reload()
    }
}

//show loser message

function loseMessage() {
    let node = document.querySelector(".helper");
    node.classList.remove("helper")
    node.classList.add("help", "animated", "infinite", "swing")
    let background = document.querySelector(".displayGame")
    background.classList.add("loser")
}

//function to show tries left



//functions to congrats

function gameGreetings() {
    let timeoutID
    timeoutID = window.setTimeout(show, 1000)

    function show() {
        const optimism = document.querySelector(".optimismDisplay")
        optimism.classList.remove("optimismDisplay")
        optimism.classList.add("optimism")
    }
}

function gameHope() {
    let timeoutID
    timeoutID = window.setTimeout(show, 1000)

    function show() {
        const optimism = document.querySelector(".chancesDisplay")
        optimism.classList.remove("chancesDisplay")
        optimism.classList.add("chances")
    }
}

//START THE GAME 
let letterCurrent = shuffle(letters).shift()
displayImages(letterCurrent)
