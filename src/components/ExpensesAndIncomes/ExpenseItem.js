import './ExpenseItem.css';
import DateComponent from "./DateComponent";
import ItemCard from "./UI/ItemCard";

function ExpenseItem(props){
    return (
        <ItemCard>
            <DateComponent date = {props.date}></DateComponent>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">{props.cost}$</div>
            </div>
        </ItemCard>
    )

}
export default ExpenseItem;