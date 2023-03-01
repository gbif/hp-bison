---
lang: en
lang-ref: test_map
title: Test Map
description: Test Leaflet Map for site

background: "{{site.data.images.ShortBeakedCommonDolphin.src}}"
imageLicense: "{{site.data.images.ShortBeakedCommonDolphin.caption}}"
layout: heroImage
height: 50vh
---


Test Map of US Publishers

![Map of US Publishers(/assets/images/test_GBIF_US_publisher_map.png)

### Basic Map

{% leaflet_map %}
    {}
{% endleaflet_map %}


### Reference GeoJSON file

{% leaflet_map %}
    {% leaflet_geojson "/assets/GBIF_US_publishers_2023-02-21.geojson" %}

{% endleaflet_map %}

------
[More information](https://data-blog.gbif.org/post/installations-and-hosting-solutions-explained/) on how to make your data available.

=> [All GBIF Hosted Portals](https://dev.gbif.org/hosted-portals.html)    