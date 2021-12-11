export default function bubbleSort(values) {
  let sorted = false

  while (!sorted) {
    sorted = true
    for (let i = 0; i < values.length; i++) {
      if (values[i]?.number > values[i + 1]?.number) {
        const actual = values[i]?.number
        values[i].number = values[i + 1]?.number
        values[i + 1].number = actual
        sorted = false
      }
    }
  }
  return values
}
