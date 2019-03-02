# NRC Valence, Arousal, and Dominance (VAD) Lexicon

## Description
The NRC Valence, Arousal, and Dominance (VAD) Lexicon includes a list of more than 20,000 English words and
their valence, arousal, and dominance scores.

## Citation
[Obtaining Reliable Human Ratings of Valence, Arousal, and Dominance for 20,000 English Words](https://aclanthology.info/papers/P18-1017/p18-1017).
Saif M. Mohammad. In Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics, Melbourne, Australia, July 2018.

Homepage: [http://sentiment.nrc.ca/lexicons-for-research/](http://sentiment.nrc.ca/lexicons-for-research/)

This application makes use of the NRC VAD Lexicon, created by Saif M. Mohammad at the National Research Council Canada." [http://saifmohammad.com/WebPages/lexicons.html](http://saifmohammad.com/WebPages/lexicons.html)

## Build
```bash
npm run build:nrc-vad
```

The build file (`build.js`) reads the MPQA data source `NRC-VAD-Lexicon.txt`, transforms it to JSON, and outputs the file `NRC-VAD.json`.

## Data Structure
### `NRC-VAD-Lexicon.txt`
```
Word	Valence	Arousal	Dominance
aaaaaaah	0.479	0.606	0.291
aaaah	0.520	0.636	0.282
```

### `NRC-VAD.json`
```json
[
  {
    "Word": "aaaaaaah",
    "Valence": "0.479",
    "Arousal": "0.606",
    "Dominance": "0.291"
  },
  {
    "Word": "aaaah",
    "Valence": "0.520",
    "Arousal": "0.636",
    "Dominance": "0.282"
  }
]
```
