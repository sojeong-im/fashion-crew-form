// Firebase Configuration
// Project: fashion-crew-form

const firebaseConfig = {
    apiKey: "AIzaSyDJf2no17murmqBQwsQTPka0CVaec3Zrdw",
    authDomain: "fashion-crew-form.firebaseapp.com",
    projectId: "fashion-crew-form",
    storageBucket: "fashion-crew-form.firebasestorage.app",
    messagingSenderId: "305126388776",
    appId: "1:305126388776:web:4a4fdad52e39394d2ff11d",
    measurementId: "G-1TG4J16RVD"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firestore 인스턴스
const db = firebase.firestore();

// 컬렉션 이름
const APPLICATIONS_COLLECTION = 'applications';
