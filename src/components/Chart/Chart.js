import './Chart.css';
import ChartBar from "./ChartBar";
const Chart = props => {
    const totalMax = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));
    return (<div className="chart">
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                value={dataPoint.value}
                maxValue={totalMax}
                key={dataPoint.label}
                label={dataPoint.label}>
            </ChartBar>)}
    </div>)
}
export default Chart;