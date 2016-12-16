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
	  depart: "Alajuela Airport",
	  destinationRates: [
	    ["Arenal", "320"],
	    ["Jacó", "215"],
	    ["Liberia Airport", "280"],
	    ["Montezuma", "280"],
	    ["Monteverde", "270"],
	    ["Nosara", "280"],
	    ["Playa Sámara", "207"],
	    ["Playa Conchal", "280"],
	    ["Playa Del Coco", "280"],
	    ["Playa Flamingo", "280"],
	    ["Santa Teresa", "280"],
	    ["Tamarindo", "280"]
	  ] 
	},
        {
	  depart: "Arenal",
	  destinationRates: [
	    ["Jacó", "250"],
	    ["Liberia Airport", "280"],
	    ["Montezuma", "250"],
	    ["Nosara", "250"],
	    ["Playa Sámara", "220"],
	    ["Playa Conchal", "280"],
	    ["Playa Del Coco", "280"],
	    ["Playa Flamingo", "280"],
	    ["Santa Teresa", "250"],
	    ["Tamarindo", "280"]
	  ] 
	},
        {
	  depart: "Jacó",
	  destinationRates: [
	    ["Arenal", "250"],
	    ["Liberia Airport", "250"],
	    ["Montezuma", "235"],
	    ["Monteverde", "220"],
	    ["Nosara", "220"],
	    ["Playa Sámara", "220"],
	    ["Playa Conchal", "250"],
	    ["Playa Del Coco", "250"],
	    ["Playa Flamingo", "250"],
	    ["Santa Teresa", "235"],
	    ["Tamarindo", "250"],
	  ] 
	},
        {
	  depart: "Liberia Airport",
	  destinationRates: [
	    ["Alajuela Airport", "280"],
	    ["Arenal", "255"],
	    ["Jacó", "250"],
	    ["Montezuma", "265"],
	    ["Monteverde", "250"],
	    ["Nosara", "145"],
	    ["Playa Sámara", "120"],
	    ["Playa Conchal", "105"],
	    ["Playa Del Coco", "105"],
	    ["Playa Flamingo", "105"],
	    ["San José Airport", "280"],
	    ["Santa Teresa", "260"],
	    ["Tamarindo", "105"]
	  ] 
	},
        {
	  depart: "Monteverde",
	  destinationRates: [
	    ["Alajuela Airport", "270"],
	    ["Jacó", "220"],
	    ["Liberia Airport", "250"],
	    ["Montezuma", "240"],
	    ["Nosara", "180"],
	    ["Playa Sámara", "175"],
	    ["Playa Conchal", "180"],
	    ["Playa Del Coco", "180"],
	    ["Playa Flamingo", "180"],
	    ["San José Airport", "270"],
	    ["Santa Teresa", "240"],
	    ["Tamarindo", "180"]
	  ] 
	},
        {
	  depart: "Nosara",
	  destinationRates: [
	    ["Alajuela Airport", "230"],
	    ["Arenal", "250"],
	    ["Jacó", "220"],
	    ["Liberia Airport", "145"],
	    ["Montezuma", "245"],
	    ["Monteverde", "185"],
	    ["Playa Sámara", "60"],
	    ["Playa Conchal", "145"],
	    ["Playa Del Coco", "145"],
	    ["Playa Flamingo", "145"],
	    ["San José Airport", "230"],
	    ["Santa Teresa", "225"],
	    ["Tamarindo", "145"]
	  ] 
	},
        {
	  depart: "Playa Sámara",
	  destinationRates: [
	    ["Alajuela Airport", "207"],
	    ["Arenal", "220"],
	    ["Jacó", "220"],
	    ["Liberia Airport", "120"],
	    ["Limón", "312"],
	    ["Montezuma", "192"],
	    ["Monteverde", "167"],
	    ["Nosara", "60"],
	    ["Playa Conchal", "120"],
	    ["Playa Del Coco", "120"],
	    ["Playa Flamingo", "120"],
	    ["San José Airport", "207"],
	    ["Santa Teresa", "192"],
	    ["Tamarindo", "120"]
	  ] 
	},
        {
	  depart: "Playa Conchal",
	  destinationRates: [
	    ["Arenal", "280"],
	    ["Jacó", "250"],
	    ["Liberia Airport", "105"],
	    ["Montezuma", "280"],
	    ["Monteverde", "270"],
	    ["Nosara", "145"],
	    ["Playa Sámara", "120"],
	    ["Playa Conchal", "105"],
	    ["Playa Del Coco", "105"],
	    ["Playa Flamingo", "105"],
	    ["Santa Teresa", "280"],
	  ] 
	},
        {
	  depart: "Playa Del Coco", 
	  destinationRates: [
	    ["Arenal", "280"],
	    ["Jacó", "250"],
	    ["Liberia Airport", "105"],
	    ["Montezuma", "280"],
	    ["Monteverde", "270"],
	    ["Nosara", "145"],
	    ["Playa Sámara", "120"],
	    ["Playa Conchal", "105"],
	    ["Playa Del Coco", "105"],
	    ["Playa Flamingo", "105"],
	    ["Santa Teresa", "280"],
	  ] 
	},
        {
	  depart: "Playa Flamingo", 
	  destinationRates: [
	    ["Arenal", "280"],
	    ["Jacó", "250"],
	    ["Liberia Airport", "105"],
	    ["Montezuma", "280"],
	    ["Monteverde", "270"],
	    ["Nosara", "145"],
	    ["Playa Sámara", "120"],
	    ["Playa Conchal", "105"],
	    ["Playa Del Coco", "105"],
	    ["Playa Flamingo", "105"],
	    ["Santa Teresa", "280"],
	  ] 
	},
        {
	  depart: "Tamarindo",
	  destinationRates: [
	    ["Arenal", "280"],
	    ["Jacó", "250"],
	    ["Liberia Airport", "105"],
	    ["Montezuma", "280"],
	    ["Monteverde", "270"],
	    ["Nosara", "145"],
	    ["Playa Sámara", "120"],
	    ["Playa Conchal", "105"],
	    ["Playa Del Coco", "105"],
	    ["Playa Flamingo", "105"],
	    ["Santa Teresa", "280"],
	  ] 
	},
        {
	  depart: "Santa Teresa",
	  destinationRates: [
	    ["Arenal", "280"],
	    ["Jacó", "235"],
	    ["Liberia Airport", "260"],
	    ["Monteverde", "240"],
	    ["Nosara", "225"],
	    ["Playa Sámara", "192"],
	    ["Playa Conchal", "280"],
	    ["Playa Del Coco", "280"],
	    ["Playa Flamingo", "280"],
	    ["Tamarindo", "280"],
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
      if (currentCount < 10) {
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
