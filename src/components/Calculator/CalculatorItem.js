import './CalculatorItem.css';
const CalculatorItem = props => {
    const color = '#'+props.color; // convert to string
    return(
        <div className="calculatorItem" style={{backgroundColor: color}} >
            <p className="calculatorItem__title">{props.title}</p>
            <p className="calculatorItem__value">{props.value}</p>
        </div>
    )
}
export default CalculatorItem;