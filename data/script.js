const range = document.getElementById('mySlider');
const discount = document.getElementById('billing');

const rangePricing = {
    1: {
        views: '10K',
        price: 8
    },
    2: {
        views: '50K',
        price: 12
    },
    3: {
        views: '100K',
        price: 16
    },
    4: {
        views: '500K',
        price: 24
    },
    5: {
        views: '1M',
        price: 36
    }
};

range.oninput = function(){
    let trackValue = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 
    'linear-gradient(to right, var(--slider-bar) 0%, var(--slider-bar) ' + trackValue 
    + '%, var(--empty-slider-bar) ' + trackValue + '%, var(--empty-slider-bar) 100%)'
  };


showCurrentPrice(+range.value);

function showCurrentPrice(value) {
    const currentPrice = rangePricing[value];

    const price = discount.checked ? currentPrice.price - currentPrice.price * .25 : currentPrice.price;
    document.getElementById('number-pageviews').innerHTML = currentPrice.views;
    document.getElementById('price-month').innerHTML = `$${price.toFixed(2)}`;
}

range.addEventListener('change', (event) => {
    showCurrentPrice(+event.target.value);
})

discount.addEventListener('change', () => {
    showCurrentPrice(+range.value);
})


  