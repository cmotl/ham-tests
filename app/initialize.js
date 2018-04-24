var ko = require('knockout')
var questions = require('lib/questions')

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initialized app');
  var view_model = {
    questions: ko.observableArray(),
    selectedIndex: ko.observable(),
  };
	 
  view_model.selectedQuestion = ko.computed(() => {
    return view_model.questions()[view_model.selectedIndex()]    
  })
  view_model.previous = () => {
    view_model.selectedIndex(view_model.selectedIndex()-1)
  }
  view_model.next = () => {
    view_model.selectedIndex(view_model.selectedIndex()+1)
  }
  view_model.hasPrevious = ko.computed(() => {
    return view_model.selectedIndex() > 0
  })
  view_model.hasNext = ko.computed(() => {
    return view_model.selectedIndex() < (view_model.questions().length - 1)     
  })

  ko.applyBindings(view_model, document.getElementById("content"))

  view_model.selectedQuestion.subscribe(console.log)

  view_model.questions(questions.for_sections(["2.1.1"]))
  view_model.selectedIndex(0)
});
