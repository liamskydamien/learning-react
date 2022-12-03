import './ItemCard.css'
import Card from "../../UI/Card";
function ItemCard(props){
    const classes = 'itemCard ' + props.className;
    return <Card className={classes}>{props.children}</Card>
}
export default ItemCard;