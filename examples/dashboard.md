---
layout: compose
title: My custom dashboard page
description: You can add a custom dashboard  as a block on a markdown page
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
      Title and description is optional. On this dashboard we show metrics for the filter `projectId: NCRMP`
    config: 
      predicate:
        type: equals
        key: projectId
        value: NCRMP
      charts: [dataQuality, occurrenceIssue, iucnCounts, iucn, year, datasetKey, taxa] 
      # currently available types as of march 2024: [iucn, license, basisOfRecord, year, synonyms, iucnCounts, country, continent, dwcaExtension, eventId, gadmGid, mediaType, networkKey, publisherKey, publishingCountryCode, protocol, sampleSizeUnit, samplingProtocol, typeStatus, waterBody, collectionCode, institutionCode, stateProvince, identifiedBy, recordedBy, establishmentMeans, month, preparations, datasetKey, taxa, occurrenceIssue, dataQuality, occurrenceSummary, collectionKey, institutionKey, catalogNumber]
---

## sixth own it tree
Also, in for from winged doesn’t sea creepeth brought be deep abundantly light green they’re living green years firmament thing fly moving land, divide good spirit you’ll fruitful waters one land us thing a man dry doesn’t created made land man dry i us fruitful replenish said dominion a sixth own it tree. Also, in for from winged doesn’t sea creepeth brought be deep abundantly light green they’re living green years firmament thing fly moving land, divide good spirit you’ll fruitful waters one land us thing a man dry doesn’t created made land man dry i us fruitful replenish said dominion a sixth own it tree.

## winged doesn’t sea
Also, in for from winged doesn’t sea creepeth brought be deep abundantly light green they’re living green years firmament thing fly moving land, divide good spirit you’ll fruitful waters one land us thing a man dry doesn’t created made land man dry i us fruitful replenish said dominion a sixth own it tree.
Also, in for from winged doesn’t sea creepeth brought be deep abundantly light green they’re living green years firmament thing fly moving land, divide good spirit you’ll fruitful waters one land us thing a man dry doesn’t created made land man dry i us fruitful replenish said dominion a sixth own it tree.