import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
// import runOneSignal from "./onesignal";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import CardUser from "./oneSignalCard";

const supabaseUrl = "https://chat-room.supabase.co";
const supabaseAnonKey = "sbp_50ea03c21243c2a4e226cbd5d3de4d835ec5e465";
const oneSignalAppId = "a33badef-7679-4ceb-8726-cefb38c1801a";

export const supabase = createClient("https://tzmmgtltbmsctuihxshn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6bW1ndGx0Ym1zY3R1aWh4c2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwOTk5MTMsImV4cCI6MTk5MzY3NTkxM30.LPg8fMKCAJsDz1nnZTdLhlQf7NQSdwGGbyrlgju2zX0");

function App() {
  // const API_KEY = "YTAyNTJkMTAtODlmZC00NGVlLThlNDItZTA1ZmVkNWE0NzE3";
  // const ONESIGNAL_APP_ID = "a33badef-7679-4ceb-8726-cefb38c1801a";
  // const BASE_URL = "https://onesignal.com/api/v1";

  const [buttons, setButtons] = useState("notification");
  useEffect(() => {
    // runOneSignal();
  }, []);
  return (
    <>
      <CardUser />
    </>
  );
}

export default App;
