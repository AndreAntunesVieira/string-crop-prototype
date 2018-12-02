if (String.prototype.crop === undefined) {
  String.prototype.crop = function() {
    const length = arguments[0]
    const extension = arguments[1] === undefined ? '...' : arguments[1]
    if (this.length > length) return this.substr(0, length) + extension
    return this
  }
}
