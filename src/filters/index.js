const emptyFilter = {
  name: 'emptyFilter',
  handler: (val) => {
    if (!val && val !== 0) {
      return '--'
    } else {
      return val
    }
  }
}

export default [
  emptyFilter
]
