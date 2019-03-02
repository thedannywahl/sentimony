# sentimony

## build
```bash
npm run build
```
The build script will iterate over each lexicon's `build.js` to generate a JSON file from the raw data. Then it will run `lexicon.js` to combine the JSON lexicons into a single lexicon.
The new lexicon will write two files: `lexicon-raw.json` and `lexicon.json`. `lexicon-raw.json` is not used by Sentimony, but is simply a portable collection of the individual lexicons and their data structures. `lexicon.json` is a transformed lexicon ready for use by sentimony.

## build:lexicon
```bash
npm run build:lexicon
```
`build:lexicon` functions much like `build` except it does not call the individual lexicon build scripts and starts by importing the individual JSON files to build the `lexicon` and `lexicon-raw` files.

## build:${name}
```bash
npm run build:${name}
```
Will call an individual lexicon's build script and generate a JSON file from the raw data source.  e.g. `npm run build:AFINN`.  These builds are called by the main build script (`npm run build`) but are also helpful utilities in case you just want a JSON version of a lexicon and don't plan on using sentimony.

## Data Structure
Each lexicon has its own data structure based on the raw data provided from the source.  For details see the `README` in each lexicon's build folder.
`lexicon.js` outputs two data files: `lexicon.json` and `lexicon-raw.json`. The `lexicon-raw` file is simply a collection of the JSON versions of each lexicon with its own data structure. `lexicon.json` is a transformed structure to provide a single lexicon with data from each source.

### lexicon-raw.json
```js
[
  AFINN: [
    {
      word: 'abandon',
      score: '-2'
    },
    ... 3381 more entries
  ],
  'AFINN-E': [
    {
      emoji: ':)',
      score: '2'
    },
    ... 95 more entries
  ],
  BINGLIU: [
    {
      'a+': positive
    },
    ... 6788 more entries
  ],
  ESR: [
    {
      Emoji: '😂',
      'Unicode codepoint': '0x1f602',
      Occurrences: '14622',
      Position: '0.805100583',
      Negative: '3614',
      Neutral: '4163',
      Positive: '6845',
      'Unicode name': 'FACE WITH TEARS OF JOY',
      'Unicode block': 'Emoticons'
    },
    ... 968 more entries
  ],
  MPQA: [
    {
      type: 'weaksubj',
      len: '1',
      word1: 'abandoned',
      pos1: 'adj',
      stemmed1: 'n',
      priorpolarity: 'negative'
     },
     ... 8222 more entries
  ],
  'NRC-AIL': [
    {
      "term": "outraged",
      "score": "0.964",
      "AffectDimension": "anger"
    },
    ... 5813 more entries
  ],
  'NRC-E': [
    {
      "word": "aback",
      "anger": "0",
      "anticipation": "0",
      "disgust" :"0"
      ,"fear": "0",
      "joy": "0",
      "negative": "0",
      "positive": "0",
      "sadness": "0",
      "surprise": "0",
       "trust": "0"
     },
    ... 14180 more entries
  ],
  'NRC-VAD': [
    {
      "Word": "aaaaaaah",
      "Valence": "0.479",
      "Arousal": "0.606",
      "Dominance": "0.291"
    },
    ... 20006 more entries
  ]
  SentiWordNet: [
    {
      POS: 'v',
      ID: '02772310',
      PosScore: '0.125',
      NegScore: '0',
      SynsetTerms: [ 'deflagrate#1' ],
      Gloss: 'cause to burn rapidly and with great intensity; "care must be exercised when this substance is to be deflagrated"'
    },
    ... 117658 more items
  ],
  TextBlob: [
    {
      form: '13th',
      wordnet_id: 'a-02203763',
      pos: 'JJ',
      sense: 'TODO',
      polarity: '0.0',
      subjectivity: '0.0',
      intensity: '1.0',
      confidence: '0.9'
    },
    ... 2917 more items
  ],
  VADER: [
    {
      token: '$:',
      'mean-sentiment-rating': '-1.5',
      'standard deviation': '0.80623',
      'raw-human-sentiment-ratings': '[-1, -1, -1, -1, -3, -1, -3, -1, -2, -1]'
    },
    ... 7516 more items
  ]
]
```
### lexicon.json
```js
[
  {
    abandon: {
      score: this.normalized.score,
      sentiment: this.normalized.sentiment,
      normalized: {
        sentiment: 'positive',
        isPositive: true,
        isNegative: false,
        isNeutral: false,
        score: ${normalizedScore},
        intensity: ${normalizedIntensity},
        emotion: {
          unicode: ${emotionUnicode},
          html: ${emotionHTML},
          alt: ${emotionAlt}
        },
      },
      AFINN: {
        score: '-2'
      },
      MQPA: {
        type: 'weaksubj',
        stemmed1: 'n',
        len: '1',
        priorpolarity: 'negative'
      },
      metadata: {
        word: 'abandon',
        language: 'en',
        foundIn: ['AFINN', 'MPQA'],
        certainty: ${calculatedCertainty},
        variants: ${wordVariants},
        synonyms: ${wordSynonyms},
        antonyms: ${wordAntonyms},
        definition: ${wordDefinition},
        'part-of-speech': ['verb'],
        hasMultipleEntries: false,
        scale: [-1, 1],
        calculationMethod: ${calculationFormula}
      }
    },
    ...
  }
]
```
