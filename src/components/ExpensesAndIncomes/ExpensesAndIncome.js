//import IncomeItem from "./IncomeItem";
import './ExpensesAndIncome.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import CalculatorComponent from "../Calculator/CalculatorComponent";
import expenseItem from "./ExpenseItem";
import incomeItem from "./IncomeItem";

function ExpensesAndIncome(props){
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    const filteredExpensesOrIncome = props.expenses.filter(expense => {return expense.date.getFullYear().toString() === filteredYear});
    const filteredExpenses = filteredExpensesOrIncome.filter(expenseItem => { return expenseItem.amount < 0});
    const filteredIncome = filteredExpensesOrIncome.filter(incomeItem => {return incomeItem.amount > 0});
    return (<Card className="expensesAndIncome">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpenseFilter>
        <CalculatorComponent expenses={filteredExpenses} income={filteredIncome}></CalculatorComponent>
        <ExpensesChart expenses={filteredExpensesOrIncome}></ExpensesChart>
        <ExpensesList items={filteredExpensesOrIncome}></ExpensesList>
    </Card>);
}
export default ExpensesAndIncome;