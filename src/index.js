console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let images
fetch(imgUrl).then(resp => resp.json()).then(json => displayImages(json))

function displayImages(fromFetch) {
    let images = fromFetch['message'];
    let container = document.getElementById('dog-image-container');
    for (let i = 0; i < images.length; i++) {
        let dogImg = document.createElement('img');
        dogImg.src = images[i];
        container.appendChild(dogImg)
    };
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl).then(resp => resp.json()).then(json => disiplayBreeds(json))

function disiplayBreeds(fromFetch) {
    allBreeds = Object.keys(fromFetch['message']);
    let breeds = allBreeds.slice();
    let list = document.getElementById('dog-breeds')
    for (let i = 0; i < breeds.length; i++) {
        let breed = document.createElement('li')
        breed.innerHTML = breeds[i]
        list.appendChild(breed)
    };
}

document.addEventListener("click", function(e) {
    if (e.target.parentElement === document.getElementById('dog-breeds')) {
        e.target.setAttribute('style', 'color: purple');
    }
})



function filterBreeds(letter) {
    let breeds = allBreeds.slice();
    let filtered = [];
    for (let i = 0; i < breeds.length; i++) {
        if (breeds[i].startsWith(letter)) {
            filtered.push(breeds[i]);
        };
    };
    let list = document.getElementById('dog-breeds');
    while (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
    for (i = 0; i < filtered.length; i++) {
        let breed = document.createElement('li');
        breed.innerText = filtered[i];
        list.appendChild(breed);
    };
}

document.addEventListener("input", function(e) {
    console.log(e.target);
    let letter = document.getElementById('breed-dropdown').value;
    filterBreeds(letter);
});