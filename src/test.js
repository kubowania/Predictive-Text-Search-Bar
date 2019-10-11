class Node {
  constructor(value) {
    this.value = value
    this.counter = 1
    this.left = null
    this.right = null
  }
  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new Node(value)
      } else {
        this.left.insert(value)
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = new Node(value)
      } else {
        this.right.insert(value)
      }
    } else {
      this.counter += 1
    }
  }

  print() {
    //base case

    if (this.left !== null) {
      this.left.print()
    }
    console.log(this.value)
    if (this.right !== null) {
      this.right.print()
    }
  }

  search(query) {
    if (this.value === query) {
      return true
    } else if (query < this.value && this.left !== null) {
      return this.left.search(query)
    } else if (query > this.value && this.right !== null) {
      return this.right.search(query)
    } else {
      return false
    }
  }
}


// 1. Sort words by Alphabetical order using Prefix Tree and search to see if word is in the array

let tree = null
const array = ['Nigeria','Gibraltar','Afghanistan','Cameroon','New Caledonia','Albania','Algeria','Andorra','Belarus','Cambodia','Angola','Anguilla','Cruise Ship','Antigua &amp; Barbuda','Argentina','Armenia','Aruba','Belgium','Australia','Austria','Azerbaijan','Colombia','Bahamas','Bahrain','Bangladesh','Barbados','Italy','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia &amp; Herzegovina','Botswana','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Germany','Canada','Cape Verde','Cayman Islands','Chad','Chile','China','Congo','Cook Islands','Costa Rica','Cote D Ivoire','Yemen','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Polynesia','French West Indies','Gabon','Georgia','Ghana','Greece','Greenland','Zambia','Grenada','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyz Republic','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Tunisia','Malawi','Malaysia','Maldives','Mali','Gambia','Malta','Mauritania','Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Namibia','Nepal','Netherlands','Netherlands Antilles','New Zealand','Nicaragua','Niger','Vietnam','Norway','Oman','Pakistan','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre &amp; Miquelon','Samoa','San Marino','Satellite','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','South Africa','South Korea','Spain','Sri Lanka','St Kitts &amp; Nevis','St Lucia','St Vincent','St. Lucia','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor L\'Este','Togo','Tonga','Trinidad &amp; Tobago','Turkey','Turkmenistan','Turks &amp; Caicos','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Minor Outlying Islands','Uruguay','Uzbekistan','Venezuela','Virgin Islands (US)','Brazil','Zimbabwe']
for (let word of array) {
  if (tree === null) {
    tree = new Node(word)
  } else {
    tree.insert(word)
  }
}
tree.print()


// 2. Search for specifc word in the array as an exact match
console.log(tree.search('Uruguay'))


// 3. Get array to filter down as we KeyUp each letter of the chosen search term.

// 4. Limit array to maximum 3 closest matches - ie the first three as we are filtering alphabetically now.

// How to test: use terminal and go into the src file. type node test.js to run the file and check console.log outputs
