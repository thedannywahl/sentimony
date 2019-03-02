const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const lexiconName = path.basename(path.resolve(__dirname))

const inputFile = path.resolve(__dirname, "NRC-VAD-Lexicon.txt")
const jsonFile = path.resolve(__dirname, `${lexiconName}.json`)

csv({delimiter: "	"}).fromFile(inputFile)
  .then(jsonObj => {
    fs.writeFile(jsonFile, JSON.stringify(jsonObj), function(err){
      if (err) throw err
    })
  })
