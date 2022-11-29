import './ExpenseDate.css'
import expenseItem from "./ExpenseItem";
function ExpenseDate(props){
    const month = props.date.toLocaleString('de-DE', {month: 'long'});
    const day = props.date.toLocaleString('de-DE', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (<div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>)
}
export default ExpenseDate;