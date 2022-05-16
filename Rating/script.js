const ratings = document.querySelectorAll('.rating')
const submit = document.querySelector('.btn')
const thankYou = document.querySelector('.thankyou-container')
const ratingContainer = document.querySelector('.rating-container')
const givenRating = document.querySelector('.given-rating')

selectedRating = 0

ratings.forEach((rating, index) => {
    rating.addEventListener('click', (e) => {
        check()
        rating.classList.add('selected')
        selectedRating = e.target.innerText
    })
})

function check() {
    ratings.forEach((rating) => {
        rating.classList.remove('selected')
    })
}

submit.addEventListener('click', () => {
    console.log(selectedRating);
    if (selectedRating) {
        ratingContainer.hidden = true;
        givenRating.innerText = `You selected ${selectedRating} out of ${ratings.length}`
        thankYou.style.display = 'flex'
    }
})