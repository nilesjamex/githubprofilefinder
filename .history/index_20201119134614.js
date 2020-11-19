
const submit = document.querySelector('.search');
submit.addEventListener('submit', (e) => {
    e.preventDefault;
    const word = document.querySelector('.input').value;
console.log(word);

fetch(`https://api.github.com/search/user/?q${word}&client_id=474d29a8b6e18aed38c8&client-secret=726fd0e7b319b42ad2b500471260ff778f4bb842`)
.then((res) => {
    res.json()
})
.then((data) => {
    console.log(data)
})
})