---
lang-ref: home
layout: home
# preTitle: GBIF.US
title: Species observations for the United States and Territories
# description: Species occurrences for the United States and U.S. Territories.
background: /assets/images/organisms/eastern_american_jol_fungus_inat_catslovetofindplants.jpg
imageLicense: |
  Eastern American Jack-O'-Lantern - photo by catslovetofindplants via [inaturalist.org](https://www.inaturalist.org/observations/187710658)
height: 65vh
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