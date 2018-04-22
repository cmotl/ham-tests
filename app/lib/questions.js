const extra = require('hampool/extra');
const extra_sections = require('./sections.json')

const ids_for_section = (sections) => {
  return extra_sections
    .filter((s) => sections.includes(s.section))
    .map((s) => s.questions)
    .reduce((acc, val) => acc.concat(val), [])
}

const questions_for_ids = (ids) => {
  return extra.questions
    .filter((q) => ids.includes(q.id))
}

const acl = (x) => {
  if(Array.isArray(x))
    return x
  return [x]
}

module.exports = {
  for_sections: (sections) => questions_for_ids(ids_for_section(acl(sections)))
}
