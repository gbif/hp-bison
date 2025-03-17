---
layout: default
title: OBIS API Test
---

### This is an OBIS API Test

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