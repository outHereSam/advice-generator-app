let generateAdviceButton = document.getElementById('dice');

const generateAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');

    const jsonResponse = await response.json();

    let adviceId = document.getElementById('slip-id');

    adviceId.innerText = jsonResponse.slip.id;

    let advice = document.getElementById('advice');

    advice.innerText = `"${jsonResponse.slip.advice}"`;
};


generateAdvice();

generateAdviceButton.addEventListener('click', () => {
    generateAdvice();
});