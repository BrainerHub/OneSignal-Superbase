import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

export default async function sendMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let accountSid = "AC3f7423365a781d36c0f4961ad77dee4c";
  let token = "72bf1e4cca3e7f726ff691be961df005";
  const { phone, message } = req.body;
  console.log(phone, message);
  try {
    const client = twilio(accountSid, token);
    const messageDate = await client.messages.create({
      body: message,
      from: "+15074788370",
      to: phone,
    });

    return res.status(200).json({
      success: true,
      data: messageDate,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
    });
  }
}
