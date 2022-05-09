import APIKey from './config.js'

const imgContainer = document.querySelector(".image-container")
const loader = document.querySelector(".loader-container")

let photos = []
let totalImages = 0
let loadedImages = 0
let loading = true

const access_key = APIKey
const count = 10
const query = `cat`
const url = `https://api.unsplash.com/photos/random/?client_id=${APIKey}&count=${count}&query=${query}`

const setAttributes = (element, attributes) => {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

const imgeLoaded = () => {
    loadedImages++
    if (loadedImages === totalImages) {
        loading = false
        loader.hidden = true;
    }
}

const displayPhotos = () => {
    loadedImages = 0;
    totalImages = photos.length

    photos.forEach((photo) => {
        const item = document.createElement("a")
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank"
        })

        const img = document.createElement("img")
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_descirption,
            title: photo.alt_descirption
        })

        img.addEventListener("load", imgeLoaded)
        item.appendChild(img)
        imgContainer.appendChild(item)
    })
}

const getPhotos = async () => {
    try {
        const response = await fetch(url)
        photos = await response.json()
        displayPhotos()
        console.log(photos);
    } catch (error) {
        console.log(error);
    }
}

getPhotos()

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2 && !loading) {
        loading = true
        loader.hidden = false
        getPhotos()
    }
})