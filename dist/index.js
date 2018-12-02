void 0 === String.prototype.crop && (String.prototype.crop = function () {
  const t = arguments[0], o = void 0 === arguments[1] ? "..." : arguments[1];
  return this.length > t ? this.substr(0, t) + o : this
});
