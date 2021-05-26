// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async event => {
  console.log("data", JSON.stringify(event.body))
  // Add payment details to database

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello World` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
