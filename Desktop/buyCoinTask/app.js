const fetchData = async (num) => {
 const apiEndPoint = `https://api.coinlore.com/api/tickers/?start=${num}&limit=10`;
 const response = await fetch(apiEndPoint);
 const data = await response.json();
 return data;
}

const htmlElement = (item)=> {
  const dom =  `
    <td>${item.name}</td>  
    <td>${item.symbol}</td>
    <td>$${item.price_usd}</td>
    <td>${item.tsupply} ${item.symbol}</td> 
  `;

  return dom;
}

const paintDom = (number) => {
  const tBody = document.querySelector('tbody');
  tBody.innerHTML = '';

  fetchData(number).then(data => {
    const result = data.data;
    
    result.forEach(item => {
      let dom = htmlElement(item);
      const tr = document.createElement('tr');
      tr.innerHTML = dom;
      tBody.appendChild(tr)
    })
  })
}

const start = (() => {
  let number = 10;
  const button = document.querySelector('.btn');
  paintDom(number);

  button.addEventListener('click', () => {
    number += 10;
    paintDom(number);
  });
})();