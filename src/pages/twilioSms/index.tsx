// import styles from "@/styles/Home.module.css";
import { ChangeEvent, useState } from "react";
import { Button, InputLabel, Typography } from "@mui/material";
import userServices from "@/services/user/user-services";
import { supabase } from "@/pages";
import MessagingResponse from "twilio/lib/twiml/MessagingResponse";

const TwilioSMS = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [uploadedImageLink, setUploadedImageLink] = useState("");

  const twiml = new MessagingResponse();

  const sendMessageToPhoneNumbers = async (phone: string[], message: string) => {
    const sendMessage = await userServices.SendMessageToPhoneNumbers(phone, message, uploadedImageLink);
    if (!sendMessage.error) {
      alert("Message sent");
    }

    console.log("Message sent", sendMessage);
  };

  const receiveMessageToPhoneNumbers = async (phone: string[], message: string) => {
    const ReceiveMessage = await userServices.ReceiveMessageToPhoneNumbers(phone, message, uploadedImageLink);
    // if (!ReceiveMessage.error) {
    //   alert("Message has been Received!");
    // }

    console.log("Message has been Received!", ReceiveMessage);
  };

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const { data, error } = await supabase.storage.from("message-bucket").upload("public/" + Date.now().toString() + file.name, file);

      const img = supabase.storage.from("message-bucket").getPublicUrl(data!.path);
      setUploadedImageLink(img.data.publicUrl);

      if (data) {
        console.log({ data, img });
      } else if (error) {
        console.log(error);
      }
    }
  };

  // const sendMessage = async (e: BaseSyntheticEvent) => {
  //   e.preventDefault();
  //   setLoading(false);
  //   setError(false);
  //   setSuccess(false);
  //   const res = await fetch("api/sendMessage", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ phone: phone, message: message }),
  //   });
  //   const apiResponse = await res.json();

  //   if (apiResponse.success) {
  //     console.log("API Response  ", apiResponse);

  //     setSuccess(true);
  //   } else {
  //     setError(true);
  //   }
  //   setLoading(false);
  // };

  return (
    <div className="pageLayout">
      <div className="formCard">
        <div className="formGroup">
          <InputLabel htmlFor="phone" className="customLabel">
            Phone Number
          </InputLabel>
          <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
        </div>
        <div className="formGroup">
          <InputLabel htmlFor="message" className="customLabel">
            Message
          </InputLabel>
          <textarea rows={4} onChange={(e) => setMessage(e.target.value)} id="message" required placeholder="Message"></textarea>
        </div>
        <div className="formCard__btn">
          <Button id="upload_image" className="blueBtn blueBtn--border">
            Upload Image
            <input onChange={handleUpload} hidden accept="*/*" multiple type="file" />
          </Button>
          <Button
            onClick={async () => {
              sendMessageToPhoneNumbers([phone], message);
              receiveMessageToPhoneNumbers([phone], message);
            }}
            disabled={loading}
            type="submit"
            className="blueBtn"
          >
            Send Message
          </Button>
        </div>

        {success && <Typography className="successMsg">Message sent successfully.</Typography>}
        {error && <Typography className="errorMsg">Something went wrong. Please check the number.</Typography>}
      </div>
    </div>
  );
};

export default TwilioSMS;
