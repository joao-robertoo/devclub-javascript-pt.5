const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg',foundedOn: 2004}, 
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
];

const sub10Percent = (company) => {
    company.marketValue = company.marketValue - company.marketValue / 10

    return company
}

const filterCompanies = (company) => company.foundedOn > 1980

const calculateTotalMarketValue = (acc, company) => acc + company.marketValue

const marketValueOldCompanies = companies
.map(sub10Percent)
.filter(filterCompanies)
.reduce(calculateTotalMarketValue, 0)

console.log(marketValueOldCompanies)