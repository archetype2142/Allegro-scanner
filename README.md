# Allegro Product Scanner

live app 
- [frontend](https://tardis-front-2.herokuapp.com)
- [backend](https://tardis-back.herokuapp.com)


The app serves as an API for the corresponding front end app written in React. The API uses [QuaggaJS](https://serratus.github.io/quaggaJS/examples/live_w_locator.html) to scan EAN, EAN-extended and EAN-8 barcodes which are converted to string names and searched for on [Allegro](https://allegro.pl) using a service worker. This happens asynchronously while all the results are fetched from Allegro. 
Later the frontend can pull these results to parse them in views.

## run 
    bundle install 
    rails s
