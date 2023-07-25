import "@/styles/globals.css";
import "@/styles/styles.scss";
import { Box, Button, Container } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [tab,setTab]=useState("User");
  return (
    <Box className="pageTemplate">
      <Box className="tabHeader">
        <Button
          variant="contained"
          onClick={() => {
            setTab("User")
            router.push("/");
          }}
          className={`tabHeader__btn ${tab==="User"&&"activeTab"}`}
        >
          OneSignal User
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setTab("Card")
            router.push("/supabase");
          }}
          className={`tabHeader__btn ${tab==="Card"&&"activeTab"}`}
        >
          SupaBase card
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setTab("SMS")
            router.push("/twilioSms");
          }}
          className={`tabHeader__btn ${tab==="SMS"&&"activeTab"}`}
        >
          Twilio SMS
        </Button>
      </Box>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Box>
  );
}
