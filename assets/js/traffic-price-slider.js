// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const valueToViews = [ "10K", "50K", "100K", "500K", "1M"]
const valueToPrice = [ "8.00", "12.00", "16.00", "24.00", "36.00"]

let viewsValue = document.getElementById("views")
let priceAmount = document.getElementById("price-amount")
const trafficButton = document.getElementById("traffic-button")

trafficButton.oninput = function () {
    const index = Math.ceil(this.value/25)
    viewsValue.innerHTML = valueToViews[index]
    priceAmount.innerHTML = valueToPrice[index]
}

trafficButton.addEventListener("touchmove", () => {
    trafficButton.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + trafficButton.value + '%, hsl(224, 65%, 95%)' + trafficButton.value + '%)'
})

trafficButton.addEventListener("mousemove", () => {
    trafficButton.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + trafficButton.value + '%, hsl(224, 65%, 95%)' + trafficButton.value + '%)'
})

