const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51I2wXME8UHyynlEKeguS0cMAMvEXUAN8vsTadx2ISIBhwVCMW0QDEjrSDFS1Oslyvd9EouEDRvkpbxqPHBW70y8100JJeJ7pdb")

	  

//app config
const app = express();

//middelwares
app.use(cors({ origin: true }));
app.use(express.json());

// api router
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen <command/>
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-84ea5/us-central1/api

//http://localhost:5001/clone-84ea5/us-central1/api

				   
														
