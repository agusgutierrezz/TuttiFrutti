var imagesArray = [
    '/assets/img/banana.jpg',
    '/assets/img/bear.jpg',
    '/assets/img/bee.jpg',
    '/assets/img/car.jpg',
    '/assets/img/carrot.jpg',
    '/assets/img/cow.jpg',
    '/assets/img/cat.jpg',
    '/assets/img/donut.jpg',
    '/assets/img/duck.jpg',
    '/assets/img/pig.jpg',
    '/assets/img/pizza.jpg',
    '/assets/img/plane.jpg',

    ];
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
  
   shuffle(imagesArray).forEach(function(element){
        var image = new Image(150,150)
        image.src = element
        const lugar = document.querySelector(".car")
        lugar.appendChild(image)
    })