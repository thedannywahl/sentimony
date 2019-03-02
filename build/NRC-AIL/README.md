# NRC Affect Intensity Lexicon

## Description
The NRC Affect Intensity Lexicon is a list of English words and their associations with four basic emotions (anger, fear, sadness, joy).

## Citation
[Word Affect Intensities](https://arxiv.org/abs/1704.08798). Saif M. Mohammad. In Proceedings of the 11th edition of the Language Resources and Evaluation Conference, May 2018, Miyazaki, Japan.

Homepage: [http://sentiment.nrc.ca/lexicons-for-research/](http://sentiment.nrc.ca/lexicons-for-research/)

This application makes use of the NRC AIL, created by Saif M. Mohammad at the National Research Council Canada." [http://saifmohammad.com/WebPages/lexicons.html](http://saifmohammad.com/WebPages/lexicons.html)

## Build
```bash
npm run build:nrc-ail
```

The build file (`build.js`) reads the MPQA data source `NRC-AffectIntensity-Lexicon.txt`, transforms it to JSON, and outputs the file `MPQA.json`.

## Data Structure
### `NRC-AffectIntensity-Lexicon.txt`
```
term	score	AffectDimension
outraged	0.964	anger
brutality	0.959	anger
```

### `NRC-AIL.json`
```json
[
  {
    "term": "outraged",
    "score": "0.964",
    "AffectDimension": "anger"
  },
  {
    "term": "brutality",
    "score": "0.959",
    "AffectDimension": "anger"
  }
]
```
