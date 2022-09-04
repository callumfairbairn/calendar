import { constructEventList } from "./Events";

const dayStart = 0
const dayEnd = 100
const id = "1"
const title = "Title"

describe("constructEvents", () => {
  it("returns a full day empty event for a list of 0 events", () => {
    const events = []

    const result = constructEventList(events, dayStart, dayEnd);

    expect(result).toEqual([[{ start: dayStart, end: dayEnd }]])
  })

  it("returns a full day non-empty event if given a full day event", () => {
    const events = [{ start: dayStart, end: dayEnd, id, title }]

    const result = constructEventList(events, dayStart, dayEnd);

    expect(result).toEqual([[{ start: dayStart, end: dayEnd, id, title }]])
  })

  it("returns two non-empty events if given two events which take up the whole day", () => {
    const events = [
      { start: 0, end: dayEnd / 2, id, title },
      { start: dayEnd / 2, end: dayEnd, id, title }
    ]

    const result = constructEventList(events, dayStart, dayEnd);

    expect(result).toEqual([
      [{ start: 0, end: dayEnd / 2, id, title }],
      [{ start: dayEnd / 2, end: dayEnd, id, title }],
    ])
  })

  it("returns an empty and non-empty event if given one event which lasts the second half of the day", () => {
    const events = [
      { start: dayEnd / 2, end: dayEnd, id, title },
    ]

    const result = constructEventList(events, dayStart, dayEnd);

    expect(result).toEqual([
      [{ start: 0, end: dayEnd / 2 }],
      [{ start: dayEnd / 2, end: dayEnd, id, title }],
    ])
  })

  // it("returns a list of overlapping events", () => {
  //   const events = [
  //     { start: dayStart, end: dayEnd, id, title },
  //     { start: dayStart, end: dayEnd, id, title },
  //   ]
  //
  //   const result = constructEventList(events, dayStart, dayEnd);
  //
  //   expect(result).toEqual([
  //     [{ start: dayStart, end: dayEnd, id, title }, { start: dayStart, end: dayEnd, id, title }],
  //   ])
  // })
})
