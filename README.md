# OneSignal , Supabase with Twilio SMS

## OneSignal Documentation :-

OneSignal is the fastest and most reliable service to send push notifications, in-app messages, SMS, and emails.

SMS is a scalable channel for reaching users in real-time and outside of your app or website. SMS has among the highest open and engagement rates of all messaging channels.


 ## OneSignal SMS Capabilities


- Easily collect phone numbers of your customers using our SMS SDK Methods, Web SDK Phone Prompt, Server API, and/or Dashboard Upload to start sending right away.

- Send SMS & MMS Messages from the OneSignal Dashboard or API.

- Retargeting Messages for users that did or did not interact with your push notifications.

- Add SMS to your Customer Journeys for a true omni-channel approach to customer re-engagement.

## Sending SMS Notifications from Dashboard
https://documentation.onesignal.com/docs/sending-sms-messages Url of SMS Notifications

Navigate to Messages > New Message > New SMS

![](https://files.readme.io/e48c55e-Screen_Shot_2022-10-11_at_10.51.37_AM.png)

Optional: Input a Message Name for internal recognition of the message. See Message Name for more details.

#### Step 1. Audience
The Segments of devices in which you wish to include and exclude from receiving this message.

![](https://files.readme.io/19da76d-Screen_Shot_2022-10-11_at_10.58.50_AM.png)

#### Step 2. Message
Set From Number

Select the phone number that will send the SMS message. We will auto-fetch the list of phone numbers registered with your Twilio account.

Note: If you have registered your own phone number on Twilio and want to use that number to send SMS then Twilio only allows sending domestic messages.

![](https://files.readme.io/2874fc9-Screen_Shot_2022-10-11_at_11.02.05_AM.png)

#### Step 3. Delivery Schedule
SMS & MMS can be sent immediately or scheduled up to 30 days in advance.

![](https://files.readme.io/06e8ead-Screen_Shot_2022-10-11_at_11.05.57_AM.png)

When ready, click Review & Send to review your message and Send Message.


## Supabase Documentation

Every Supabase project comes with a full Postgres database, a free and open source
database which is considered one of the world's most stable and advanced databases.

#### Additional features

- Supabase extends Postgres with realtime functionality using our Realtime Server.

- Every project is a full Postgres database, with postgres level access.

- Supabase manages your database backups.

- Import data directly from a CSV or excel spreadsheet.

#### Tables and Data (https://supabase.com/docs/guides/database/tables)

- Tables are where you store your data.

- You must define the "data type" of each column when it is created. You can add and remove columns at any time after creating a table.

- Supabase provides several options for creating tables. You can use the Dashboard or      create them directly using SQL.

- We provide a SQL editor within the Dashboard, or you can connect to your database
  and run the SQL queries yourself.

 1 Go to the Table Editor page in the Dashboard.

2 Click New Table and create a table with the name todos.

3 Click Save.

4 Click New Column and create a column with the name task and type text.

5 Click Save.


### Send SMS with Twilio Programmable Messaging

https://www.twilio.com/docs/sms/send-messages Url of Send SMS 

Twilio makes sending and receiving SMS easy. Find the documentation, sample code, and developer tools you need to build exactly what you want, fast. We’ll handle the complexity of mobile carrier and global regulations. Let’s get building.




### Built with

#### **next.js**


## Installation

We recommend creating a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:

Step by step setup of the project in local environment.

```bash
  Install node modules
  npm i
```

```bash
   Start Command
   npm run dev
```

    
## Using APIs

### Url for OneSignal documentation

https://documentation.onesignal.com/docs/web-push-quickstart

https://documentation.onesignal.com/docs/troubleshooting-web-push

APIs for Edit devices https://documentation.onesignal.com/reference/edit-device 

APIs for Add devices https://documentation.onesignal.com/reference/edit-device

APIs for Delete devices https://documentation.onesignal.com/reference/delete-user-record

APIs for ending email messages https://documentation.onesignal.com/docs/sending-email

APIs for for show your Subscriptions data https://dashboard.onesignal.com/apps/a33badef-7679-4ceb-8726-cefb38c1801a/players

APIs for or Send to specific Phone Numbers https://documentation.onesignal.com/reference/sms-channel-properties

### Url for Supabase Documentation

Url for Supabase Documentation https://supabase.com/docs/guides/integrations/onesignal#step-4-setting-up-the-supabase-database


Url for create a table in supabase https://supabase.com/docs/guides/database/tables 

### Url for Twilio Documentation

Url for Verified Caller IDs https://console.twilio.com/us1/develop/phone-numbers/manage/verified 

Url for test to sending SMS https://console.twilio.com/us1/develop/sms/try-it-out/send-an-sms

Url for Programmable Messaging Logs https://console.twilio.com/us1/monitor/logs/sms

Url for buy number https://console.twilio.com/us1/develop/phone-numbers/manage/search?frameUrl=%2Fconsole%2Fphone-numbers%2Fsearch%3Fx-target-region%3Dus1&currentFrameUrl=%2Fconsole%2Fphone-numbers%2Fsearch%3FisoCountry%3DUS%26types%255B%255D%3DLocal%26types%255B%255D%3DTollfree%26capabilities%255B%255D%3DSms%26capabilities%255B%255D%3DMms%26capabilities%255B%255D%3DVoice%26capabilities%255B%255D%3DFax%26searchTerm%3D%26searchFilter%3Dleft%26searchType%3Dnumber%26x-target-region%3Dus1%26__override_layout__%3Dembed%26bifrost%3Dtrue