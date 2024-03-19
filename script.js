let minCounter = 0;
let hourCounter = 0;
let red = 5, orange = 5, yellow = 5, pink = 5;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clock').addEventListener('animationiteration', () => {
        minCounter += 1;
        
        if (minCounter > 0 && minCounter < 15) {
            document.getElementById('red').setAttribute("r", red += 0.5);
            console.log({red: red})
        } else if (minCounter >= 15 && minCounter <= 29) {
            document.getElementById('orange').setAttribute("r", orange += 0.5);
            console.log({orange: orange})
        } else if (minCounter >= 30 && minCounter <= 44) {
            document.getElementById('yellow').setAttribute("r", yellow += 0.5);
            console.log({yellow: yellow})
        } else if (minCounter >= 45 && minCounter < 60) {
            document.getElementById('pink').setAttribute("r", pink += 0.5);
            console.log({pink: pink})
        } else if (minCounter == 60) {
            minCounter = 0;
            hourCounter += 1;
            red = 5; orange = 5; yellow = 5; pink = 5;
            document.getElementById('red').setAttribute("r", red);
            document.getElementById('orange').setAttribute("r", orange);
            document.getElementById('yellow').setAttribute("r", yellow);
            document.getElementById('pink').setAttribute("r", pink);
        }
        const hourCounterTitle = hourCounter < 10 ? "0" + hourCounter: hourCounter
        const minCounterTitle = minCounter < 10 ? "0" + minCounter: minCounter
        document.title = "⏱ " + hourCounterTitle + " : " + minCounterTitle
        console.log(hourCounterTitle, minCounterTitle);
    });
});
