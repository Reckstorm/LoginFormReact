import axios from "axios";
import React, { useState, useEffect } from "react";
import Item from "../components/item";

function WatherPage() {
    const [data, setData] = useState(null);
    const [url, setUrl] = useState('https://localhost:7014/api/weather/GetWeatherForecast');
    const [response, setResponse] = useState(null);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

        if (data == null) {
            axios
                .get(url)
                .then((response) => {
                    console.log(axios);
                    const temp = response.data;

                    setData(temp);
                    setResponse(temp);
                })
                .catch((err) => console.log(err));
        }
    });

    function search() {
        const temp = [];
        setData(temp);
        response.forEach(i => {
            if (i.summary.toLowerCase().includes(searchString.toLowerCase()) || searchString === "") temp.push(i);
            setData(temp);
        });
    }

    return (
        <div>
            <div className="container-sm d-flex p-2 flex-wrap justify-content-end">
                <input className="m-1" onChange={e => setSearchString(e.target.value)} value={searchString} placeholder="Search"></input>
                <button className="btn btn-primary m-1" onClick={() => setSearchString("")}>Clear</button>
                <button className="btn btn-primary m-1" onClick={search}>Search</button>
            </div>
            <div className="container-sm d-flex p-2 flex-wrap justify-content-between">
                {data == null ? null : data.map((i) => <Item key={i.date} forecast={i}></Item>)}
            </div>
        </div>
    );
}

export default WatherPage;