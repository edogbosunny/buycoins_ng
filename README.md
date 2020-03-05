[![Test Coverage](https://api.codeclimate.com/v1/badges/400512bcbe68faf5d932/test_coverage)](https://codeclimate.com/github/edogbosunny/buycoins_ng/test_coverage)
[![Build Status](https://travis-ci.com/edogbosunny/buycoins_ng.svg?branch=develop)](https://travis-ci.com/edogbosunny/buycoins_ng)

This application calculates the margin price of bitcon and convets to naira equaivalent.

please see example of graphql payload needed to be passed below

```query{
  calculatePrice(data: {
    margin: 2.3
    exchangeRate: 360
    type: BUY
  }){
    nairaEquivalent
  }
}
```
the margin and exchange rate parameters are float values while the type is an ENUM which can only take BUY or SELL as parameters

a hosted playground can be found [HERE](https://buy-coins-assessment.herokuapp.com/graphql)

#### how to run this application

```
- clone the repository
- run yarn in command prompt
- run yarn run start:dev
```
