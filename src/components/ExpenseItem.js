import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>November 29th 2022</div>
            <div className="expense-item__description">
                <h2>Course</h2>
                <div className="expense-item__price">50$</div>
            </div>
        </div>
    )

}
export default ExpenseItem;