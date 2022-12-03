import './ExpenseItem.css';
import DateComponent from "./DateComponent";
import Card from "./Card";

function ExpenseItem(props){
    return (
        <Card className="expense-item">
            <DateComponent date = {props.date}></DateComponent>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">{props.cost}$</div>
            </div>
        </Card>
    )

}
export default ExpenseItem;