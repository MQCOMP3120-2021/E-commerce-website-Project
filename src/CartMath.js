import React, {useState} from "react"

const CartMath = ({ itemAmount}) => {
    let initialState = itemAmount
    if(!initialState){
        initialState = {quantity: 1}
    }

    const [amount, setAmount] = useState(initialState)
    
    console.log(amount)

    const UpdateNumber = (event) =>{
        const quantity = event
        console.log(quantity)
        if(quantity === 'quantity'){
            setAmount({...amount, quantity: event})
        }
    }

    const formHandler = (event) => {
        event.preventDefault();
        console.log('Amount Added: ', amount)
        
        setAmount(initialState)
    }
    const Increase = () => {
        var value = amount
        console.log(value)
        value = isNaN(value) ? 0 : value
        if(value < 10){
            value++
            UpdateNumber(value)
        }
    }
    
    const Decrease = () => {
        var value = amount
        console.log(value)
        value = isNaN(value) ? 0 : value
        if(value > 1){
            value--
            UpdateNumber(value)
        }
    }

    return (
        <form onSubmit={formHandler}>
            <label htmlFor='quantity'>Amount</label>
            <input type='button' onClick={Decrease()} value='-' />
            <input type='number' id='quantity' onChange={UpdateNumber}
            value={amount.quantity} maxlenght='2' min='1' max='10' />
            <input type='button' onClick={Increase()} value = '+' />
            <input type='submit' />
        </form>
        
    )




}


const TotalPrice =() => {

    return <p>Total Price: Price x Amount</p>
}




export default CartMath