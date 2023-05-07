import { Block } from "./Block";
import React, {useEffect, useState} from 'react';
import './ComponentThree.scss';

function ComponentThree() {

    const [rates, setRates] = useState({});

    /*var myHeaders = new Headers();
    myHeaders.append("apikey", "TpViM7P7T8Rqs6oBzvlPW84RvWAI0l8U");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };*/

    useEffect(() => {
        fetch(
            "https://api.apilayer.com/exchangerates_data/latest?symbols=RON%2CUSD%2CEUR%2CGBP&base=RON"/*, requestOptions*/
        )
            .then((response) => response.text())
            .then((data) => {setRates(rates)
                .then(result => console.log(result));
            })
            .catch((error) => {
                console.error("Error when fetching", error);
            });
    }, []);

    return (
        <div className="Exchange">
            <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
            <Block value={0} currency="USD" />
        </div>
    );
}

export default ComponentThree;
