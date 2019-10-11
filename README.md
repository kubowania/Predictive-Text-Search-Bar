# Lyvly-Challenge

Search bar and Bonus question

## Overview
Develop a predictive text mechanism similar to what you see on smartphone keyboards. Given an input sequence of characters, you should output the 3 most likely words the user is trying to type, including prefix matches. For example, with the input “di” you might suggest [“did”, “dinner”, “didn’t”]. It is fine to have fewer than 3 matches where others aren’t possible, e.g. “newe” might only return [“newer”, “newest”]

### Prior data

Assume you have a corpus of 100k email or text messages you can train on, and this is your only source of data, not an external dictionary of words. You may assume that everything is in your target language but may of course include legitimate abbreviations like “brb” or “omg”. You can find such corpuses available free online (also feel free to use other example ones - e.g. a corpus of irc/messenger chats or whatever is available).

### Bonus

Suggest near matches where the user has made a slight mistake, e.g. given “nebe” you might suggest [“never”], or “pelp” might return [“peep”, “people”]. Don’t worry about doing this if you have run over time.



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


## Interpretation

'corpus' - I was not familiar with this term before. However, from reading the brief, it sounded to me that I needed to use a form of 'data' that was not a standard list of words like from a dictionary, but something that recognized new inputs. I decided to use an open API for the challenge. One I thought would resonate with the company and potential expansion direction was https://restcountries.eu/.

Here is a quick skim read of my approach to the project:
* Find the right API for the job.
* Decided to build it all in one simple app.js file - frontend.
* Decide to use React for the job and state.
* First of all, I focused on getting all the countries showing up in my state.
* Write a filter function that filters country.name by what we type in the query search bar from the start. Make sure to convert all queries to lower case before filtering (this counts for this.state too).
* map the ‘filteredCountries’ onto my Card Component that I made and imported into app.js
* Make sure to keep the card responses to maximum 3 using slice.

Bonus
* Research 'fuzzy logic'
* Decide to take the approach that if any part of the written query matches the string, this would be considered a 'Suggested Country'. This means that if I type 'den', I would get back 'sweDEN' or 'DENmark', rather than just 'DENmark'. I am aware this is probably not exactly what you are after but it was fun to try.
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


## Visuals

It was important for me to get the brand essence of Lyvly. To do so I inspected the website and chose the exact HEX  and RGB colour codes and fonts to create my app.

Thank you

## Start App

To start my app please:
* Download the project
* Type 'npm i' in terminal to download the necessary packages
* Type 'npm run serve' to start the project on localhost:8000




.
# Update and improvements

First submission: Tuesday October 8th 12.32PM
Second submission: Friday October 11th 13.00PM

## Feedback

1. Despite eslint, there seems to be some inconsistent spacing/newlines (for example the class methods in your main App).
2. Remove any commented out code and console logs.
3. We'd love to see a more robust suggestion algorithm. There are numerous data structures that you could potentially use that are suited to autocomplete/autosuggestions.- ***try looking into Prefix Tries***
Some are more popular than others - if you can't find any reasonable solutions to attempt, let us know and we can point you in the right direction.
4. A few unit tests.

## Approach

To improve my challenge I started off by tidying my code even further, paying attention to the spacing the the main App, as well as removing console.logs and comments that were intended for myself. I left any that would aid in reading the code.

I was very intrigued about the Prefix Tries. As I do not have any background in Computer Science this concept was new to me. I took a day to research this. I now understand why it is used for very large data structures, as it can reduce search time by up to half. It does so my discarding arrays quickly, especially in a binary search. I decided to do a binary search for my challenge. I did so by writing code that considers a value to have a 'left' and a 'right' side. In terms of numbers, anything smaller than a 5 for example, is considered to go left, and anything larger than a 5 is considered to go right (Taking inspiration from the Trie diagram).

### Quick skim of approach:

* Research Prefix Tries
* Reproduce my challenge in a seperate file called test.js
* Use a test array, a mixed up array of Country names, based off the API i was using previously. This was done to avoid making api requests for the time being and ficus on solving the problem.
* Manage to use prefix trie logic to arrange array in alphabetical order. - done
* Managed to search array for an exact matched word. If the word is in the array, the console.log will print 'true'.- done
* Try to get array to filter down as we KeyUp each letter of the chosen search term.
* Try to limit array to maximum 3 closest matches - ie the first three as we are filtering alphabetically now.

### Test my solution

To test my solution, open up the project in the terminal. Go into the src folder. Type 'node test.js'.  This will give you the console.log outputs in the terminal.



## Outcome

I did not get as close to solving the problem as I originally intended to. This meant I was not fully able to get an array of 3 counties closest matched to the search Term alphabetically. This also meant I was not able to unit test.

I enjoyed the past few days trying to solve this. It was definitely challenging as we did not cover such heavy data handling on the 3 month General Assembly Software Engineering course. This approach to the challenge was a bit more computer science heavy than I have been exposed to. I am keen to learn more about it.
