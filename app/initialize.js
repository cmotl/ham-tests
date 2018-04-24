var ko = require('knockout')
var questions = require('lib/questions')

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initialized app');
	var view_model = {
    questions: ko.observableArray()
	};
	 
	ko.applyBindings(view_model, document.getElementById("content"))

  view_model.questions(questions.for_sections(["4.1","4.2"]))
});
