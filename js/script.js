var img = document.querySelector(".article__img");
var btn = document.querySelector(".article__btn");
var input = document.querySelector(".article__input");
var result = document.querySelector(".gaming__img-result");

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

animals = {
    imgs: [
        "img/animals/dog.jpg",
        "img/animals/cat.jpg",
        "img/animals/hamster.jpg",
        "img/animals/turtle.jpg"
    ],
    words: [
        "dog",
        "cat",
        "hamster",
        "turtle"
    ]
};

fruits = {
    imgs: [
        "img/fruits/apple.jpg",
        "img/fruits/orange.jpg",
        "img/fruits/banana.jpg"
    ],
    words: [
        "apple",
        "orange",
        "banana"
    ]
};

var words = [people, animals, fruits];

function random__img(arr) {
    //выбор случайного массива из words
    arr_random = Math.floor(Math.random() * arr.length);
    index_catalog = arr_random;

    //выбор изображения
    img_random = Math.floor(Math.random() * arr[arr_random].imgs.length);
    index_word = img_random;
    input.placeholder = "Введите по английски что видите";

    return img.src = arr[arr_random].imgs[img_random];
}
random__img(words);

function check_word() {
    //return true or false
    if (input.value.toLowerCase() == words[index_catalog].words[index_word]) {
        result.src = "img/yes.png";
    }
    else {
        result.src = "img/none.png";
    }
}