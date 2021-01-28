var img = document.querySelector(".article__img");
var btn = document.querySelector(".article__btn");

var people = {
    imgs: [
        "img/people/man.jpg",
        "img/people/men.jpg",
        "img/people/woman.jpg",
        "img/people/women.jpg",
        "img/people/girl.jpg",
        "img/people/girls.jpg",
        "img/people/kid.jpg",
        "img/people/kids.jpg",
        "img/people/baby.jpg",
        "img/people/grandmother.jpg"
    ]
};

var words = [people];

function random__img(arr) {
    arr_random = Math.floor(Math.random() * arr.length);
    img_random = Math.floor(Math.random() * arr[arr_random].imgs.length);
    return arr[arr_random].imgs[img_random];
}

img.src = random__img(words);