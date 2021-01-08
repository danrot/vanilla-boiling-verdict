const $temperature = document.getElementById('temperature');
const $unit = document.getElementById('unit');
const $preset = document.getElementById('preset');
const $boilingVerdict = document.getElementById('boiling-verdict');

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function updateBoilingVerdict() {
    const temperature = $unit.value === 'c' ? $temperature.value : convertFahrenheitToCelsius($temperature.value);

    if (temperature >= 100) {
        $boilingVerdict.innerText = 'The water would boil!';
    } else {
        $boilingVerdict.innerText = 'The water would not boil.';
    }
}

$temperature.addEventListener('input', function() {
    updateBoilingVerdict();
});

$unit.addEventListener('input', function() {
    updateBoilingVerdict();
});

$preset.addEventListener('click', function() {
    $temperature.value = 37;
    $unit.value = 'c';

    updateBoilingVerdict();
});
