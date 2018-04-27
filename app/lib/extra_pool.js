const extra = require('hampool/extra')

const map_question = (q) => {
  return {
    id: q.id,
    question: q.question
  }
}

const map_answers = (as, correct) => {
  return as.map((x, i) => map_answer(x, i, correct))
}

const map_answer = (a, position, correct) => {
  return {
    text: a,
    correct: position == correct
  }
}

const pool = () => {
  return extra.questions.map((q) => {
    var new_q = map_question(q)
    new_q.answers = map_answers(q.answers, q.correct)
    return new_q
  })
}

module.exports = {
  pool: pool
}
