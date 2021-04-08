import { useStateValue } from '../../StateProvider';
import './Product.css';
// use props to make the product segment reusable, to add different products using the same code
const Product = ({id,title, price,rating,image}) => {
    
   const [, dispatch] = useStateValue();

    const AddToBasket =() =>{

//   dispatch the item into data layer

      dispatch({
          type: 'ADD_TO_BASKET',
          item:{
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
          }
      })
    }
    
    
    
    return (<div className="product">

     <div className="product__info">
            <p>{id}</p>
           <p>{title}</p>
           <p className="product__price">
               <small>$</small>
               <strong>{price}</strong>
           </p>

           <div className="product__rating">
               <p>{rating}</p>
           </div>
        
     </div>
     <img src={image} alt=""/>
     
      <button onClick={AddToBasket()}>Add to Basket</button>

    </div>  );
}
 
export default Product;