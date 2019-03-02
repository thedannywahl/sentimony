# NRC Emoticon Lexicon

## Description
The NRC Emotion Lexicon is a list of words and their associations with eight emotions (anger, fear, anticipation, trust, surprise, sadness, joy, and disgust) and two sentiments (negative and positive). The annotations were manually done through Amazon's Mechanical Turk.

## Citation
Saif Mohammad and Peter Turney. [Crowdsourcing a Word-Emotion Association Lexicon](https://arxiv.org/abs/1308.6297). Computational Intelligence, 29(3): 436-465, 2013. Wiley Blackwell Publishing Ltd.

Saif Mohammad and Peter Turney. [Emotions Evoked by Common Words and Phrases: Using Mechanical Turk to Create an Emotion Lexicon](https://dl.acm.org/citation.cfm?id=1860635). In Proceedings of the NAACL-HLT 2010 Workshop on Computational Approaches to Analysis and Generation of Emotion in Text, June 2010, LA, California.

Homepage: [http://sentiment.nrc.ca/lexicons-for-research/](http://sentiment.nrc.ca/lexicons-for-research/)

This application makes use of the NRC Emoticon Lexicon, created by Saif M. Mohammad and Peter D. Turney at the National Research Council Canada." [http://saifmohammad.com/WebPages/lexicons.html](http://saifmohammad.com/WebPages/lexicons.html)

## Build
```bash
npm run build:nrc-e
```

The build file (`build.js`) reads the MPQA data source `NRC-Emotion-Lexicon-Wordlevel-v0.92.txt`, transforms it to JSON, and outputs the file `NRC-E.json`.

## Data Structure
### `NRC-Emotion-Lexicon-Wordlevel-v0.92.txt`
```
aback	anger	0
aback	anticipation	0
aback	disgust	0
aback	fear	0
aback	joy	0
aback	negative	0
aback	positive	0
aback	sadness	0
aback	surprise	0
aback	trust	0
abacus	anger	0
abacus	anticipation	0
abacus	disgust	0
abacus	fear	0
abacus	joy	0
abacus	negative	0
abacus	positive	0
abacus	sadness	0
abacus	surprise	0
abacus	trust	1
```

### `NRC-E.json`
The NRC Emotion Lexicon data source does not contain headers, so the key `word` is added during the transform.
```json
[
  {
    "word": "aback",
    "anger": "0",
    "anticipation": "0",
    "disgust": "0",
    "fear": "0",
    "joy": "0",
    "negative": "0",
    "positive": "0",
    "sadness": "0",
    "surprise": "0",
    "trust": "0"
  },
  {
    "word": "abacus",
    "anger": "0",
    "anticipation": "0",
    "disgust": "0",
    "fear": "0",
    "joy": "0",
    "negative": "0",
    "positive": "0",
    "sadness": "0",
    "surprise": "0",
    "trust": "1"
  }
]
```
