import express from "express";
import Stripe from "stripe";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

app.use(cors());
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { items } = req.body; 
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price, 
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/?status=success",
      cancel_url: "http://localhost:3000/cart",
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));