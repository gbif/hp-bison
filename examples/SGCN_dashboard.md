---
layout: compose
title: Example SGCN dashboard page
description: An example of what a custom dashboard can look like for a GBIF occurrence dataset. Checklist datasets need work for SGCN, especially since they don't show IUCN status.
background: /assets/img/Haeckel_Siphoneae.jpg
imageLicense: Kunstformen der Natur (1904) by Ernst Haeckel via [Wikimedia](https://commons.wikimedia.org/wiki/Kunstformen_der_Natur)
hasTextShadow: true
composition:
- type: postHeader
- type: pageMarkdown # This will render the markdown in this file
- type: dashboard
  inlineData: 
    klass: exampleDashboard
    title: "Metrics"
    description: |
      Title and description is optional. On this dashboard we show metrics for the filter `datasetKey: 887ae40c-f895-45a9-8ce6-eba6f12c5371`, the 'Fishes of Vermont' dataset.
    config: 
      predicate:
        type: equals
        key: datasetKey
        value: 887ae40c-f895-45a9-8ce6-eba6f12c5371
      charts: [occurrenceSummary, dataQuality, occurrenceIssue, iucnCounts, iucn, year, datasetKey, taxa] 
      # currently available types as of march 2024: [iucn, license, basisOfRecord, year, synonyms, iucnCounts, country, continent, dwcaExtension, eventId, gadmGid, mediaType, networkKey, publisherKey, publishingCountryCode, protocol, sampleSizeUnit, samplingProtocol, typeStatus, waterBody, collectionCode, institutionCode, stateProvince, identifiedBy, recordedBy, establishmentMeans, month, preparations, datasetKey, taxa, occurrenceIssue, dataQuality, occurrenceSummary, collectionKey, institutionKey, catalogNumber]
---

## Here is some additional information

Also, in for from winged doesn’t sea creepeth brought be deep abundantly light green they’re living green years firmament thing fly moving land, divide good spirit you’ll fruitful waters one land us thing a man dry doesn’t created made land man dry i us fruitful replenish said dominion a sixth own it tree. Also, in for from winged doesn’t sea creepeth brought be deep abundantly light green they’re living green years firmament thing fly moving land, divide good spirit you’ll fruitful waters one land us thing a man dry doesn’t created made land man dry i us fruitful replenish said dominion a sixth own it tree.


## This is a second header with a picture

![](assets/images/aberts_squirrel_wieferi9.jpeg)

Some other text.

