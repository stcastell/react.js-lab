import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'
import './ExpenseItem.css'

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2022')

    const getYearHandler = p => {
        setFilteredYear(p)
    }

    const filteredData = props.data.filter(element => element.date.getFullYear().toString() === filteredYear)

    return (
        <li>
            <Card className="expenses">

                <ExpensesFilter selectedYear={filteredYear} onGetYear={getYearHandler} />
                <ExpensesChart expenses={filteredData}/>
                <ExpensesList items={filteredData} />

            </Card>

        </li>
    )
}

export default Expenses


