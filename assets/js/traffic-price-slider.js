// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

let trafficButton = document.getElementById("traffic-button")
let viewsValue = document.getElementById("views")

viewsValue.innerHTML = trafficButton.value

trafficButton.oninput = function() {
    viewsValue.innerHTML = this.value
}

trafficButton.addEventListener("touchmove", () => {
    trafficButton.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + trafficButton.value + '%, hsl(224, 65%, 95%)' + trafficButton.value + '%)'
})

trafficButton.addEventListener("mousemove", () => {
    trafficButton.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + trafficButton.value + '%, hsl(224, 65%, 95%)' + trafficButton.value + '%)'
})
