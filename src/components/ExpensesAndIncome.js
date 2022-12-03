import ExpenseItem from "./ExpenseItem";
import IncomeItem from "./IncomeItem";
import './ExpensesAndIncome.css'
import Card from "./Card";

function ExpensesAndIncome(props){
    return <Card className="expensesAndIncome">
        <ExpenseItem name={props.expenses[0].title}
                     date = {props.expenses[0].date}
                     cost = {props.expenses[0].amount}>
        </ExpenseItem>
        <ExpenseItem name={props.expenses[1].title}
                     date = {props.expenses[1].date}
                     cost = {props.expenses[1].amount}>

        </ExpenseItem>
        <ExpenseItem name={props.expenses[2].title}
                     date = {props.expenses[2].date}
                     cost = {props.expenses[2].amount}>

        </ExpenseItem>
        <ExpenseItem name={props.expenses[3].title}
                     date = {props.expenses[3].date}
                     cost = {props.expenses[3].amount}>
        </ExpenseItem>
    </Card>;
}
export default ExpensesAndIncome;