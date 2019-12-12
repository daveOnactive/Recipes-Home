const fetchData = async (num) => {
 const apiEndPoint = `https://api.coinlore.com/api/tickers/?start=${ num }&limit=10`;
 const response = await fetch(apiEndPoint);
 const data = await response.json();
 return data;
}

const htmlElement = (item)=> {
  const dom = `
    <td>
      <h3 class="head">💰 Coin</h3>
      <span>${ item.name }</span>
    </td>
    <td>
      <h3 class="head">📄 Code</h3>
      <span>${ item.symbol }</span>
    </td>
    <td>
      <h3 class="head">🤑 Price</h3>
      <span>$ ${ item.price_usd }</span>
    </td>
    <td>
      <h3 class="head">📉 Total Supply</h3>
      <span>${ item.tsupply } ${ item.symbol }</span>
    </td>
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
      tBody.appendChild(tr);
    })
  })
}

const showBtn = (elem, num) => {
  num > 10 ? elem.style.visibility = 'visible' : elem.style.visibility = 'hidden';
}

const start = (() => {
  let number = 10;
  const button = document.querySelector('.btn-next');
  const preBtn = document.querySelector('.btn-prev');
  paintDom(number);
  showBtn(preBtn, number);

  button.addEventListener('click', () => {
    number += 10;
    paintDom(number);
    showBtn(preBtn, number);
  });

  preBtn.addEventListener('click', () => {
    number -= 10;
    paintDom(number);
    showBtn(preBtn, number);
  })
})();