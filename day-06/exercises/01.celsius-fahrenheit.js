/*
    # 1. Write a Function to Convert Celsius to Fahrenheit
    Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
    Formula: (Celsius * 9/5) + 32 = Fahrenheit

    Test with known anchors, not just one input. 
    0 → 32 (freezing point),
    100 → 212 (boiling point),
    37 → 98.6 (body temperature),
    -40 → -40 — the one point where both scales agree. 
    A gorgeous test case; if your function nails -40, your formula is almost certainly right.
*/


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const celsius = 0;
console.log(`${celsius}°C is equal to ${celsiusToFahrenheit(celsius)}°F.`);