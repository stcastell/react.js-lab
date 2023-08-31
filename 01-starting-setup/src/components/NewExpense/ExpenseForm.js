import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = e => {
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = e => {
        setEnteredDate(e.target.value)
    }

    const formSubmitHandler = e => {
        e.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} placeholder='Title' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' placeholder='Amount' onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min="2022-01-01" max='2023-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add expense</button>
        </div>
    </form>
}
export default ExpenseForm

// import React from 'react';

// // don't change the Component name "App"
// export default function App() {

//     const [alert, setAlert] = React.useState('')

//     const proceedButtonHandler = () => {
//         setAlert('')
//     }

//     const deleteButtonHandler = () => {
//         setAlert(
//             <div id="alert">
//                 <h2>Are you sure?</h2>
//                 <p>These changes can't be reverted!</p>
//                 <button onClick={proceedButtonHandler}>
//                     Proceed</button>
//             </div>
//         )
//     }

//     return (
//         <div>
//             <button onClick={deleteButtonHandler}>Delete</button>
//             {alert}
//         </div>
//     );
// }