// const endpoint = 'http://localhost:3000/api/v1'
// const createFav = `${endpoint}/favorite`
// const createBook = `${endpoint}/booking`

const herokuEndPoint = 'https://tablepal-serverside.herokuapp.com/api/v1'
const createFav = `${herokuEndPoint}/favorite`
const createBook = `${herokuEndPoint}/booking`

const jsonify = res => {
    if (res.ok)
        return res.json()
    else
        throw res.json()
}

const handleServerError = response => {
    throw response
}

const createFavorite = favortie => fetch(createFav, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(favortie)
}).then(jsonify)
    .catch(handleServerError)

const createBooking = booking => fetch(createBook, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking)
}).then(res => res.json)

export default {
    createFavorite,
    createBooking
}