import './DateComponent.css'
import expenseItem from "./ExpenseItem";
function DateComponent(props){
    const month = props.date.toLocaleString('de-DE', {month: 'long'});
    const day = props.date.toLocaleString('de-DE', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (<div className="date">
        <div className="date__day">{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>)
}
export default DateComponent;