import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2022,11,29);
    const expenseName = 'Online-Course';
    const expenseCost = 50.45;

    return (
        <div className="expense-item">
            <div>{expenseDate.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{expenseName}</h2>
                <div className="expense-item__price">{expenseCost}$</div>
            </div>
        </div>
    )

}
export default ExpenseItem;