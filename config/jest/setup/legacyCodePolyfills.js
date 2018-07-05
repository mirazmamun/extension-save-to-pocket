window.define = () => []

window.matchMedia = () => ({
  matches: true
})

window.localStorage = {
  getItem(key) {
    return this[key]
  },
  setItem(key, value) {
    this[key] = value
  },
  removeItem(key) {
    delete this[key]
  },
  get(key) {
    return this[key]
  },
  set(key, value) {
    this[key] = value
  }
}
