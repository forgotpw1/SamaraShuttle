!function ($, window, document, undefined) {

  "use strict";

  var DateSelectorController = {
    init: function(){
      this.$el        = $('[data-controller="DateSelectorController"]');
      this.picker = new Pikaday({ field: document.getElementById('datepicker') });
    },
    
  };

  window.App = window.App || {};

  $(document).on('ready page:load', function(){
    if($('[data-controller="DateSelectorController"]').length){ 
      DateSelectorController.init();
    }
    else{
      return ""
    }
  });

}(jQuery, window, document);
