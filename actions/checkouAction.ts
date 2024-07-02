import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
// import { CartItem } from "@/app/addToCart";

export async function HandleCheckout({ order }: { order: any }) {
  const { car_type, package_type, order_id } = order;
  //   const { products, orderId, shippingFee } = await req.json();

  if (!order) {
    throw new Error("An order is required to handle checkout.");
  }

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  line_items.push({
    price_data: {
      currency: "USD",
      product_data: {
        description: car_type.name,
        name: package_type.name,
        images: ["image"],
      },
      unit_amount: package_type.price,
    },
  });

  line_items.push({
    price_data: {
      currency: "USD",
      product_data: {
        name: "Booking Fee",
      },
      unit_amount: 10,
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    automatic_tax: {
      enabled: true,
    },

    success_url: `http://localhost:3000/success/${order_id}`,
    cancel_url: `http://localhost:3000/cancel/${order_id}`,
  });

  if (session.url) {
    redirect(session.url);
  }
}
