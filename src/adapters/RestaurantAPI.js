const APIKey = '04079348e2a7cbe3568f8b3150f3a8d2'
let numResta = 0
let restaurantURL = `https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&start=${numResta}&apikey=${APIKey}`

const getRestaurants = () => fetch(restaurantURL).then(res => res.json())

const increaseNumResta = () => restaurantURL = `https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&start=${numResta += 10}&apikey=${APIKey}`

export default {
    getRestaurants,
    increaseNumResta
}