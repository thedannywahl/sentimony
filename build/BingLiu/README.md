# Bing Liu

## Description
This work is in the area of sentiment analysis and opinion mining from social media, e.g., reviews, forum discussions, and blogs.

## Citation
Minqing Hu and Bing Liu. ["Mining and Summarizing Customer Reviews"](http://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html)
Proceedings of the ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD-2004), Aug 22-25, 2004, Seattle, Washington, USA

Homepage: [https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html](https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html)

## Build
```bash
npm run build:bingliu
```

The build file (`build.js`) reads the Bing Liu data sources (`opinion-lexicon-English_negative-words.txt`, `opinion-lexicon-positive-words.txt`), transforms them to JSON, and outputs the file `BingLiu.json`.

## Data Structure
### `opinion-lexicon-English_(negative|positive)-words.txt`
```
# positive-words.txt
a+
abound

# negative-words.txt
2-faced
2-faces
```

### `BingLiu.json`
The Bing Liu data file does not contain a header row or values, so each word is created with a value of "positive" or "negative".

```json
[
  { "a+": "positive" },
  { "abound": "positive" },
  { "2-faced": "negative" },
  { "2-faces": "negative" }
]
```
