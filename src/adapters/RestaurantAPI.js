const APIKey = '04079348e2a7cbe3568f8b3150f3a8d2'
let numResta = 0
let restaurantURL = `https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&start=${numResta}&apikey=${APIKey}`
let restaCuisine = ''
let restaSearch = ''
let cuisineURL = `https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&start=${numResta}&cuisines=${restaCuisine}&apikey=${APIKey}`

const getRestaurants = () => fetch(restaurantURL).then(res => res.json())

const increaseNumResta = (restaCuisine, restaSearch) => restaurantURL = `https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&start=${numResta += 10}&cuisines=${restaCuisine}&q=${restaSearch}&apikey=${APIKey}`

const cuisineSearch = (restaCuisine) => fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&start=${numResta}&cuisines=${restaCuisine}&apikey=${APIKey}`).then(res => res.json())

const restaurantSearch = (restaSearch) => fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&start=${numResta}&q=${restaSearch}&apikey=${APIKey}`).then(res => res.json())

const getFavoriteRestaurant = fav => fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${fav}&apikey=${APIKey}`).then(res => res.json())

export default {
    getRestaurants,
    increaseNumResta,
    cuisineSearch,
    restaurantSearch,
    getFavoriteRestaurant
}