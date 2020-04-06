class Sticker{
    constructor(name,image){
        this.name = name
        this.image = image
        this.points = 0
    }
    party(){
        let node = document.querySelector(".loser");
        node.classList.remove("loser")
        node.classList.add("winner","animated","infinite","swing")
        let background = document.querySelector(".displayGame")
        background.classList.add("loser")
    }
    gameReload(){
        let timeoutID
        timeoutID = window.setTimeout(reload, 2000);
        function reload(){
            location.reload()
        }
    }
}
class Letter extends Sticker{
    constructor(name){
        super(name)
    }
}


class Game {
    constructor(){
        this.stickers = [];
        this.letters = [];
        this.score = 100;
    }
     addSticker(sticker){
         this.stickers.push(sticker)
     }
     addLetter(letter){
        this.letters.push(letter)
    }
    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    getRandomLetter(){
        return this.letters[ Math.floor(Math.random() * this.letters.length)]
    }
    displayImages(){
        let currentLetter = this.displayLetter()
        const scorePlace = document.querySelector(".score span")
        let total = this.score
        let right = 0
        let wrong = 0
        scorePlace.innerHTML = total 
        this.shuffle(this.stickers).forEach(function(element){
            if(element.name[0] !== currentLetter){
                var image = new Image(150,150)
                image.src = element.image
                const lugar = document.querySelector(".car")
                const newImage = lugar.appendChild(image)
                newImage.addEventListener('click', event => {
                newImage.classList.add('animated', 'wobble')
               
            })
            } else {
                var image = new Image(150,150)
                image.src = element.image
                const lugar = document.querySelector(".car")
                const newImage = lugar.appendChild(image)
                newImage.addEventListener('click', event => {
                newImage.classList.add('animated', 'fadeOutUp')
                scorePlace.innerHTML = total += 10
                if(scorePlace.innerHTML >= 130){
                    element.party()
                    element.gameReload()
                } 
                
                });
            }
            
            })
           
        }
       
        displayLetter(){
            let letter = document.querySelector(".letter h1")
            let randomLetter = this.getRandomLetter()
            let text = randomLetter.name
            letter.innerHTML= text
            return randomLetter.name
        }
        displayScore(){
        
        }
    }
    
     

    
   
  
    // .classList.add('animated', 'wobble') 

