class Sticker{
    constructor(name,image){
        this.name = name
        this.image = image
    }
    
}
class Letter extends Sticker{
    constructor(name,image){
        super(name,image)
    }
}


class Game {
    constructor(){
        this.stickers = [];
        this.letters = [];
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
        this.shuffle(this.stickers).forEach(function(element){
            var image = new Image(150,150)
            image.src = element.image
            const lugar = document.querySelector(".car")
            lugar.appendChild(image)
        })
        }
        displayLetter(){
            let letter = document.querySelector(".letterContainer")
            let image = new Image(150,150)
            image.src = this.getRandomLetter().image
            letter.appendChild(image) 
            
        }
}



