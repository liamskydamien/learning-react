import ExpenseItem from "./components/ExpenseItem";
import IncomeItem from "./components/IncomeItem";
function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: -94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2',
            title: 'New TV',
            amount: -799.49,
            date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: -294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: -450,
            date: new Date(2021, 5, 12),
        },
    ];
  return (
    <div>
        <h2>Hello World!</h2>
        <ExpenseItem name={expenses[0].title}
                     date = {expenses[0].date}
                     cost = {expenses[0].amount}>
        </ExpenseItem>
        <ExpenseItem name={expenses[1].title}
                     date = {expenses[1].date}
                     cost = {expenses[1].amount}>

        </ExpenseItem>
        <ExpenseItem name={expenses[2].title}
                     date = {expenses[2].date}
                     cost = {expenses[2].amount}>

        </ExpenseItem>
        <IncomeItem
            name="Salary"
            date={new Date(2021,1,3)}
            amount = '2500'>
        </IncomeItem>
        <ExpenseItem name={expenses[3].title}
                     date = {expenses[3].date}
                     cost = {expenses[3].amount}>

        </ExpenseItem>
    </div>
  );
}

export default App;
