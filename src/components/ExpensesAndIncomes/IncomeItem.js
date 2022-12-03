import DateComponent from "./DateComponent";
import './IncomeItem.css'
import ItemCard from "./UI/ItemCard";
function IncomeItem(props){
    return (
            <ItemCard>
                <DateComponent date = {props.date}></DateComponent>
                <div className="income-item__description">
                    <h2>{props.name}</h2>
                    <div className="income-item__price">{props.amount}$</div>
                </div>
            </ItemCard>
    )
}

export default IncomeItem;