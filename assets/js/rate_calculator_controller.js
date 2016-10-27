!function ($, window, document, undefined) {

  "use strict";

  var RateCalculatorController = {
    init: function(){
      this.$el        = $('[data-controller="RateCalculatorController"]');
      this.departFrom = ko.observable("Playa Samara");
      this.arriveAt = ko.observable("San Jose");
      this.departureDate = null;
      this.travelerCount = ko.observable(1);
      this.rate = ko.pureComputed(this.calcRate, this);
      this.data = [
        {
	  depart: "Playa Samara",
	  destinationRates: [
	    ["Nicoya", "25"],
	    ["San Jose", "25"]
	  ] 
	},
        {
	  depart: "Nosara",
	  destinationRates: {
	    "Santa Teresa": 25.0,
	    "San Jose": 30
	 }
	}
      ];
      this.initDeparture();
      this.initArrival();
      this.initRate();
    },
    initDeparture: function(){
    },
    initArrival: function(){
    },
    initRate: function() {
    },
    countDown: function(){
      var currentCount = this.travelerCount();
      if (currentCount > 1) {
        this.travelerCount(currentCount - 1);
      }
    },
    countUp: function(){
      var currentCount = this.travelerCount();
      if (currentCount < 30) {
        this.travelerCount(currentCount + 1);
      }
    },
    calcRate: function() {
      var _this = this;
      var depart = _.findWhere(this.data, {depart: this.departFrom()});
      var destinationRate = _.filter(depart.destinationRates, function(destinationRate){
        return destinationRate[0] == _this.arriveAt()
      }) 
      return "$" + (destinationRate[0][1] * this.travelerCount()).toString();
    }
    
  };

  window.App = window.App || {};

  $(document).on('ready page:load', function(){
    if($('[data-controller="RateCalculatorController"]').length){ 
      RateCalculatorController.init();
      ko.applyBindings(RateCalculatorController);
    }
    else{
      return ""
    }
  });

}(jQuery, window, document);
