// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const handler = async event => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
    metadata: { customerID: "34343434", orderID: "31123123" },
  })

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
