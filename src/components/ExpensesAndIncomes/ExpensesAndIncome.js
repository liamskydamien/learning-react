//import IncomeItem from "./IncomeItem";
import './ExpensesAndIncome.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function ExpensesAndIncome(props){
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {return expense.date.getFullYear().toString() === filteredYear});
    return (<Card className="expensesAndIncome">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpenseFilter>
        <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>);
}
export default ExpensesAndIncome;