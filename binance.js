
const dogePriceFetching = () => {
    axios.request('https://api.coingecko.com/api/v3/coins/dogecoin').then(function (response) {
        const usdPrice = response.data.market_data.current_price.usd
        document.querySelector(".doge").innerText = `${usdPrice} USD`;
    }).catch(function (error) {
        console.error(error);
    });}

dogePriceFetching();

window.setInterval(()=> {
    dogePriceFetching();
}, 1000*5)