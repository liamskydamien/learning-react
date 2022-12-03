import React, {useState} from "react";
import './ExpenseItem.css';
import DateComponent from "./DateComponent";
import ItemCard from "./UI/ItemCard";

function ExpenseItem(props){
    const clickHandler = () => {
        setTitle('updated');
    };
    const [title, setTitle] = useState(props.name);
    return (
        <ItemCard>
            <DateComponent date = {props.date}></DateComponent>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.cost}$</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </ItemCard>
    )

}
export default ExpenseItem;