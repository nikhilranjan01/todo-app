// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBTx6ANTO8qHJEkm-VvqXQQ46JalYJ1U8U",
//   authDomain: "todo-fullstack-app-b93b5.firebaseapp.com",
//   projectId: "todo-fullstack-app-b93b5",
//   storageBucket: "todo-fullstack-app-b93b5.firebasestorage.app",
//   messagingSenderId: "174904227829",
//   appId: "1:174904227829:web:9eec86cfbb034ce58192bc"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

// 🔥 THIS LINE IS MOST IMPORTANT
export const auth = getAuth(app);
