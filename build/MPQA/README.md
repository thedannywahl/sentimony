# MPQA Subjectivity Lexicon

## Description
A new approach to phrase-level sentiment analysis that first determines whether an expression is neutral or polar and then disambiguates the polarity of the polar expressions.

## Citation
Theresa Wilson, Janyce Wiebe and Paul Hoffmann (2005). [Recognizing Contextual
Polarity in Phrase-Level Sentiment Analysis](http://people.cs.pitt.edu/~wiebe/pubs/papers/emnlp05polarity.pdf). Proceedings of HLT/EMNLP 2005,
Vancouver, Canada.

Homepage: [http://mpqa.cs.pitt.edu/lexicons/subj_lexicon/](http://mpqa.cs.pitt.edu/lexicons/subj_lexicon/)

## Build
```bash
npm run build:mpqa
```

The build file (`build.js`) reads the MPQA data source `subjclueslen1-HLTEMNLP05.tff`, transforms it to JSON, and outputs the file `MPQA.json`.

## Data Structure
### `subjclueslen1-HLTEMNLP05.tff`
```
type=weaksubj len=1 word1=abandoned pos1=adj stemmed1=n priorpolarity=negative
type=weaksubj len=1 word1=abandonment pos1=noun stemmed1=n priorpolarity=negative
```

### `MPQA.json`
```json
[
  {
    "type": "weaksubj",
    "len": "1",
    "word1": "abandoned",
    "pos1": "adj",
    "stemmed1": "n",
    "priorpolarity": "negative"
  },
  {
    "type": "weaksubj",
    "len": "1",
    "word1": "abandonment",
    "pos1": "noun",
    "stemmed1": "n",
    "priorpolarity": "negative"
  }
]
```
