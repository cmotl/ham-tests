const technician_pool = require('./technician_pool')
const general_pool = require('./general_pool')
const extra_pool = require('./extra_pool')

const technician_sections = require('./technician-sections.json')
const general_sections = require('./general-sections.json')
const extra_sections = require('./extra-sections.json')

const element_to_sections = {
  technician: technician_sections,
  general: general_sections,
  extra: extra_sections
}
const element_to_questions = {
  technician: technician_pool,
  general: general_pool,
  extra: extra_pool
}

const sections = (element) => {
  return element_to_sections[element]
}

const questions = (element) => {
  return element_to_questions[element].pool()
}

module.exports = {
  sections: sections,
  questions: questions
}
