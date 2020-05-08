 importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js");
 
 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 var firebaseConfig = {
  apiKey: "AIzaSyBSIFuODOgRW6CCe_cNzUSRqIYnDkO1CZY",
  authDomain: "portal-api-e614f.firebaseapp.com",
  databaseURL: "https://portal-api-e614f.firebaseio.com",
  projectId: "portal-api-e614f",
  storageBucket: "portal-api-e614f.appspot.com",
  messagingSenderId: "876194861701",
  appId: "1:876194861701:web:ac75c01fffc92daaab8fec",
  measurementId: "G-XYR0BMLNMY"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey('BJJ73tAuTys9phW9UTZqOWQqm-DHORDNuuICOQmSSgDv4qkE0oHNo-_Tt5TYA7fv8V2tDHDMDoWWCMCO5KwDQhk');
 // [END initialize_firebase_in_sw]
 


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END background_handler]
