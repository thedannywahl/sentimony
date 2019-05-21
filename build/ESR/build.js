const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const lexiconName = 'ESR'

const csvFile = path.resolve(__dirname, 'Emoji_Sentiment_Data_v1.0.csv')
const jsonFile = path.resolve(__dirname, `${lexiconName}.json`)

csv().fromFile(csvFile)
  .then(jsonObj => {
    fs.writeFile(jsonFile, JSON.stringify(jsonObj, null, 2), function (err) {
      if (err) throw err
    })
  })
