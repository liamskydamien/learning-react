import ExpenseItem from "./ExpenseItem";
//import IncomeItem from "./IncomeItem";
import './ExpensesAndIncome.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

function ExpensesAndIncome(props){
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    return <Card className="expensesAndIncome">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpenseFilter>
        {props.expenses
            .filter((expense) => expense.date.getFullYear().toString() === filteredYear)
            .map((expense) => (<ExpenseItem
            key={expense.id}
            name={expense.title}
            date={expense.date}
            cost={expense.amount}></ExpenseItem>))}
    </Card>;
}
export default ExpensesAndIncome;