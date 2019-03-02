# VADER

## Description
VADER Sentiment Analysis. VADER (Valence Aware Dictionary and sEntiment Reasoner) is a lexicon and rule-based sentiment analysis tool that is specifically attuned to sentiments expressed in social media, and works well on texts from other domains.

## Citation

[VADER: A Parsimonious Rule-based Model for Sentiment Analysis of Social Media Text](http://comp.social.gatech.edu/papers/icwsm14.vader.hutto.pdf) (by C.J. Hutto and Eric Gilbert) Eighth International Conference on Weblogs and Social Media (ICWSM-14). Ann Arbor, MI, June 2014.


Homepage: [https://github.com/cjhutto/vaderSentiment](https://github.com/cjhutto/vaderSentiment)

## Build
```bash
npm run build:vader
```

The build file (`build.js`) reads the MPQA data source `vader_lexicon.txt`, transforms it to JSON, and outputs the file `VADER.json`.

## Data Structure
### `vader_lexicon.txt`
```
$:	-1.5	0.80623	[-1, -1, -1, -1, -3, -1, -3, -1, -2, -1]
%)	-0.4	1.0198	[-1, 0, -1, 0, 0, -2, -1, 2, -1, 0]
```

### `pattern.json`
The data source does not contain a header row so they are inferred from the source paper and added.
```json
[
  {
    "token": "$:",
    "mean-sentiment-rating": "-1.5",
    "standard-deviation": "0.80623",
    "raw-human-sentiment-ratings": "[-1, -1, -1, -1, -3, -1, -3, -1, -2, -1]"
  },
  {
    "token": "%)",
    "mean-sentiment-rating": "-0.4",
    "standard-deviation": "1.0198",
    "raw-human-sentiment-ratings": "[-1, 0, -1, 0, 0, -2, -1, 2, -1, 0]"
  }
]
```
