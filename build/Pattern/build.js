const fs = require('fs')
const path = require('path')
const lexiconName = path.basename(path.resolve(__dirname))

const jsonFile = path.resolve(__dirname, `${lexiconName}.json`)
const xmlFile = fs.readFileSync(path.resolve(__dirname, 'en-sentiment.xml'), 'utf8')
const jsonObj = []

const word = (...args) => {
  args = args[0]
  let entry = {}
  for (i=0; i < args.length; i++) {
    entry[Object.keys(args[i])] = Object.values(args[i])
    entry[Object.keys(args[i])] = entry[Object.keys(args[i])][0]
  }
  jsonObj.push(entry)
}

const XMLWords = xmlFile.match(/^<word .*/gm)
for (line in XMLWords) {
  let params = XMLWords[line].match(/\S+=["']?(?:.(?!["']?\s+(?:\S+)=|[>"']))+.["']?/g)
  for (param in params) {

    //TODO: Parse invalid JSON chars in 'sense' attributes
    if(params[param].startsWith("sense")) params[param] = 'sense":"TODO"'
    params[param] = params[param].replace(/=/g, "\":").replace(/\'/g, '\"')
    params[param] = JSON.parse(`{"${params[param]}}`)
  }
  word(params)
}

fs.writeFile(jsonFile, JSON.stringify(jsonObj), function(err){
  if (err) return console.log(err)
})
