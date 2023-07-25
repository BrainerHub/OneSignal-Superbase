import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
  await OneSignal.init({ appId: 'a33badef-7679-4ceb-8726-cefb38c1801a', allowLocalhostAsSecureOrigin: true});
  await OneSignal.showSlidedownPrompt();
}