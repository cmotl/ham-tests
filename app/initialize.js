var ko = require('knockout')

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
	var view_model = {
    title: ko.observable("Ham Test")
	};
	 
	ko.applyBindings(view_model, document.getElementById("title"))
});
