document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const tempInput = Number(document.getElementById('tempInput').value);
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;
    const resultBox = document.getElementById('result');

    if (!tempInput) {
        resultBox.textContent = 'Please enter a temperature.';
        return;
    }

    const result = conversionType === 'Celsius' 
        ? (tempInput - 32) * (5 / 9) 
        : (tempInput * 9/5) + 32;

    resultBox.textContent = `${tempInput}°${conversionType === 'Celsius' ? 'F' : 'C'} is ${result.toFixed(2)}°${conversionType === 'Celsius' ? 'C' : 'F'}.`;
});

document.getElementById('themeSwitcher').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark');
    this.textContent = body.classList.contains('dark') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
