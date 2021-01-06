const $temperature = document.getElementById('temperature');
const $unit = document.getElementById('unit');
const $boilingVerdict = document.getElementById('boiling-verdict');

function convertCelsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

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
    // This only works because there are only two states
    // If more units would be available, then the previously selected unit would have to be stored additionally
    if ($unit.value === 'c') {
        $temperature.value = convertFahrenheitToCelsius($temperature.value);
    } else {
        $temperature.value = convertCelsiusToFahrenheit($temperature.value);
    }
});
