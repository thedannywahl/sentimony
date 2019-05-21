const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const lexiconName = path.basename(path.resolve(__dirname))

const inputFile = path.resolve(__dirname, 'NRC-Emotion-Lexicon-Wordlevel-v0.92.txt')
const jsonFile = path.resolve(__dirname, `${lexiconName}.json`)
const outputJson = []
const tmpJson = []

// eslint-disable-next-line no-tabs
csv({ noheader: true, delimiter: '	', headers: ['word', 'emotion', 'level'] })
  .fromFile(inputFile)
  .then(jsonObj => {
    for (var line in jsonObj) {
      let entry = {}
      entry.word = jsonObj[line]['word']
      entry[jsonObj[line]['emotion']] = jsonObj[line]['level']
      tmpJson.push(entry)
    }

    let hash = new Map()
    tmpJson.forEach(entry => {
      hash[entry.word] = Object.assign(hash[entry.word] || {}, entry)
    })

    let words = Object.keys(hash)
    for (var word in words) {
      outputJson.push(hash[words[word]])
    }

    fs.writeFile(jsonFile, JSON.stringify(outputJson, null, 2), function (err) {
      if (err) throw err
    })
  })
