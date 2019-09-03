const endpoint = 'http://localhost:3000/api/v1'
const createFav = `${endpoint}/favorite`

const createFavorite = favortie => fetch(createFav, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(favortie)
}).then(res => res.json())

export default {
    createFavorite
}