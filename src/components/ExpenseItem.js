import './ExpenseItem.css';
import DateComponent from "./DateComponent";

function ExpenseItem(props){
    return (
        <div className="expense-item">
            <DateComponent date = {props.date}></DateComponent>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">{props.cost}$</div>
            </div>
        </div>
    )

}
export default ExpenseItem;