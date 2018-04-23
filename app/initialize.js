var ko = require('knockout')
var questions = require('lib/questions')

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
	var view_model = {
    title: ko.observable("Ham Test"),
    questions: ko.observableArray()
	};
	 
	ko.applyBindings(view_model, document.getElementById("content"))

  view_model.questions(questions.for_sections(["4.3.1", "4.3.2"]))
});
