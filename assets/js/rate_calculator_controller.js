!function ($, window, document, undefined) {

  "use strict";
//arenal, Liberia Airport, San Jose Airport, Nosara, Santa Teresa, Montezuma, Plays Del Coco, Flamingo, Conchal
  var RateCalculatorController = {
    init: function(){
      this.$el        = $('[data-controller="RateCalculatorController"]');
      this.departFrom = ko.observable("Playa Sámara");
      this.arriveAt = ko.observable("San José");
      this.travelerCount = ko.observable(4);
      this.rate = ko.pureComputed(this.calcRate, this);
      this.data = [
        {
	  depart: "Playa Sámara",
	  destinationRates: [
	    ["Alejuela Airport", "207"],
	    ["Arenal", "142"],
	    ["Jacó", "172"],
	    ["Liberia Airport", "137"],
	    ["Limón", "312"],
	    ["Montezuma", "192"],
	    ["Monteverde", "167"],
	    ["Nosara", "87"],
	    ["Playa Conchal", "132"],
	    ["Playa Del Coco", "132"],
	    ["Playa Flamingo", "132"],
	    ["San José Airport", "207"],
	    ["Santa Teresa", "192"],
	    ["Tamarindo", "132"]
	  ] 
	},
        {
	  depart: "Nosara",
	  destinationRates: [
	    ["Alejuela Airport", "207"],
	    ["Arenal", "142"],
	    ["Jacó", "172"],
	    ["Liberia Airport", "137"],
	    ["Limón", "312"],
	    ["Montezuma", "192"],
	    ["Monteverde", "167"],
	    ["Playa Samará", "87"],
	    ["Playa Conchal", "132"],
	    ["Playa Del Coco", "132"],
	    ["Playa Flamingo", "132"],
	    ["San José Airport", "207"],
	    ["Santa Teresa", "192"],
	    ["Tamarindo", "132"]
	  ] 
	},
        {
	  depart: "Liberia Airport",
	  destinationRates: [
	    ["Alejuela Airport", "207"],
	    ["Arenal", "142"],
	    ["Jacó", "172"],
	    ["Liberia Airport", "137"],
	    ["Limón", "312"],
	    ["Montezuma", "192"],
	    ["Monteverde", "167"],
	    ["Playa Samará", "87"],
	    ["Playa Conchal", "132"],
	    ["Playa Del Coco", "132"],
	    ["Playa Flamingo", "132"],
	    ["San José Airport", "207"],
	    ["Santa Teresa", "192"],
	    ["Tamarindo", "132"]
	  ] 
	},
        {
	  depart: "San José Airport",
	  destinationRates: [
	    ["Alejuela Airport", "207"],
	    ["Arenal", "142"],
	    ["Jacó", "172"],
	    ["Liberia Airport", "137"],
	    ["Limón", "312"],
	    ["Montezuma", "192"],
	    ["Monteverde", "167"],
	    ["Playa Samará", "87"],
	    ["Playa Conchal", "132"],
	    ["Playa Del Coco", "132"],
	    ["Playa Flamingo", "132"],
	    ["San José Airport", "207"],
	    ["Santa Teresa", "192"],
	    ["Tamarindo", "132"]
	  ] 
	}
      ];
      var self = this;
      this.departData = ko.observableArray(_.pluck(this.data, 'depart'));
      this.arrivalData = ko.computed(function(){
        var depart = self.departFrom();
	var filtered = _.findWhere(self.data, {depart: depart});
	console.log(filtered.destinationRates);

	if (!filtered) {
          return []
	} 
	else{ 
	  return _.map(filtered.destinationRates, function(item){ return item[0]; });
        }
      });
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
      if (currentCount > 4) {
        this.travelerCount(currentCount - 1);
      }
    },
    countUp: function(){
      var currentCount = this.travelerCount();
      if (currentCount < 8) {
        this.travelerCount(currentCount + 1);
      }
    },
    calcRate: function() {
      var _this = this;
      var depart = _.findWhere(this.data, {depart: this.departFrom()});
      var destinationRate = _.filter(depart.destinationRates, function(destinationRate){
	      console.log(destinationRate);
        return destinationRate[0] == _this.arriveAt()
      }) 
      var baseRate =  parseFloat(destinationRate[0][1])
      var rate = baseRate + (.15 * baseRate) * (this.travelerCount() - 4);
      console.log(rate);
      return "$" + rate.toFixed(0);   
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
