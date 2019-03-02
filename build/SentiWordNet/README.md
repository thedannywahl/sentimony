# SentiWordNet

## Description
SentiWordNet is a lexical resource for opinion mining. SentiWordNet assigns to each synset of WordNet three sentiment scores: positivity, negativity, objectivity.

## Citation
Andrea Esuli and Fabrizio Sebastiani. (2006). [SentiWordNet: A Publicly Available Lexical Resource for Opinion Mining](http://nmis.isti.cnr.it/sebastiani/Publications/LREC06.pdf). In Proceedings of the 5th Conference on Language Resources and Evaluation (LREC’06)

Baccianella, Stefano & Esuli, Andrea & Sebastiani, Fabrizio. (2010). [SentiWordNet 3.0: An Enhanced Lexical Resource for Sentiment Analysis and Opinion Mining](http://nmis.isti.cnr.it/sebastiani/Publications/LREC10.pdf). Proceedings of LREC. 10.

Homepage: [https://sentiwordnet.isti.cnr.it/](https://sentiwordnet.isti.cnr.it/)

## Build
```bash
npm run build:sentiwordnet
```

The build file (`build.js`) reads the MPQA data source `home_swn_www_admin_dump_SentiWordNet_3.0.0_20130122.txt`, transforms it to JSON, and outputs the file `SentiWordNet.json`.

## Data Structure
### `home_swn_www_admin_dump_SentiWordNet_3.0.0_20130122.txt`
```
POS	ID	PosScore	NegScore	SynsetTerms	Gloss
a	00003131	0	0	adductive#1 adducting#1 adducent#1	especially of muscles; bringing together or drawing toward the midline of the body or toward an adjacent part
a	00003356	0	0	nascent#1	being born or beginning; "the nascent chicks"; "a nascent insurgency"
```

### `SentiWordNet.json`
```json
[
  {
    "POS": "a",
    "ID": "00003131",
    "PosScore": "0",
    "NegScore": "0",
    "SynsetTerms": ["adductive#1","adducting#1","adducent#1"],
    "Gloss": "  "
  },
  {
    "POS": "a",
    "ID": "00003356",
    "PosScore": "0",
    "NegScore": "0",
    "SynsetTerms": ["nascent#1"],
    "Gloss": "being born or beginning; \"the nascent chicks\"; \"a nascent insurgency\""
  }
]
```
