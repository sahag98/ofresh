"use server";

import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
// import { CartItem } from "@/app/addToCart";

export async function HandleCheckout({ order }: { order: any }) {
  const { car_type, package_type, price, date, order_id } = order;
  //   const { products, orderId, shippingFee } = await req.json();

  if (!order) {
    throw new Error("An order is required to handle checkout.");
  }

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  line_items.push({
    price_data: {
      currency: "USD",
      product_data: {
        description: car_type + " on " + date,
        name: package_type,
        images: [
          "https://cdn.glitch.global/8b3fcaf4-93b4-418a-b1c5-5adbc2870c14/logo.png?v=1720477997493",
        ],
      },
      unit_amount: price * 100,
    },
    quantity: 1,
  });

  line_items.push({
    price_data: {
      currency: "USD",
      product_data: {
        name: "Booking Fee",
      },
      unit_amount: 10 * 100,
    },
    quantity: 1,
  });

  console.log("line items: ", line_items);

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    automatic_tax: {
      enabled: false,
    },
    success_url: `http://localhost:3000/success/${order_id}`,
    cancel_url: `http://localhost:3000/cancel/${order_id}`,
  });

  console.log("session: ", session);

  if (session.url) {
    redirect(session.url);
  }
}
