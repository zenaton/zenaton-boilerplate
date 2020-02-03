module.exports.handle = function*(name = "World") {
  const sentence = yield this.run.task("GetSentence", name);
  yield this.run.task("LogSentence", sentence);
}
