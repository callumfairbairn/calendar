import { addRows } from "./Events";

const id = "1"
const title = "Title"

describe("addRows", () => {
  it("adds row: 0 to each element if there are no overlapping elements", () => {
    const events = [{ start: 100, end: 200, id, title }, { start: 200, end: 300, id, title }]

    const result = addRows(events)

    expect(result).toEqual([{ start: 100, end: 200, id, title, row: 0 }, { start: 200, end: 300, id, title, row: 0 }])
  })

  it("adds row: 1 if an element overlaps", () => {
    const events = [{ start: 100, end: 200, id, title }, { start: 150, end: 300, id, title }]

    const result = addRows(events)

    expect(result).toEqual([{ start: 100, end: 200, id, title, row: 0 }, { start: 150, end: 300, id, title, row: 1 }])
  })

  it("works for any number of events in a row", () => {
    const events = [{ start: 100, end: 200, id, title }, { start: 100, end: 200, id, title }, { start: 100, end: 200, id, title }]

    const result = addRows(events)

    expect(result).toEqual([
      { start: 100, end: 200, id, title, row: 0 },
      { start: 100, end: 200, id, title, row: 1 },
      { start: 100, end: 200, id, title, row: 2 }
    ])
  })


})
