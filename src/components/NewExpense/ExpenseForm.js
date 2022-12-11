import './ExpenseForm.css';
import React, {useState} from "react";
function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
//    const [userInput, setUserInput] = useState({
//        enteredTitle: '',
//        enteredAmount: '',
//        enteredDate: ''
//    });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /*setUserInput((prevState) =>{
            return {
                ...prevState,
                enteredTitle: event.target.value,
            }
        });*/
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        /*setUserInput((prevState) =>{
            return {
                ...prevState,
                enteredAmount: event.target.value,
            }
        });*/
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        /*setUserInput((prevState) =>{
            return {
                ...prevState,
                enteredDate: event.target.value,
            }
        });*/
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setAmount('');
        setDate('');
    }

    const cancelHandler = (event) => {
        event.preventDefault();
        setEnteredTitle('');
        setAmount('');
        setDate('');
        props.onCancel();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="-10000" step="0.01" onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={cancelHandler}>Cancel</button>
            </div>
        </form>
    );
}
export default ExpenseForm;