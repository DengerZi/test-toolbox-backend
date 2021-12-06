/* eslint-disable no-undef */
const { request, expect } = require(`./config`)

describe(`GET /main?text=test`, () => {
  it(`return status 200`, async () => {
    const response = await request.get(`/main?text=test`)
    expect(response.status).to.eql(200)
  })
  it(`return status 400 when the value of the text is not specified`, async () => {
    const response = await request.get(`/main?text=`)
    expect(response.status).to.eql(400)
  })
  it(`returns have palindrome flag and value`, async () => {
    const response = await request.get(`/main?text=test`)
    const attributes = response.body.data
    expect(attributes).to.include.keys(`value`, `palindrome`)
  })
  it(`return value`, async () => {
    const response = await request.get(`/main?text=test`)
    const attributes = response.body.data
    expect(attributes.value).to.eql(`tset`)
  })
})
