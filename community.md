---
lang: en
lang-ref: community
title: Community
description: The US community is comprised of the US Delegation, nodes, publishers, installations, and networks working together to manage and use biodiversity data. It represents a subset of the GBIF North America community and focuses on matters that are specific to the United States.

#background: "{{site.data.images.ShortBeakedCommonDolphin.src}}"
#imageLicense: "{{site.data.images.ShortBeakedCommonDolphin.caption}}"
layout: heroImage
height: 50vh
---

## Glossary
[**Delegation**](#delegation): The team of people nominated by Participants to represent them in GBIF decision making, under the leadership of the Head of Delegation. Defined in the [Rules of Procedure for the Governing Board of the Global Biodiversity Information Facility](https://www.gbif.org/document/80667/rules-of-procedure-of-the-gbif-governing-board)

[**Participant Node**](#nodes): a team designated by a [Participant](https://www.gbif.org/the-gbif-network#:~:text=The%20Participant%20network,open%20access%20to%20biodiversity%20data) to coordinate a network of people and institutions that produce, manage and use biodiversity data, collectively building an infrastructure for delivering biodiversity information. They are supported by organizational arrangements and informatics solutions, working to improve the availability and usefulness of biodiversity data for research, policy and decision-making.   

[**Publisher**](#publishers): organizations that provide biodiversity data organized into formats and standards recognized by GBIF’s data harvesting facilities, and made available via a stable web-based platform. Become a [publisher](https://www.gbif.org/become-a-publisher).   

[**Network**](#networks): a community of installations, publishers, and nodes working together on a specific topic or domain to facilitate and increase sharing of relevant biodiversity data. 

[**Installation**](#installations): a method for publishing data to GBIF that is managed by an organization, most commonly an [Integrated Publishing Toolkit (IPT)](https://www.gbif.org/ipt) but also includes Symbiota and other methods.    

[**Collections Management System (CMS)**](#cms): is software that provides for the documentation of a collection. They provide access to information about an institution's collections and objects to academic researchers, institutional volunteers, and the public, increasingly through online methods. A CMS may also provide the ability to publish data.


> Did we miss something? This page is an initial attempt to identify the community involved. If you notice something that needs to be added please [add a ticket to Github](https://github.com/gbif/hp-bison/issues) for us so we can update the page.


# GBIF US Community Participants 
------------------------------
<a name="delegation"></a>

## US Delegation

- [Katharina Dittmar](https://www.gbif.org/contact-us/directory?personId=4369), Head of delegation, National Science Foundation
- [Abby Benson](https://www.gbif.org/contact-us/directory?personId=4029), Delegate, Node manager, U.S. Geological Survey
- [Thomas Orrell](https://www.gbif.org/contact-us/directory?personId=138), Delegate, Smithsonian Institution
- [Martin Kalfatovic](https://www.gbif.org/contact-us/directory?personId=3706), Delegate, Smithsonian Institution Libraries and Archives
- [Sharon Grant](https://www.gbif.org/contact-us/directory?personId=4318), Delegate, Field Museum of Natural History
- [Steve Formel](https://www.gbif.org/contact-us/directory?personId=4368), Node Staff, U.S. Geological Survey
- [Mike Frame](https://www.gbif.org/contact-us/directory?personId=78), Delegate, U.S. Geological Survey
- [Leonard Krishtalka](https://www.gbif.org/contact-us/directory?personId=880), Delegate, niversity of Kansas

<a name="nodes"></a>Participant Nodes
------------
### Nodes
- [United States](https://www.gbif.org/country/US/summary)

### Associate Nodes
- [Biodiversity Heritage Library](https://www.gbif.org/participant/366)
- [Discover Life](https://www.gbif.org/participant/289)
- [Encyclopedia of Life](https://www.gbif.org/participant/291)
- [iDigBio](https://www.gbif.org/participant/375)
- [Integrated Taxonomic Information System](https://www.gbif.org/participant/295)
- [Natural Science Collections Alliance](https://www.gbif.org/participant/301)
- [NatureServe](https://www.gbif.org/participant/302)
- [Symbiota Support Hub](https://www.gbif.org/participant/429)
- [VertNet](https://www.gbif.org/participant/361)

<a name="publishers"></a>Publishers
------------
The [United States](https://www.gbif.org/publisher/search?country=US) has over 330 publishers across many sectors.

**Map of US Publishers** _(last updated March 2, 2023)_

{% leaflet_map { 

	"center" : [0,  -1501.0074],
    "zoom" : 2} %}
				 
    {% leaflet_geojson "/assets/GBIF_US_publishers.geojson" %}

{% endleaflet_map %}

<a name="networks"></a>Networks
------------
- [Arctos](https://www.gbif.org/network/1f2c0cbe-40df-43f6-ba07-e76133e78c31)
- [iDigBio](https://www.idigbio.org/)
- [OBIS](https://www.gbif.org/network/2b7c7b4f-4d4f-40d3-94de-c28b6fa054a6)
- [VertNet](http://www.vertnet.org/)

<a name="cms"></a>Collections Management Systems
------------
- [Arctos](https://arctosdb.org/)
- [EMu](https://www.axiell.com/solutions/product/emu/)
- [Specify](https://www.specifysoftware.org/)
- [Symbiota](https://symbiota.org/)

<a name="installations"></a>Installations
------------
### Accepting additional publishers
For more information contact these installations directly
- [GBIF-US](https://bison.usgs.gov/ipt/)
- [VertNet](http://ipt.vertnet.org:8080/ipt/)

### Other installations
- American Museum of Natural History
- Berkeley Natural History Museums
- California Academy of Sciences
- Cincinnati Museum Center
- Department of Environmental Conservation, University of Massachusetts - Amherst
- Field Museum of Natural History
- Florida Museum of Natural History
- Harvard University Herbaria
- iDigBio
- Missouri Botanical Garden
- Museum of Biological Diversity, The Ohio State University
- Museum of Comparative Zoology, Harvard University
- Museum of Natural and Cultural History - University of Oregon
- National Museum of Natural History, Smithsonian Institution
- NatureServe
- Oregon State University
- Sam Noble Oklahoma Museum of Natural History
- Scripps Institution of Oceanography
- Species File Group
- The Genomic Observatories Metadatabase (GeOMe)
- The New York Botanical Garden
- United States Geological Survey
- University of Colorado Museum of Natural History
- University of Connecticut
- University of Kansas Biodiversity Institute
- University of Michigan College of Literature, Science & Arts
- University of Rhode Island - Biological Sciences
- University of Texas at Austin, Biodiversity Collections
- USF Water Institute
- Vermont Center for Ecostudies
- Yale University Peabody Museum

------
[More information](https://data-blog.gbif.org/post/installations-and-hosting-solutions-explained/) on how to make your data available.

=> [All GBIF Hosted Portals](https://dev.gbif.org/hosted-portals.html)    