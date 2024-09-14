import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/81cf834e0682a537695877da/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res?.conversion_rates));
    }, [currency]);

    return data;
}
// console.log(res);

export default useCurrencyInfo;
