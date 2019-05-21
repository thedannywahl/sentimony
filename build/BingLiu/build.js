const fs = require('fs')
const path = require('path')
const lexiconName = path.basename(path.resolve(__dirname))

const jsonFile = path.resolve(__dirname, `${lexiconName}.json`)
const posWordsFile = fs.readFileSync(path.resolve(__dirname, 'opinion-lexicon-English_positive-words.txt'), 'utf8')
const negWordsFile = fs.readFileSync(path.resolve(__dirname, 'opinion-lexicon-English_negative-words.txt'), 'utf8')

const jsonObj = []

let posWords = posWordsFile.replace(/^;+.*/gm, '')
posWords = posWords.match(/^.*/gm)
for (var line in posWords) {
  if (posWords[line] !== '') {
    posWords[line] = `{"${posWords[line]}":"positive"}`
    posWords[line] = JSON.parse(posWords[line])
    jsonObj.push(posWords[line])
  }
}

let negWords = negWordsFile.replace(/^;+.*/gm, '')
negWords = negWords.match(/^.*/gm)
for (line in negWords) {
  if (negWords[line] !== '') {
    negWords[line] = `{"${negWords[line]}":"negative"}`
    negWords[line] = JSON.parse(negWords[line])
    jsonObj.push(negWords[line])
  }
}

fs.writeFile(jsonFile, JSON.stringify(jsonObj, null, 2), function (err) {
  if (err) return console.log(err)
})
