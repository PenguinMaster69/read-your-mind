document.addEventListener("DOMContentLoaded", function(){
    let textBox = document.getElementById("textBox");
    let overlay = document.getElementById("overlay");
    let result = document.getElementById("result");
    let progressbar = document.getElementById("progressBar");

    textBox.addEventListener("blur", function(){
        let number = textBox.value;

        if (number >= 1 && number <= 10) {
            overlay.style.display = "flex";

            setTimeout(function(){
                result.textContent = "🧠 Infiltrating your thoughts... 🧠"
            }, 3000)

            setTimeout(function(){
                result.textContent = "🧠 Reading your mind... 🧠"
            }, 5000)

            let progress = 0;
            let interval = setInterval(function(){
                progress += 10;
                progressbar.style.width = progress + "%";

                if (progress >= 100) {
                    clearInterval(interval)
                    setTimeout(function(){
                        result.textContent = "🧠 Ive read your mind! Your thinking of the number: " + number + "!" +" 🧠";
                    }, 3000)
                }
            }, 400)
        } else {
            alert("Not a valid number! I said pick a number between 1 - 10!");
        }
    })
})
