import './ExpenseItem.css';
import DateComponent from "./DateComponent";
import ItemCard from "./UI/ItemCard";

function ExpenseItem(props){
    const color = props.cost > 0 ? '#097501' : '#bd1600';
    const pre = props.cost > 0 ? '+' : '';
    return (
        <ItemCard>
            <DateComponent date = {props.date}></DateComponent>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price" style={
                    {backgroundColor: color}}>
                    {pre + props.cost}$
                </div>
            </div>
        </ItemCard>
    )

}
export default ExpenseItem;