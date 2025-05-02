import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAphg6J6ReJhYlXKgsBwe8Jv_05rWjrEDo",
    authDomain: "dragon-news-auth-9a387.firebaseapp.com",
    projectId: "dragon-news-auth-9a387",
    storageBucket: "dragon-news-auth-9a387.firebasestorage.app",
    messagingSenderId: "665183625343",
    appId: "1:665183625343:web:6eeb65c966dfb96de31f4a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);