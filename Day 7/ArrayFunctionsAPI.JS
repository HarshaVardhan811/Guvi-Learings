// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// a. Get all the countries from Asia continent /region using Filter function


fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const asiaCountries = data.filter(country => {
            return country.region === 'Asia';
        });

        console.log('Countries in Asia:', asiaCountries);
    })


//   b.Get all the countries with a population of less than 2 lakhs using Filter function

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const countriesWithPopulationLessThan2Lakhs = data.filter(country => {
            return country.population && country.population < 200000;
        });

        console.log('Countries with population less than 2 lakhs:', countriesWithPopulationLessThan2Lakhs);

        //  c. Print the following details name, capital, flag, using forEach function

        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {

                data.forEach(country => {

                    const name = country.name.common;
                    const capital = country.capital ? country.capital[0] : 'N/A';
                    const flag = country.flags ? country.flags.svg : 'N/A';


                    console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
                });
            })


        //   d.Print the total population of countries using reduce function


        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {

                const totalPopulation = data.reduce((acc, country) => {

                    return acc + (country.population ? country.population : 0);
                }, 0);

                console.log('Total Population:', totalPopulation);
            })

        //   e.Print the country that uses US dollars as currency.


        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {

                const countriesUsingUSD = data.filter(country => {
                    return country.currencies && country.currencies.hasOwnProperty('USD');
                });

                console.log('Countries using US dollars:', countriesUsingUSD);
            })