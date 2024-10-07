import { useState} from "react";
import RandomDish from '../../services/randomDish_api'
import css from "./Dish.module.css";
import { nanoid } from 'nanoid';

const Dish = () => {
    const [dish, setDish] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showMoreInfo, setShowMoreInfo] = useState(false);

   
    
    const handleClick = () => {
        setIngredients([]);
        setShowMoreInfo(false);
        setIsLoading(true);
        RandomDish().then(randomDish => setDish(randomDish), setIsLoading(false) )
    }

    const handleClickBtnMore = () => {
        allIngredients();
        setShowMoreInfo(true);
    }

    const allIngredients = () => {
        for (const property in dish[0]) {
            if (property.includes('strIngredient')) {
                if (dish[0][property]) {
                         setIngredients(state => [...state, dish[0][property]])
                    }
            }
        }
    }

    if (isLoading === true) {
        return <h5 className={css.loading}>...Loading...</h5>
    }
    

    return (
         
        <div className={css.container}>
            <button type="button" className={css.button} onClick={handleClick}>Get meal</button>

            {dish.length !== 0 &&
                <div className={css.dishInfo}>
                    <div className={css.boxInfo}>
                        <div className={css.boxImg}>
                            <img src={dish[0].strMealThumb} alt={dish[0].strTags} className={css.img}/>
                        </div>

                        <div className={css.expandedInfo}>
                            <h2 className={css.name}>{dish[0].strMeal}</h2>
                    
                            <ul className={css.reserveList}>
                                {dish[0].strCategory &&
                                    <li> <span className={css.reserveItem}>Category:</span> {dish[0].strCategory}</li>}
                                {dish[0].strArea &&
                                    <li> <span className={css.reserveItem}>Area:</span> {dish[0].strArea}</li>}
                                {dish[0].strTags &&
                                    <li> <span className={css.reserveItem}>Tags:</span> {dish[0].strTags}</li>}
                            </ul>

                            {!showMoreInfo && <button type="button" className={css.button} onClick={handleClickBtnMore}>More</button>}

                            {showMoreInfo && 
                             <div>
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        {ingredients.map(ingredient => <li key={nanoid()}>{ingredient}</li>)}
                                    </ul>
                                </div>
                    }
                        </div>
                    </div>

                    {showMoreInfo &&
                        <div>
                            <p className={css.instructions}>{dish[0].strInstructions}</p>

                        </div>
                    }
                    </div>
            }
      </div>
  )
}

export default Dish;