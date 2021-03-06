const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const lexiconName = path.basename(path.resolve(__dirname))

const inputFile = path.resolve(__dirname, 'NRC-VAD-Lexicon.txt')
const jsonFile = path.resolve(__dirname, `${lexiconName}.json`)

// eslint-disable-next-line no-tabs
csv({ delimiter: '	' }).fromFile(inputFile)
  .then(jsonObj => {
    fs.writeFile(jsonFile, JSON.stringify(jsonObj, null, 2), function (err) {
      if (err) throw err
    })
  })
