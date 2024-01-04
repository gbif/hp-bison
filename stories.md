---
# Stories about GBIF-mediated US data
title: US News, Stories and Events from GBIF.org

# Description (Optional)
#description: "Some examples of GBIF-mediated data from the US."
  
layout: compose
composition:
- type: stories

# Filters
# Use these options to tailor the content displayed in your block.

filters:
  # Content Type Filter (Optional)
  # Define which types of content to display by uncommenting. If unspecified, all types are shown.
  contentType:
    - DATA_USE
    - NEWS
    - EVENT
    #- LITERATURE
  
  # Display Limit (Optional)
  # Set the number of items to showcase. Default is 6.
  limit: 9 

  # Filter content by researcher's country using ISO country codes. (Optional)
  countriesOfResearcher: 
    - US
    # Add more country codes for filtering (e.g., - GB, - CA, etc.)

  # Filter content by country or coverage using ISO country codes. (Optional)
  countriesOfCoverage:
    - US
    # Add more country codes for filtering.

  # Topic Filters (Optional)
  # Use these codes to filter content by specific topics.
  topics:
    # Uncomment any topics you want to exclude from the block.
    - DNA
    - DATA_PAPER
    - INFRASTRUCTURE
    - TAXONOMY
    - SPECIES_DISTRIBUTIONS
    - PHYLOGENETICS
    - MARINE
    - INVASIVES
    - HUMAN_HEALTH
    - FRESHWATER
    - EVOLUTION
    - ECOSYSTEM_SERVICES
    - ECOLOGY
    - DATA_MANAGEMENT
    - CONSERVATION
    - CLIMATE_CHANGE
    - CITIZEN_SCIENCE
    - BIOGEOGRAPHY
    - BIODIVERSITY_SCIENCE
    - AGRICULTURE 
    
---