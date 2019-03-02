# AFINN-165

## Description
AFINN is a list of English words rated for valence with an integer between minus five (negative) and plus five (positive).

## Citation
Finn Årup Nielsen, ["A new ANEW: evaluation of a word list for sentiment analysis in microblogs"](http://ceur-ws.org/Vol-718/paper_16.pdf), Proceedings of the ESWC2011 Workshop on 'Making Sense of Microposts': Big things come in small packages. Volume 718 in CEUR Workshop Proceedings: 93-98. 2011 May. Matthew Rowe, Milan Stankovic, Aba-Sah Dadzie, Mariann Hardey (editors)

Homepage: [https://github.com/fnielsen/afinn](https://github.com/fnielsen/afinn)

## Build
```bash
npm run build:afinn
```

The build file (`build.js`) reads the AFINN data source (`AFINN-en-165.txt`), transforms it to JSON, and outputs the file `AFINN.json`.

## Data Structure
### `AFINN-en-165.txt`
```
abandon	-2
abandoned -2
```

### `AFINN.json`
The AFINN data file does not contain a header row, so header values of `word` and `score` have been presumed.

```json
[
  {
    "word": "abandon",
    "score": "-2"
  },
  {
    "word": "abandoned",
    "score":"-2"
  }
]
```
