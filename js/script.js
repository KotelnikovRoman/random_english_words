var img = document.querySelector(".article__img");
var btn = document.querySelector(".article__btn");
var input = document.querySelector(".article__input");
var index_catalog = 0;
var index_word = 0;

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
    ],
    words: [
        "man",
        "men",
        "woman",
        "women",
        "girl",
        "girls",
        "kid",
        "kids",
        "baby",
        "grandmother"
    ]
};

var words = [people];

function random__img(arr) {
    arr_random = Math.floor(Math.random() * arr.length);
    index_catalog = arr_random;
    img_random = Math.floor(Math.random() * arr[arr_random].imgs.length);
    index_word = img_random;
    input.value = "Введите по английски что видите";
    return img.src = arr[arr_random].imgs[img_random];
}
random__img(words);

function check_word() {
    console.log(input.value == words[index_catalog].words[index_word] ? true : false);
}