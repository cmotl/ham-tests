var assert = require('assert')
var questions = require('../lib/questions') 

describe("questions", () => {
  it("should find questions for a single section", () => {
    const qs = questions.for_sections("2.1.1")
    assert.ok(qs.length > 0)
  })
  it("should find questions for multiple sections", () => {
    const qs = questions.for_sections(["2.1.1", "3.1.1"])
    assert.ok(qs.length > 0)
  })
  it("should find all available sections", () => {
    const sections = questions.all_sections()
    assert.equal(37, sections.length)
  })
})
