var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch",
      "path": "data"
    },
    {
      "id": "literatureSearch",
      "path": "literature"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "and",
      "predicates": [
        {
          "type": "in",
          "key": "country",
          "values": [
            "US",
            "UM",
            "AS",
            "FM",
            "GU",
            "MH",
            "MP",
            "PR",
            "PW",
            "VI"
          ]
        },
        {
          "type": "equals",
          "key": "notIssues",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        }
      ]
    },
    "highlightedFilters": [
      "taxonKey",
      "occurrenceStatus",
      "gadmGid",
      "year",
      "datasetName",
      "issue",
      "datasetKey"
    ]
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "countriesOfResearcher",
          "values": [
            "US",
            "UM",
            "AS",
            "FM",
            "GU",
            "MH",
            "MP",
            "PR",
            "PW",
            "VI"
          ]
        },
        {
          "type": "in",
          "key": "countriesOfCoverage",
          "values": [
            "US",
            "UM",
            "AS",
            "FM",
            "GU",
            "MH",
            "MP",
            "PR",
            "PW",
            "VI"
          ]
        }
      ]
    },
    "highlightedFilters": [
      "q",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year"
    ]
  }
};
