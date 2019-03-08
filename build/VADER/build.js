const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const lexiconName = path.basename(path.resolve(__dirname))

const csvFile = path.resolve(__dirname, 'vader_lexicon.txt')
const jsonFile = path.resolve(__dirname, `${lexiconName}.json`)

csv({
  noheader: true,
  delimiter: "	",
  headers:["token", "mean-sentiment-rating", "standard-deviation", "raw-human-sentiment-ratings"]
}).fromFile(csvFile)
  .then(jsonObj => {
    fs.writeFile(jsonFile, JSON.stringify(jsonObj, null, 2), function(err){
      if (err) throw err
    })
  })
