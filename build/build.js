const fs = require('fs');
const path = require('path')
const lexiconName = "lexicon"
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
const formattedJsonFile = path.resolve(__dirname, `${lexiconName}.json`)
const minifiedJsonFile = path.resolve(__dirname, `${lexiconName}.min.json`)
const rawJsonFile = path.resolve(__dirname, `${lexiconName}-raw.json`)

const lexicons = dirs(path.resolve(__dirname))
const rawLexicon = {}
let formattedLexicon = {
  __metadata: {
    scale: [-1, 1],
    calculationMethods: {
      normalized: () => {},
      AFINN: () => {},
      AFINN_E: () => {},
      BingLiu: () => {},
      ESR: () => {},
      MPQA: () => {},
      NRC_AIL: () => {},
      NRC_E: () => {},
      NRC_VAD: () => {},
      Pattern: () => {},
      SentiWordNet: () => {},
      VADER: () => {}
    }
  }
}

console.log(`Raw lexicon contains ${lexicons.length} lexicons:`)
for (var val of lexicons) {
  rawLexicon[val] = require(path.resolve(`./build/${val}`, `${val}`))
  console.log(`  ${val}:\t${Object.keys(rawLexicon[val]).length} entries`)
}
console.log(`==> ${rawJsonFile}`)
console.log("")

fs.writeFile(rawJsonFile, JSON.stringify(rawLexicon), function(err){
  if (err) return console.log(err)
})

function Word(entry, lexicon, rawObj = {}) {
  this.normalized = {
    sentiment: '',
    isPositive: null,
    isNegative: null,
    isNeutral: null,
    score: 0,
    intensity: () => {},
    emotion: {
      rawEmotion: '',
      unicode: '',
      html: '',
      alt: '',
    },
  }

  this.metadata = {
    entry: entry,
    language: 'en',
    foundIn: [],
    certainty: () => {},
    variants: [],
    synonyms: [],
    antonyms: [],
    definition: '',
    part_of_speech: [],
    hasMultipleEntries: null
  }

  this.entry = this.metadata.entry
  this.score = this.normalized.score
  this.sentiment = this.normalized.sentiment

  this.metadata.foundIn.push(lexicon)
  this.metadata[lexicon] = rawObj
}

mergeWord = (entryValue, entry, lexicon) => {
  if(!formattedLexicon.hasOwnProperty(entryValue)) {
    formattedLexicon[entryValue] = new Word(entryValue, lexicon, entry)
  } else {
    formattedLexicon[entryValue].metadata.foundIn.push(lexicon)
    formattedLexicon[entryValue].metadata[lexicon] = entry
  }
}

for(lexicon in rawLexicon) {
  console.log(`Merging ${lexicon} into Normalized Lexicon...`)
  for(entry in rawLexicon[lexicon]) {
    switch(lexicon) {
      case "AFINN":
        mergeWord(rawLexicon[lexicon][entry].word, rawLexicon[lexicon][entry], lexicon);
        break;
      case "AFINN-E":
        mergeWord(rawLexicon[lexicon][entry].emoji, rawLexicon[lexicon][entry], lexicon);
        break;
      case "BingLiu":
        mergeWord(
          Object.keys(rawLexicon[lexicon][entry]).toString(),
          rawLexicon[lexicon][entry],
          lexicon
        );
        break;
      case "ESR":
        mergeWord(rawLexicon[lexicon][entry].Emoji, rawLexicon[lexicon][entry], lexicon);
        break;
      case "MPQA":
        mergeWord(rawLexicon[lexicon][entry].word1, rawLexicon[lexicon][entry], lexicon);
        break;
      case "NRC-AIL":
        mergeWord(rawLexicon[lexicon][entry].term, rawLexicon[lexicon][entry], lexicon);
        break;
      case "NRC-E":
      if(rawLexicon[lexicon][entry] === null) break
        mergeWord(rawLexicon[lexicon][entry].word, rawLexicon[lexicon][entry], lexicon);
        break;
      case "NRC-VAD":
        mergeWord(rawLexicon[lexicon][entry].Word, rawLexicon[lexicon][entry], lexicon);
        break;
      case "Pattern":
        mergeWord(rawLexicon[lexicon][entry].form, rawLexicon[lexicon][entry], lexicon);
        break;
      case "SentiWordNet":
        mergeWord(
          rawLexicon[lexicon][entry].SynsetTerms[0].split("#")[0],
          rawLexicon[lexicon][entry],
          lexicon
        );
        break;
      case "VADER":
        mergeWord(rawLexicon[lexicon][entry].token, rawLexicon[lexicon][entry], lexicon);
        break;
      default: return null
    }
  }
}

console.log("")
console.log(`Normalized lexicon contains ${Object.keys(formattedLexicon).length - 1} entries`)
console.log(`==> ${formattedJsonFile}`)
console.log(`==> ${minifiedJsonFile}`)

console.log("")

fs.writeFile(formattedJsonFile, JSON.stringify(formattedLexicon, null, 2), function(err){
  if (err) return console.log(err)
})
fs.writeFile(minifiedJsonFile, JSON.stringify(formattedLexicon), function(err){
  if (err) return console.log(err)
})
