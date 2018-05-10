var assert = require('assert')
var questions = require('../lib/questions') 

describe("questions", () => {
  it("should find questions for a single section", () => {
    const qs = questions("extra").for_sections("2.1.1")
    assert.ok(qs.length > 0)
  })
  it("should find questions for multiple sections", () => {
    const qs = questions("extra").for_sections(["2.1.1", "3.1.1"])
    assert.ok(qs.length > 0)
  })
  it("should find all available sections", () => {
    const sections = questions("extra").all_sections()
    assert.equal(73, sections.length)
  })
  it("should shuffle questions on subsequent calls", () => {
    const q1 = questions("extra").for_sections("2.1.1")
    const q2 = questions("extra").for_sections("2.1.1")
    assert.equal(q1.length, q2.length)
    assert.notDeepEqual(q1, q2)
  })
  it("should shuffle answers on subsequent calls", () => {
    const a1 = questions("extra").for_sections("4.1")[0].answers
    const a2 = questions("extra").for_sections("4.1")[0].answers
    assert.notDeepEqual(a1, a2)
  })
})
