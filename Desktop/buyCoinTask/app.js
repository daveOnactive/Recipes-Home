const fetchData = async (num) => {
 const apiEndPoint = `https://api.coinlore.com/api/tickers/?start=${num}&limit=10`;

 const response = await fetch(apiEndPoint);
 const data = await response.json();
 return data;
}

const paintDom = (data)=> {
  data.forEach(item => {
    return `
      <tr>
        <td>${item.name}</td>  
        <td>${item.symbol}</td>
        <td>$${item.price_usd}</td>
        <td>${item.tsupply} ${item.symbol}</td> 
      </tr>
    `
  });
}

const start = (() => {
  // const button = document.querySelector();
  const tBody = document.querySelector('tbody');
  console.log(tBody);
})();