---
lang-ref: home
layout: home
# preTitle: GBIF.US
title: Species observations for the United States and Territories
# description: Species occurrences for the United States and U.S. Territories.
background: "https://inaturalist-open-data.s3.amazonaws.com/photos/459232386/original.jpeg"
imageLicense: Mallard (_Anas platyrhynchos_) Washington DC, USA. by
  Jeff Davis [inaturalist.org](https://www.inaturalist.org/photos/459232386), [CC0](https://creativecommons.org/publicdomain/zero/1.0/)
height: 55vh
parallax: true
cta:
  - text: Explore Data
    href: /data
    isPrimary: true
  - text: About
    href: /about
permalink: /
klass: home
navbar:
    color: transparent
    hasWhiteText: true
    floating: true
composition:
  - type: heroImage # the block type
  - data: home.stats
    type: stats 
  - type: latestPosts
    description: Recent Posts
    inlineData: "nonsense"
  - data: home.nearYou
    type: split
  # - data: home.mepeck
  #   type: split
  - data: home.dataset
    type: split
  - data: home.fossil
    type: split
---