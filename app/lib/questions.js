//const extra = require('./extra_pool');
//const extra_sections = require('./extra-sections.json')

const pools = require("./pools")
const _ = require('lodash')

const questions = (element) => {

const ids_for_section = (sections) => {
  return pools.sections(element)
    .filter((s) => sections.includes(s.section))
    .map((s) => s.questions)
    .reduce((acc, val) => acc.concat(val), [])
}

const questions_for_ids = (ids) => {
  return pools.questions(element)
    .filter((q) => ids.includes(q.id))
}

const acl = (x) => {
  if(Array.isArray(x))
    return x
  return [x]
}

const all_sections = () => {
  return pools.sections(element).map((s) => s.section )
}

const shuffle_answers = (q) => {
  q.answers = _.shuffle(q.answers)
  return q
}

return {
  for_sections: (sections) => _.shuffle(questions_for_ids(ids_for_section(acl(sections))).map(shuffle_answers)),
  all_sections: all_sections
}
}

module.exports = questions
