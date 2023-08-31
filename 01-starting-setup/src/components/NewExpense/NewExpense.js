import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = props => { 

    const saveExpenseDataHandler = enteredExpenseData => { 
        const expenseData = {
            id: ("e"+Math.random()).toString(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData)
    }

    const [isEditing, setIsEditing] = useState(false)

    const newExpenseClickHandler = () => { 
        setIsEditing(true)
    }
    const cancelEditing = () => { 
        setIsEditing(false)
    }
    
    return (
        <div className='new-expense'>

            {!isEditing && <button onClick={newExpenseClickHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditing}/>}
            
        </div>
    )
}

export default NewExpense