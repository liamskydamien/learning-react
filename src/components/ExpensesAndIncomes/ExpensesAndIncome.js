//import IncomeItem from "./IncomeItem";
import './ExpensesAndIncome.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import CalculatorComponent from "../Calculator/CalculatorComponent";

function ExpensesAndIncome(props){
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {return expense.date.getFullYear().toString() === filteredYear});
    return (<Card className="expensesAndIncome">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpenseFilter>
        <CalculatorComponent expenses={filteredExpenses} income={filteredExpenses}></CalculatorComponent>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>);
}
export default ExpensesAndIncome;