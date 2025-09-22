// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Конфиг Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDjfR48O3J1CMmmDSbvwAdiz9FcfybEc68",
  authDomain: "dinarawedding-a3f73.firebaseapp.com",
  databaseURL: "https://dinarawedding-a3f73-default-rtdb.firebaseio.com",
  projectId: "dinarawedding-a3f73",
  storageBucket: "dinarawedding-a3f73.appspot.com",
  messagingSenderId: "984757824954",
  appId: "1:984757824954:web:4af03f8bc5a1d0a359c183",
  measurementId: "G-M6SH05YRDN",
};

// Проверяем, есть ли уже инициализированный app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Инициализируем Google Analytics только если не localhost
let analytics;
if (window.location.hostname !== "localhost") {
  try {
    const { getAnalytics } = await import("firebase/analytics");
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn("Analytics не удалось инициализировать:", error);
  }
}

const db = getDatabase(app);

export { app, db, analytics };
