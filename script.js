function sortear() {
    const num = 10
    let pickedNum = Math.round(Math.random() * num)
    let result = document.getElementById('result')
    result.innerHTML = pickedNum
}