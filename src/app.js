import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'
import Card from './components/Card'
import _ from 'lodash'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      query: ''
    }
  }


  onQuery(nextQuery) {
    this.setState({query: nextQuery})
  }

  fetchCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(result => result.json())
      .then(resultJson => {
        this.setState({countries: resultJson})
      })
  }

  componentDidMount() {
    this.fetchCountries()
  }

  suggestedCountries() {
    const re = new RegExp(this.state.query, 'i')
    const filterCountries = _.filter(this.state.countries, country => {
      return re.test(country.name) && this.state.query.length > 0
    })
    const sortedCountries = _.orderBy(filterCountries)
    return sortedCountries
  }



  render() {
    const filteredCountries = this.state.countries.filter(country => {
      return (
        this.state.query.length > 0 &&
        country.name.toLowerCase().startsWith(this.state.query.toLowerCase())
      )
    })
    return (
      <section className="section">
        <div className="container has-text-centered">
          <img src="https://i.imgur.com/1vKwQtv.png" width="50px" title="placeholder" />
          <h1>Our Homes from around<br/>the world</h1>
          <div className="spacer"/>
          <div className="column">
            <div className="field">
              <input
                placeholder="search"
                className="input"
                value={this.state.query}
                onChange={event => this.onQuery(event.target.value)} />
            </div>
            {/* DISPLAY 3 AUTOCOMPLETE OPTIONS FROM API */}
            <div className="autocomplete">
              <div className="columns is-multiline">
                {filteredCountries.slice(0, 3).map(country =>
                  <div className="column is-one-third-tablet is-one-third-desktop" key={country.alpha2Code}>
                    <Card
                      name={country.name}
                    />
                  </div>
                )
                }
              </div>
            </div>
            {/* SUGGEST ALTERNATIVE 3 OPTIONS FROM API THAT HAVE CONSECUTIVE LETTERS IN STRING*/}
            <div className="suggestionbox">
              <h2>Alternative suggestions:</h2>
              <hr/>
              <div className="columns is-multiline">
                {this.suggestedCountries().slice(0, 3).map(country =>
                  <div className="column is-one-third is-one-third-desktop" key={country.alpha2Code}>
                    <Card
                      name={country.name}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
