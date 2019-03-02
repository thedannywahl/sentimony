# Emoji Sentiment Ranking

## Description
In this paper we present the Emoji Sentiment Ranking, the first emoji sentiment lexicon of 751 emojis. The lexicon was constructed from over 1.6 million tweets in 13 European languages, annotated for sentiment by human annotators. In the corpus, probably the largest set of manually annotated tweets, 4% of the tweets contained emojis. The sentiment of the emojis was computed from the sentiment of the tweets in which they occur, and reflects the actual use of emojis in a context.

## Citation
 Kralj Novak P, Smailović J, Sluban B, Mozetič I (2015) [Sentiment of Emojis](https://arxiv.org/abs/1509.07761). PLoS ONE 10(12): e0144296.

Homepage: [https://doi.org/10.1371/journal.pone.0144296](https://doi.org/10.1371/journal.pone.0144296)

## Build
```bash
npm run build:esr
```

The build file (`build.js`) reads the ESR data source `Emoji_Sentiment_Data_v1.0.csv`, transforms it to JSON, and outputs the file `ESR.json`.

## Data Structure
### `Emoji_Sentiment_Data_v1.0.csv`
```
Emoji,Unicode codepoint,Occurrences,Position,Negative,Neutral,Positive,Unicode name,Unicode block
😂,0x1f602,14622,0.805100583,3614,4163,6845,FACE WITH TEARS OF JOY,Emoticons
❤,0x2764,8050,0.746943086,355,1334,6361,HEAVY BLACK HEART,Dingbats

```

### `ESR.json`
```json
[
  {"Emoji": "😂",
    "Unicode codepoint": "0x1f602",
    "Occurrences": "14622",
    "Position": "0.805100583",
    "Negative": "3614",
    "Neutral": "4163",
    "Positive": "6845",
    "Unicode name": "FACE WITH TEARS OF JOY",
    "Unicode block": "Emoticons"
  },
  {
    "Emoji": "❤",
    "Unicode codepoint": "0x2764",
    "Occurrences": "8050",
    "Position": "0.746943086",
    "Negative": "355",
    "Neutral": "1334",
    "Positive": "6361",
    "Unicode name": "HEAVY BLACK HEART",
    "Unicode block": "Dingbats"
  }
]
```
