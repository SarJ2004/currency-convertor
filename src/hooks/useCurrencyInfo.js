import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    let apiurl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    const getCurrInfo = async (url) => {
      let res = await fetch(url);
      let final = await res.json();
      setData(final[currency]);
      //   if we dont want implicit return, we can use sq brackets instead of the regular dot notation(instead of final.currency, we can use final[currency]).
      //   console.log(data);
    };
    getCurrInfo(apiurl);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
