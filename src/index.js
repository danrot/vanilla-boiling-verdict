const $temperature = document.getElementById('temperature');
const $boilingVerdict = document.getElementById('boiling-verdict');

function updateBoilingVerdict() {
    if ($temperature.value >= 100) {
        $boilingVerdict.innerText = 'The water would boil!';
    } else {
        $boilingVerdict.innerText = 'The water would not boil.';
    }
}

$temperature.addEventListener('input', function(event) {
    updateBoilingVerdict();
});
