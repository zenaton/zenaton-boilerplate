module.exports.handle = function*(params) {
  const http = this.connector("http")

  http.post("https://httpbin.org/anything", {
    body: {
      name: params.name
    }
  })

  const sentence = yield this.run.task("MyFirstTask", params.name)
  yield this.run.task("LogTask", sentence)
}
