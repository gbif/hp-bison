---
boxExample: 
  title: "type: boxHero"
  description: See [`_data/compose/examples.yml`](https://github.com/gbif/jekyll-theme-algae/blob/master/_data/compose/examples.yml#L12) for the content structure.
  background: /assets/img/Haeckel_Siphoneae.jpg
postExample: 
  title: "type: postHeader"
  description: Description.
  background: /assets/img/Haeckel_Siphoneae.jpg
latestPostsExample: 
  title: "type: latestPosts"
  description: Description.
split1:
  reverse: false
  title: "type: split"
  description: |      # required
    Description.
  # img required
  background: /assets/img/Haeckel_Siphoneae.jpg
  imageLicense: |
    *Cladophora aegagropila* (Linnaeus) Rabenhorst. Photo by  Оlga Сhernyagina. Via [gbif.org](https://www.gbif.org/occurrence/2862552277)
  href: /about
  cta:
  - text: Download report
    href: http://example.com
    isPrimary: true
split2:
  reverse: true
  title: "type: split"
  description: |      # required
    Description.
  # img required
  background: /assets/img/Haeckel_Siphoneae.jpg
  imageLicense: |
    *Cladophora aegagropila* (Linnaeus) Rabenhorst. Photo by  Оlga Сhernyagina. Via [gbif.org](https://www.gbif.org/occurrence/2862552277)
  href: /about
  cta:
  - text: Learn more
    href: /about
text:
  title: "type: floatingText"
  description: |      # required
    Description.
  background: /assets/theme/img/patterns/wavy-dots.png
  overlayColor: "#ffffff55"
  hasWhiteText: false
blank: 
  klass: test
  markdownContent: |
    <style>
      .my-headline {
          margin: 0;
          background-image: url('/assets/img/Haeckel_Siphoneae.jpg'); 
          background-size: cover; 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          font-size: 120px; 
          text-align: center; 
          text-transform: uppercase; 
          font-weight: 900;
      } 
    </style>
    <div style="background: #444440; color: white">
      <h1 class="my-headline">A blank slate - do as you like here</h1>
      <div style="text-align: center; padding: 24px">
        <h2>type: blank</h2>
        <p>See <a href="https://github.com/gbif/jekyll-theme-algae/blob/master/_data/compose/examples.yml#L49"><code class="language-plaintext highlighter-rouge">_data/compose/markdownBlock.yml</code></a> for the content structure.</p>
      </div>
    </div>
stats:
  klass: my-custom-identifier-for-styling
  title: "type: stats"
  description: |      # required
    See [`_data/compose/examples.yml`](https://github.com/gbif/jekyll-theme-algae/blob/master/_data/compose/examples.yml#L72) for the content structure.
  features:
      # Hard coded value
    - title: 123
      description: Viscera mercibus
      background: /assets/img/icons/validity.png
      href: /about
    - title: 567
      description: Infamataeque priori
      background: /assets/img/icons/music.png
    - title: 456,678
      description: Cruorem tremor
      background: /assets/img/icons/variability.png
---