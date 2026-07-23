import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBY9M_ppjtCGie-sMqP26kMc3v6OwKySpo",
    authDomain: "church-69050.firebaseapp.com",
    databaseURL: "https://church-69050-default-rtdb.firebaseio.com",
    projectId: "church-69050",
    storageBucket: "church-69050.firebasestorage.app",
    messagingSenderId: "1004481195878",
    appId: "1:1004481195878:web:10bf669560a97fe15362a7",
    measurementId: "G-49NEF3EMMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const listFolderItems = async (folderPath: string) => {
    try {
        const folderRef = ref(storage, folderPath);
        const res = await listAll(folderRef);
        return res.items;
    } catch (error) {
        console.error("Error listing items from Firebase Storage:", error);
        return [];
    }
};

export const getPhotoUrl = async (itemRef: any): Promise<string> => {
    return await getDownloadURL(itemRef);
};

export const fetchFolderPhotos = async (folderPath: string): Promise<string[]> => {
    const items = await listFolderItems(folderPath);
    const urlPromises = items.map((itemRef) => getPhotoUrl(itemRef));
    return await Promise.all(urlPromises);
};

export default app;
