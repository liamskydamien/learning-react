import ExpenseItem from "./ExpenseItem";
import IncomeItem from "./IncomeItem";
import './ExpensesAndIncome.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

function ExpensesAndIncome(props){
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
      console.log(selectedYear);
    };
    return <Card className="expensesAndIncome">
        <ExpenseFilter onFilterChange={filterChangeHandler}></ExpenseFilter>
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