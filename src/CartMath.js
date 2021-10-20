import React, {useState} from "react";
import { createStore } from "redux"
import ReactDOM from 'react-dom'
import App from "./App"

// const CartMath = ({updateCart, itemAmount}) => {
//     let initialState = itemAmount
//     if(!initialState){
//         initialState = {quantity: 1}
//     }

// const [amount, setAmount] = useState(itemAmount)

// const counter = (quantity = itemAmount, action) => {

//     if(quantity > 1){
//         switch (action.type) {
//             case '+':
//                 return quantity + 1
//             case '-':
//                 return quantity - 1
//             case 'number':
//                 return quantity
//             default:
//                 return quantity

//         }
//     }
//     else if(quantity <= 1){
//         switch (action.type) {
//             case '+':
//                 return quantity + 1
//             case '-':
//                 return 1
//             case 'number':
//                 return quantity
//             default:
//                 return quantity

//         }
//     }



// }

// const store = createStore(counter)

// store.subscribe(() => {
//     const currAmount = store.getState()
//     console.log('The current amount you have is:', currAmount)
// })

// console.log(amount)


// const UpdateNumber = (event) =>{
//     const quantity = event
//     console.log(quantity)
//     if(quantity === 'quantity'){
//         setAmount({...amount, quantity: event})
//     }
// }

// const formHandler = (event) => {
//     event.preventDefault();
//     console.log('Amount Added: ', store)
//     updateCart(store)
//     setAmount(initialState)
// }

//     return (
//         // <form onSubmit={formHandler}>
//         //     <label htmlFor='quantity'>Amount</label>
//         //     <input type='button' onClick={Decrease()} value='-' />
//         //     <input type='number' id='quantity' onChange={UpdateNumber}
//         //     value={amount.quantity} maxlenght='2' min='1' max='10' />
//         //     <input type='button' onClick={Increase()} value = '+' />
//         //     <input type='submit' />
//         // </form>
//         <>
//             <button onClick = {() => store.dispatch({type: '-'})}>Add Less</button>
//             {store.getState}
//             <button onClick = {() => store.dispatch({type: '+'})}>Add More</button>
//         </>
        
//     )




// }


// const TotalPrice =(quantity, price) => {

//     return quantity * price
// }




// export default CartMath