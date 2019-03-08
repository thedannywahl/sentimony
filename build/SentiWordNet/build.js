const fs = require('fs');
const path = require('path');
const lexiconName = path.basename(path.resolve(__dirname))

const jsonFile = path.resolve(__dirname, `${lexiconName}.json`)
const wordsFile = fs.readFileSync(path.resolve(__dirname, 'home_swn_www_admin_dump_SentiWordNet_3.0.0_20130122.txt'), 'utf8')
const jsonObj = []

let words = wordsFile.replace(/^#.+/gm, '')
words = words.match(/^.*/gm)
for (line in words) {
  let entry = {}
  if((words[line] !== '') && (words[line] !== '#')) {
    let terms = []
    terms = words[line].match(/(\w+|\S+)#\d+/g)
    words[line] = words[line].replace(/\w+#\d/g, '')
    let components = words[line].match(/[^\t]+/g)
    entry.POS = components[0]
    entry.ID = components[1]
    entry.PosScore = components[2]
    entry.NegScore = components[3]
    entry.SynsetTerms = terms
    entry.Gloss = components[4]
    jsonObj.push(entry)
  }
}
jsonObj.pop()

fs.writeFile(jsonFile, JSON.stringify(jsonObj, null, 2), function(err){
  if (err) return console.log(err)
})
