const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        switch (e.target.id) {
            case "red":
                body.style.backgroundColor = e.target.id;
            case "blue":
                body.style.backgroundColor = e.target.id;
            case "green":
                body.style.backgroundColor = e.target.id;
            case "yellow":
                body.style.backgroundColor = e.target.id;
        }
    })

})