# Pattern

## Description
Web mining module for Python, with tools for scraping, natural language processing, machine learning, network analysis and visualization.

## Citation
Homepage: [https://www.clips.uantwerpen.be/pages/pattern](https://www.clips.uantwerpen.be/pages/pattern)

## Build
```bash
npm run build:pattern
```

The build file (`build.js`) reads the MPQA data source `en-sentiment.xml`, transforms it to JSON, and outputs the file `Pattern.json`.

## Data Structure
### `en-sentiment.xml`
```xml
<sentiment language="en" version="1.3" author="Tom De Smedt, Walter Daelemans" license="PDDL">
  <word form="13th" wordnet_id="a-02203763" pos="JJ" sense="coming next after the twelfth in position" polarity="0.0" subjectivity="0.0" intensity="1.0" confidence="0.9" />
  <word form="20th" cornetto_synset_id="n_a-531612" wordnet_id="a-02204716" pos="JJ" sense="coming next after the nineteenth in position" polarity="0.0" subjectivity="0.0" intensity="1.0" confidence="0.9" />
</sentiment>
```

### `pattern.json`
```json
[
  {
    "form": "13th",
    "wordnet_id": "a-02203763",
    "pos": "JJ",
    "sense": "TODO",
    "polarity": "0.0",
    "subjectivity": "0.0",
    "intensity": "1.0",
    "confidence": "0.9"
  },
  {
    "form": "20th",
    "cornetto_synset_id": "n_a-531612",
    "wordnet_id": "a-02204716",
    "pos": "JJ",
    "sense": "TODO",
    "polarity": "0.0",
    "subjectivity": "0.0",
    "intensity": "1.0",
    "confidence": "0.9"
  }
]
```
