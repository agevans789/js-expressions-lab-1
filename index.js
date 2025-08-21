//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};

day1TempF = 32;
day2TempC = 25;
day3TempF = 70;
day4TempC = 18;
day5TempF = 80;
day6TempC = 15;
day7TempF = 72;
day8TempC = 28;
day9TempF = 68;
day10TempC = 20;
day11TempF = 75;
day12TempC = 23;
day13TempF = 82;
day14TempC = 30;
day15TempF = 65;
day16TempC = 22;
day17TempF = 77;
day18TempC = 26;
day19TempF = 78;
day20TempC = 24;
day21TempF = 73;
day22TempC = 21;
day23TempF = 79;
day24TempC = 27;
day25TempF = 71;
day26TempC = 19;
day27TempF = 74;
day28TempC = 17;
day29TempF = 77;
day30TempC = 29;

function celsiustoFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}

function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * 5/9;
}

celsiustoFahrenheit(day2TempC);
celsiustoFahrenheit(day4TempC);
celsiustoFahrenheit(day6TempC);
celsiustoFahrenheit(day8TempC);
celsiustoFahrenheit(day10TempC);
celsiustoFahrenheit(day12TempC);
celsiustoFahrenheit(day14TempC);
celsiustoFahrenheit(day16TempC);
celsiustoFahrenheit(day18TempC);
celsiustoFahrenheit(day20TempC);
celsiustoFahrenheit(day22TempC);
celsiustoFahrenheit(day24TempC);
celsiustoFahrenheit(day26TempC);
celsiustoFahrenheit(day28TempC);
celsiustoFahrenheit(day30TempC);

fahrenheitToCelsius(day1TempF);
fahrenheitToCelsius(day3TempF);
fahrenheitToCelsius(day5TempF);
fahrenheitToCelsius(day7TempF);
fahrenheitToCelsius(day9TempF);
fahrenheitToCelsius(day11TempF);
fahrenheitToCelsius(day13TempF);
fahrenheitToCelsius(day15TempF);
fahrenheitToCelsius(day17TempF);
fahrenheitToCelsius(day19TempF);
fahrenheitToCelsius(day21TempF);
fahrenheitToCelsius(day23TempF);
fahrenheitToCelsius(day25TempF);
fahrenheitToCelsius(day27TempF);
fahrenheitToCelsius(day29TempF);

const fahrenheitTemperatures = [
    day1TempF,
    celsiustoFahrenheit(day2TempC),
    day3TempF,
    celsiustoFahrenheit(day4TempC),
    day5TempF,
    celsiustoFahrenheit(day6TempC),
    day7TempF,
    celsiustoFahrenheit(day8TempC),
    day9TempF,
    celsiustoFahrenheit(day10TempC),
    day11TempF,
    celsiustoFahrenheit(day12TempC),
    day13TempF,
    celsiustoFahrenheit(day14TempC),
    day15TempF,
    celsiustoFahrenheit(day16TempC),
    day17TempF,
    celsiustoFahrenheit(day18TempC),
    day19TempF,
    celsiustoFahrenheit(day20TempC),
    day21TempF,
    celsiustoFahrenheit(day22TempC),
    day23TempF,
    celsiustoFahrenheit(day24TempC),
    day25TempF,
    celsiustoFahrenheit(day26TempC),
    day27TempF,
    celsiustoFahrenheit(day28TempC),
    day29TempF,
    celsiustoFahrenheit(day30TempC),
]

function getTotalTemperatureInFahrenheit() {
    let total = 0;
    for(let index = 0; index < fahrenheitTemperatures.length; index++) {
        total += fahrenheitTemperatures[index];
    }
    return total;
}

const celsiusTemperatures = [
    fahrenheitToCelsius(day1TempF),
    day2TempC,
    fahrenheitToCelsius(day3TempF),
    day4TempC,
    fahrenheitToCelsius(day5TempF),
    day6TempC,
    fahrenheitToCelsius(day7TempF),
    day8TempC,
    fahrenheitToCelsius(day9TempF),
    day10TempC,
    fahrenheitToCelsius(day11TempF),
    day12TempC,
    fahrenheitToCelsius(day13TempF),
    day14TempC,
    fahrenheitToCelsius(day15TempF),
    day16TempC,
    fahrenheitToCelsius(day17TempF),
    day18TempC,
    fahrenheitToCelsius(day19TempF),
    day20TempC,
    fahrenheitToCelsius(day21TempF),
    day22TempC,
    fahrenheitToCelsius(day23TempF),
    day24TempC,
    fahrenheitToCelsius(day25TempF),
    day26TempC,
    fahrenheitToCelsius(day27TempF),
    day28TempC,
    fahrenheitToCelsius(day29TempF),
    day30TempC,
]

function getTotalTemperatureInCelsius() {
    let total = 0;
    for(let index = 0; index < celsiusTemperatures.length; index++) {
        total += celsiusTemperatures[index];
    }
    return total;
}
const tot_temperature_in_fahrenheit = getTotalTemperatureInFahrenheit();
const tot_temperature_in_celsius = getTotalTemperatureInCelsius();

function getAverageTemperatureInFahrenheit() {
    return tot_temperature_in_fahrenheit / fahrenheitTemperatures.length;
}

function getAverageTemperatureInCelsius() {
    return tot_temperature_in_celsius / celsiusTemperatures.length;
}
const avg_temperature_in_fahrenheit = getAverageTemperatureInFahrenheit();
const avg_temperature_in_celsius = getAverageTemperatureInCelsius();

console.log(fahrenheitTemperatures);
console.log(celsiusTemperatures);

console.log(tot_temperature_in_fahrenheit);
console.log(tot_temperature_in_celsius);
console.log(avg_temperature_in_fahrenheit);
console.log(avg_temperature_in_celsius);
