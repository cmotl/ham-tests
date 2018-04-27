var questions = require('lib/questions')

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initialized app');
  var view_model = {
    sections: ko.observableArray(),
    selectedSection: ko.observableArray(),
    questions: ko.observableArray(),
    selectedIndex: ko.observable(),
    show_answer: ko.observable(false),
  };

  view_model.reveal_answer = () => { view_model.show_answer(true)}

  ko.computed(() => {
    view_model.questions(questions.for_sections(view_model.selectedSection()))
    view_model.selectedIndex(0)
    view_model.show_answer(false)
  })

  view_model.show_answer.subscribe(console.log)
  view_model.selectedQuestion = ko.computed(() => {
    return view_model.questions()[view_model.selectedIndex()]    
  })

  view_model.previous = () => {
    view_model.show_answer(false)
    view_model.selectedIndex(view_model.selectedIndex()-1)
  }
  view_model.next = () => {
    view_model.show_answer(false)
    view_model.selectedIndex(view_model.selectedIndex()+1)
  }
  view_model.hasPrevious = ko.computed(() => {
    return view_model.selectedIndex() > 0
  })
  view_model.hasNext = ko.computed(() => {
    return view_model.selectedIndex() < (view_model.questions().length - 1)     
  })

  ko.applyBindings(view_model, document.getElementById("content"))

  view_model.selectedSection.subscribe(console.log)

  view_model.sections(questions.all_sections())
});
