// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

let rangeButton = document.getElementById("traffic-button")
let viewsValue = document.getElementById("views")

viewsValue.innerHTML = rangeButton.value

rangeButton.oninput = function() {
    viewsValue.innerHTML = this.value
}

rangeButton.addEventListener("touchmove", () => {
    rangeButton.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + rangeButton.value + '%, hsl(224, 65%, 95%)' + rangeButton.value + '%)'
})

rangeButton.addEventListener("mousemove", () => {
    rangeButton.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + rangeButton.value + '%, hsl(224, 65%, 95%)' + rangeButton.value + '%)'
})
