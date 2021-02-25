exports.handler = async function(event, context) {
  console.log("context", JSON.stringify(context))
  return context.logStreamName
}
