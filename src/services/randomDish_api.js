import axios from "axios";

const RandomDish = () => {
    
    return axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(data => data.data.meals)
        .catch(error => error)
}

export default RandomDish;