const fs = require('fs')
const path = require('path')
const lexiconName = path.basename(path.resolve(__dirname))

const jsonFile = path.resolve(__dirname, `${lexiconName}.json`)
const wordsFile = fs.readFileSync(path.resolve(__dirname, 'subjclueslen1-HLTEMNLP05.tff'), 'utf8')
const jsonObj = []

const word = (...args) => {
  args = args[0]
  let entry = {}
  if(args !== null) {
    for (i=0; i < args.length; i++) {
      entry[Object.keys(args[i])] = Object.values(args[i])
      entry[Object.keys(args[i])] = entry[Object.keys(args[i])][0]
    }
    jsonObj.push(entry)
  }
}

const words = wordsFile.match(/^.*/gm)
for (line in words) {
  let params = words[line].match(/\S+/g)
  for (param in params) {
    if(params[param] !== "m") {
      params[param] = params[param].replace(/=/g, "\":\"")
      params[param] = `{"${params[param]}"}`
      params[param] = JSON.parse(params[param])
    }
  }
  word(params)

}

fs.writeFile(jsonFile, JSON.stringify(jsonObj), function(err){
  if (err) return console.log(err)
})
