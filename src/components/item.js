function Item(props) {
    return (
        <div className="border border-primary rounded p-2 col-sm-4 m-1">
            <label className="fw-semibold">Date:</label>
            <span> {props.forecast.date.slice(0, 10)}</span>
            <br></br>
            <label className="fw-semibold">Temperature C:</label>
            <span> {props.forecast.temperatureC}</span>
            <br></br>
            <label className="fw-semibold">Temperature F:</label>
            <span> {props.forecast.temperatureF}</span>
            <br></br>
            <label className="fw-semibold">Summary:</label>
            <span> {props.forecast.summary}</span>
        </div>
    )
}

export default Item;