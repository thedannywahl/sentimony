const fs = require('fs');
const path = require('path')
const lexiconName = "lexicon"
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
const formattedJsonFile = path.resolve(__dirname, `${lexiconName}.json`)
const rawJsonFile = path.resolve(__dirname, `${lexiconName}-raw.json`)

const lexicons = dirs(path.resolve(__dirname))
const rawLexicon = {}
let lexicon = {}

console.log(`Raw lexicon contains ${lexicons.length} lexicons:`)
for (var val of lexicons) {
  rawLexicon[val] = require(path.resolve(`./build/${val}`, `${val}`))
  console.log(`  ${val}:\t${Object.keys(rawLexicon[val]).length} entries`)
}
console.log(`==> ${formattedJsonFile}`)

fs.writeFile(rawJsonFile, JSON.stringify(rawLexicon), function(err){
  if (err) return console.log(err)
})
