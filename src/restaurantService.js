import { async } from "@firebase/util";
import { collection, doc, setDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseFireStore } from "./firebase"

const createRestaurant= async (restaurant) => {
    const newDoc = doc(collection(FirebaseFireStore, "/restaurants"));
    await setDoc(newDoc, restaurant);
    console.log('The restaurant has been created');
}

const listRestaurants= async () => {
    const restaurantsRef = collection(FirebaseFireStore,  "/restaurants");
    const docs = await getDocs(restaurantsRef);
    const restaurants = [];
    docs.forEach(document => {
        console.log(document.id, document.data());
        restaurants.push({ id: document.id,
             name: document.data().name,
             location: document.data().location,
             description: document.data().description,
             image: document.data().image
        });
    });
    console.log(restaurants);
    return restaurants;
}

export {
    createRestaurant,
    listRestaurants,
}