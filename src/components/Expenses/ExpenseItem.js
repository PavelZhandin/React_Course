import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props){

	let {title} =  props;

	const clickHandler = ()=>{
		title = "Updated!"
		// console.log('Clicked!!!');
	}

	return ( 
		<Card className="expense-item">
			<ExpenseDate date={props.date}/>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div> 
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	)
}

export default ExpenseItem;