import Card from "../UI/Card";
import './CalculatorComponent.css';
import CalculatorItem from "./CalculatorItem";
function CalculatorComponent(props) {
    const budget = props.income.reduce((acc, cur) => acc + cur.amount, 0);
    const expenses = props.expenses.reduce((acc, cur) => acc + cur.amount, 0);
    const balance = budget - expenses;
    return(
        <div className="calculator">
            <CalculatorItem title={'Budget'} value={budget} color={'61C213FF'}></CalculatorItem>
            <CalculatorItem title={'Expenses'} value={expenses} color={'C20000FF'}></CalculatorItem>
            <CalculatorItem title={'Balance'} value={balance} color={'F3B000FF'}></CalculatorItem>
        </div>
    )
}
export default CalculatorComponent;