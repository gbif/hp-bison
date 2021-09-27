var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "and",
    "predicates": [
   		{
        "type": "in",
        "key": "country",
        "values": ["US", "UM", "AS", "FM", "GU", "MH", "MP", "PR", "PW", "VI"]
      },
      {
        "type": "equals",
        "key": "notIssues",
        "value": "COUNTRY_COORDINATE_MISMATCH"
      }
    ]
  },
  highlightedFilters: ['taxonKey','occurrenceStatus', 'gadmGid', 'year', 'datasetName', 'occurrenceIssue', 'datasetKey']
};
