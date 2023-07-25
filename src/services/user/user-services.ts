import axios from "axios";
import { twiml } from "twilio";
// import supabase from "@supabase/supabase-js";

const createOneSignalUser = async (email: string) => {
  try {
    const { data } = await axios.post(
      "https://onesignal.com/api/v1/players",
      {
        app_id: "a33badef-7679-4ceb-8726-cefb38c1801a",
        device_type: 11,
        identifier: email,
        language: "",
        // timezone: "-28800",
        // game_version: "1.1.1",
        // device_model: "iPhone5,1",
        // device_os: "15.1.1",
        // session_count: 600,
        // tags: {
        //   first_name: "Jon",
        //   last_name: "Smith",
        //   level: "99",
        //   amount_spent: "6000",
        //   account_type: "VIP",
        //   key_to_delete: '""',
        // },
        // amount_spent: "100.99",
        // playtime: 600,
        // notification_types: 1,
        // lat: 37.563,
        // long: 122.3255,
        // country: "IN",
        // timezone_id: "Europe\\/Warsaw",
      },
      {
        headers: {
          accept: "*/*",
          //   app_id: "a33badef-7679-4ceb-8726-cefb38c1801a",
          Authorization:
            "Basic YTAyNTJkMTAtODlmZC00NGVlLThlNDItZTA1ZmVkNWE0NzE3",
          "content-type": "application/json",
        },
      }
    );

    return {
      user: data,
      error: false,
    };
  } catch (error) {
    return {
      user: null,
      error: true,
    };
  }
};

const editOneSignalUser = async (playerId: string, email: string) => {
  try {
    const { data } = await axios.put(
      `https://onesignal.com/api/v1/players/${playerId}`,
      {
        app_id: "a33badef-7679-4ceb-8726-cefb38c1801a",
        identifier: email,
        // "tags": {
        //      "first_name": "Jon",
        //      "last_name": "Smith",
        //      "level": "99",
        //      "amount_spent": "6000",
        //      "account_type": "VIP",
        //      "key_to_delete": "\"\""
        // },
        // "amount_spent": "100.99",
        // "country": "US",
        // "language": "en",
        // "notification_types": 1,
        // "timezone": -28800,
        // "device_model": "iPhone5,1",
        // "device_os": "15.1.1",
        // "game_version": "1.1.1",
        // "session_count": 1,
        // "playtime": 600,
        // "lat": 37.563,
        // "long": 122.3255,
        // "last_active": 1665760785
      },
      {
        headers: {
          accept: "*/*",
          //   app_id: "a33badef-7679-4ceb-8726-cefb38c1801a",
          Authorization:
            "Basic YTAyNTJkMTAtODlmZC00NGVlLThlNDItZTA1ZmVkNWE0NzE3",
          "content-type": "application/json",
        },
      }
    );

    return {
      user: data,
      error: false,
    };
  } catch (error) {
    return {
      user: null,
      error: true,
    };
  }
};

const GetAllOneSignalUser = async () => {
  try {
    const { data } = await axios.get(
      "https://onesignal.com/api/v1/players?app_id=a33badef-7679-4ceb-8726-cefb38c1801a&limit=10&offset=0",

      {
        headers: {
          accept: "*/*",
          Authorization:
            "Basic YTAyNTJkMTAtODlmZC00NGVlLThlNDItZTA1ZmVkNWE0NzE3",
          "content-type": "application/json",
        },
      }
    );

    return {
      user: data,
      error: false,
    };
  } catch (error) {
    return {
      user: null,
      error: true,
    };
  }
};

const DeleteUser = async (playerId: string) => {
  try {
    const { data } = await axios.delete(
      `https://onesignal.com/api/v1/players/${playerId}?app_id=a33badef-7679-4ceb-8726-cefb38c1801a`,

      {
        headers: {
          accept: "*/*",
          Authorization:
            "Basic YTAyNTJkMTAtODlmZC00NGVlLThlNDItZTA1ZmVkNWE0NzE3",
          "content-type": "application/json",
        },
      }
    );

    return {
      user: data,
      error: false,
    };
  } catch (error) {
    return {
      user: null,
      error: true,
    };
  }
};

const SendMessageToPhoneNumbers = async (
  phoneNumbers: string[],
  message: string,
  imgUrl: string
) => {
  try {
    const { data } = await axios.post(
      "https://onesignal.com/api/v1/notifications",
      {
        app_id: "4689becb-0906-4dc2-8f7b-f96e3a326765",
        name: "Identifier for SMS Message",
        sms_from: "+15074788370",
        contents: { en: message },
        sms_media_urls: [imgUrl],
        shortenUrls: true,
        include_phone_numbers: phoneNumbers,
      },
      {
        headers: {
          accept: "*/*",
          Authorization:
            "Bearer NzRkNWVkYzItYzQ3Yi00YmE5LTk5NDAtYjNmMThhZjJiOGUz",
          "content-type": "application/json",
        },
      }
    );
    return {
      user: data,
      error: false,
    };
  } catch (error) {
    return {
      user: null,
      error: true,
    };
  }
};

const ReceiveMessageToPhoneNumbers = async (
  phoneNumbers: string[],
  message: string,
  imgUrl: string
) => {
  try {
    const { data } = await axios.post(
      "https://onesignal.com/api/v1/notifications",
      {
        app_id: "4689becb-0906-4dc2-8f7b-f96e3a326765",
        name: "Identifier for SMS Message",
        contents: { en: message },
        sms_media_urls: [imgUrl],
        shortenUrls: true,
        include_phone_numbers: ["+15074788370"],
        sms_from:phoneNumbers[0],
      },
      {
        headers: {
          accept: "*/*",
          Authorization:
            "Bearer NzRkNWVkYzItYzQ3Yi00YmE5LTk5NDAtYjNmMThhZjJiOGUz",
          "content-type": "application/json",
        },
      }
    );
    return {
      user: data,
      error: false,
    };
  } catch (error) {
    return {
      user: null,
      error: true,
    };
  }
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createOneSignalUser,
  editOneSignalUser,
  GetAllOneSignalUser,
  DeleteUser,
  SendMessageToPhoneNumbers,
  ReceiveMessageToPhoneNumbers,
};
