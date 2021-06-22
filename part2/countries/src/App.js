import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [newSearch, setNewSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [countryToShow, setCountryToShow] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => { setNewSearch(event.target.value) }
  const handleCountryToShow = (event) => { setCountryToShow(event.target.value) }

  const filteredCountries = countries.filter(countries => countries.name.toLowerCase().includes(newSearch.toLowerCase()))

  const countriesToShow = filteredCountries.length > 11
    ? <span>Too much results, please filter by search!</span>
    : 
    filteredCountries.map(countries => {
      return (
        <li key={countries.name}>
          {countries.name}
          <input key={countries.name} type="button" value={countries.name} onClick={handleCountryToShow}/>
          
            { countryToShow === countries.name // This same render is in two places and it should be tidied up
            ?
              <div>
                  <h2>{countries.name}</h2>
                  <ul>
                    <li key={countries.capital}>Capital: {countries.capital}</li>
                    <li key={countries.population}>Population: {countries.population}</li>
                  </ul>
                  <h3>Languages</h3>
                  <ul>
                    {countries.languages.map(languages => {
                        return(
                          <li key={languages.name}>{languages.name}</li>
                        )
                      })
                    }
                  </ul>
                  <img src={countries.flag} alt="flag" height="200px" />
                </div>
            : ''
              
            }

        </li>
      )
    })

  const countryDetails = filteredCountries.length === 1
    ? 
    filteredCountries.map(countries => {

      return (
        <div>
          <h2>{countries.name}</h2>
          <ul>
            <li key={countries.capital}>Capital: {countries.capital}</li>
            <li key={countries.population}>Population: {countries.population}</li>
          </ul>
          <h3>Languages</h3>
          <ul>
            {countries.languages.map(languages => {
                return(
                  <li key={languages.name}>{languages.name}</li>
                )
              })
            }
          </ul>
          <img src={countries.flag} alt="flag" height="200px" />
        </div>
      )
    })
    : countriesToShow

  return (
    <div className="App">
      <h1>Countries</h1>
      <form>
        <span>Search for country: </span>
        <input value={newSearch} onChange={handleSearchChange} />
      </form>

      {countryDetails}
      
    </div>
  )
}

export default App;
