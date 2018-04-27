var assert = require('assert')
var extra = require('../lib/extra_pool') 

describe("extra pool", () => {
  it("should convert all questions", () => {
    const qs = extra.pool()

    assert.equal(710, qs.length)
  })
  it("should produce questionss of desired interface", () => {
    const q = extra.pool()[0]

    assert.ok(q.id)
    assert.ok(q.question)
  })
  it("should produce answers of desired interface", () => {
    const as = extra.pool()[0].answers
    assert.equal(4, as.length)

    const a = as[0]
    assert.ok(a.text)
    assert.ok(a.correct != undefined)
  })
  it("should mark the correct answer as correct", () => {
    const as = extra.pool()[0].answers

    assert.ok(as[0].correct == false)
    assert.ok(as[1].correct == false)
    assert.ok(as[2].correct == false)
    assert.ok(as[3].correct == true)
  })
})
