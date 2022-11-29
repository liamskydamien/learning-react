import DateComponent from "./DateComponent";
import './IncomeItem.css'
function IncomeItem(props){
    return (
        <div>
            <div className="income-item">
                <DateComponent date = {props.date}></DateComponent>
                <div className="income-item__description">
                    <h2>{props.name}</h2>
                    <div className="income-item__price">{props.amount}$</div>
                </div>
            </div>
        </div>
    )
}

export default IncomeItem;