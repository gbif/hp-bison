---
layout: default
title: OBIS API Test
stats:
  #title: "type: stats"
  description: 
  features:
    - title: <span data-ajax-path="data.occurrenceSearch.documents.total" data-ajax-url="https://graphql.gbif-staging.org/graphql?query=query%20%7B%0A%20%20occurrenceSearch%28%0A%20%20%20%20predicate%3A%20%7B%0A%20%20%20%20%20%20type%3A%20and%0A%20%20%20%20%20%20predicates%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%20type%3A%20equals%2C%20key%3A%20%22countryCode%22%2C%20value%3A%20%22US%22%20%7D%0A%20%20%20%20%20%20%20%20%7B%20type%3A%20equals%2C%20key%3A%20%22notIssues%22%2C%20value%3A%20%22COUNTRY_COORDINATE_MISMATCH%22%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%20%20size%3A%2010%0A%20%20%29%20%7B%0A%20%20%20%20documents%20%7B%0A%20%20%20%20%20%20total%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A">9,000,000</span>
      description: Occurrences
      background: /assets/images/icons/maps-pin-line-icon.png
      href: /data
    - title: <span data-ajax-url="https://api.gbif.org/v1/dataset/search?publishing_country=US&limit=0">100,000</span>
      description: Datasets
      background: /assets/images/icons/database-line-icon.png
      href: https://www.gbif.org/dataset/search?publishing_country=US
    - title: <span data-ajax-url="https://api.gbif.org/v1/organization?country=US&limit=0&isEndorsed=true">100,000</span>
      description: Publishers
      background: /assets/images/icons/innovative-brain-icon.png
      href: https://www.gbif.org/publisher/search?country=US
    - title: <span data-ajax-url="https://api.gbif.org/v1/literature/search?contentType=literature&countriesOfResearcher=US&limit=0">100,000</span>
      description: Literature
      background: /assets/images/icons/read-book-icon.png
      href: /literature
---

### This is an OBIS API Test

<div id="homepage">
<div class="container" id="numbers" style="display:none">
    <div class="d-flex flex-row flex-wrap justify-content-around mb-4">
        <div class="text-center">
            <span class="fa-solid fa-location-dot"></span><br/>
            <span class="number" id="occurrences"></span>
            <br/><span class="numbertext">presence records</span>
        </div>
        <div class="text-center">
            <span class="fa-solid fa-flask"></span><br/>
            <span class="number" id="mof"></span>
            <br/><span class="numbertext">measurements and facts</span>
        </div>
        <div class="text-center">
            <span class="fa-solid fa-database"></span><br/>
            <span class="number" id="datasets"></span>
            <br/><span class="numbertext">datasets</span>
        </div>
        <div class="text-center">
            <span class="fa-solid fa-check"></span><br/>
            <span class="number" id="species"></span>
            <br/><span class="numbertext">accepted species</span>
        </div>
        <div class="text-center">
            <span class="fa-solid fa-dna"></span><br/>
            <span class="number" id="dna"></span>
            <br/><span class="numbertext">sequences</span>
        </div>
    </div>
</div>

<script>
    let formatNumber = function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    $.get("https://api.obis.org/statistics/summaries?v=1", function(stats) {
       $("#numbers").show();
        $("#datasets").html(formatNumber(stats.datasets));
        $("#occurrences").html(formatNumber(stats.presence));
        $("#species").html(formatNumber(stats.species));
        $("#mof").html(formatNumber(stats.mof));
        $("#dna").html(formatNumber(stats.dna));
    });
</script>