class _Node {
  constructor(value, next, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous
  }
}

module.exports = _Node