const key = 'demo';
const functionName = 'TIME_SERIES_DAILY';
const symbolName = 'MSFT';
const apiUrl = 'http://api.coindesk.com/v1/bpi/historical/close.json';

axios
.get(apiUrl)
.then(responseFromAPI => {
  console.log(responseFromAPI.data); 
  printTheChart(responseFromAPI.data);
})
.catch(err => console.log('Error while getting the data:', err));


function printTheChart(stockData) {
    const dailyData = stockData.bpi;
   
    const stockDates = Object.keys(dailyData);
    const stockPrices = stockDates.map(date => dailyData[date]);

    console.log("stockPrices = ", stockPrices);
   
    const ctx = document.getElementById('my-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: stockDates,
        datasets: [
          {
            label: 'Stock Chart',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: stockPrices
          }
        ]
      }
    }); // closes chart = new Chart()
  } 