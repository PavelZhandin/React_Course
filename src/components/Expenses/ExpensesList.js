import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"
import React,  {useState} from 'react';

function ExpensesList(props){
	const { expenses } = props
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = selectedYear => {
		console.log('ExpensesList.js')
		setFilteredYear(selectedYear); 
	}
 
	return (
		<div>
		<Card className="expensesList">
			<ExpenseFilter selected = {filteredYear} onChangeFilter = { filterChangeHandler } />
			<ExpenseItem title ={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
			<ExpenseItem title ={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
			<ExpenseItem title ={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
			<ExpenseItem title ={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
		</Card>
		</div>
	)
}

export default ExpensesList;