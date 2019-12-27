# Simple Predictive Text Search from open API

To run my app, please scroll to the bottom of this article.

## Overview
Develop a predictive text mechanism similar to what you see on smartphone keyboards. Given an input sequence of characters, you should output the 3 most likely words the user is trying to type, including prefix matches. For example, with the input “di” you might suggest [“did”, “dinner”, “didn’t”]. It is fine to have fewer than 3 matches where others aren’t possible, e.g. “newe” might only return [“newer”, “newest”]

### Prior data

We are using an open API for the challenge. You can find it here: https://restcountries.eu/.


## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* SCSS
* Git
* GitHub
* React
* Webpack
* Bulma
* Node JS
* Babel


## Method Run

Here is a quick skim read of my approach to the project:
* Find the right API for the job.
* Decided to build it all in one simple app.js file - frontend.
* Decide to use React for the job and state.
* First of all, I focused on getting all the countries showing up in my state.
* Write a filter function that filters country.name by what we type in the query search bar from the start. Make sure to convert all queries to lower case before filtering (this counts for this.state too).
* map the ‘filteredCountries’ onto my Card Component that I made and imported into app.js
* Make sure to keep the card responses to maximum 3 using slice.

Bonus
* Decide to take the approach that if any part of the written query matches the string, this would be considered a 'Suggested Country'. This means that if I type 'den', I would get back 'sweDEN' or 'DENmark', rather than just 'DENmark'.
* Put this under the title 'Alternative suggestions:'

## Wins and Blockers

### Blockers
Not so much a blocker as much as my personal blocker. For the sake of design, I tried to make sure the 'Suggested Countries' only showed up after there was no more 'filtered Countries' to show. I would do this by making sure that if the ‘filteredCountries’ length was === 0, and the query's length was bigger than 0, We would populate the 'Suggested Countries'
I wrote this in a function like this:

```javascript
    suggestedCountries(filteredCountries) {
      const re = new RegExp(this.state.query, 'i')
      const filterCountries = _.filter(this.state.countries, country => {
        return re.test(country.name) && filteredCountries.length === 0 && this.state.query.length > 0
      })
      const sortedCountries = _.orderBy(filterCountries)
      return sortedCountries
    }
```

However, I was having trouble passing the ‘filteredCountries’ into the function as it was out of scope, even if I used 'let' instead of const.
I would love to have a play around with this some more to figure it out.

As it is, the suggested Countries populate after the second keystroke, alongside the 'autocomplete' options.


## Visuals and Featured Code


### Featured piece of code no.1


![Imgur](https://i.imgur.com/UZITMP9.png?1)
This is the filter function for getting country.name's that start with the typed query.

```javascript
    let filteredCountries = this.state.countries.filter(country => {
      return (
        this.state.query.length > 0 &&
        country.name.toLowerCase().startsWith(this.state.query.toLowerCase())
      )
    })
```

### Featured piece of code no.2


![Imgur](https://i.imgur.com/IloFumg.png?1)
As you can see, the search is not case sensitive.

This is the bonus question. This peice of code allows us to suggest alternative countries, which closely match that of the search query. If any part of the written query matches the string, this would be considered a 'Suggested Country'. This means that if I type 'den', I would get back 'sweDEN' or 'DENmark', rather than just 'DENmark'.

```javascript
      suggestedCountries() {
        const re = new RegExp(this.state.query, 'i')
        const filterCountries = _.filter(this.state.countries, country => {
          return re.test(country.name) && this.state.query.length > 0
        })
        const sortedCountries = _.orderBy(filterCountries)
        return sortedCountries
      }
```


## Start App

To start my app please:
* Download the project
* Type 'npm i' in terminal to download the necessary packages
* Type 'npm run serve' to start the project on localhost:8000


