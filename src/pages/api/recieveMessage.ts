import { NextApiRequest, NextApiResponse } from "next";
import twilio, { twiml } from "twilio";

export default async function recieveMessage(
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
      to: "+15074788370",
      from: phone,
    });

    console.log("Data Received:",messageDate)

    // const twiml = new twilio.twiml.MessagingResponse();

    // if (req.body.replay == "Yes") {
    //   twiml.message("Yes");
    // } else if (req.body.replay == "No") {
    //   twiml.message("No");
    // } else {
    //   twiml.message(
    //     "No Body param match, Twilio sends this in the request to your server."
    //   );
    // }

    return res.status(200).send(messageDate);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
    });
  }
}

