// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAehdNw3vVcSARpzOMeL3nzdsTrCJqmulc",
    authDomain: "mywalls-5ea7b.firebaseapp.com",
    projectId: "mywalls-5ea7b",
    storageBucket: "mywalls-5ea7b.appspot.com",
    messagingSenderId: "353751760974",
    appId: "1:353751760974:web:c133e174c8e265bd10c31f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export var db = getFirestore(app);






// class WeatherBulletin extends React.Component {
//     state = {
//         Data: [],
//         loading: true
//     }
//     async componentDidMount() {

//         const DbCollection = collection(db, "News");
//         await getDocs(DbCollection).then(async (snapshort) => {
//             snapshort.docs.forEach((doc) => {
//                 this.state.Data.push({ ...doc.data(), id: doc.id });
//             });
//         });
//         this.setState({ loading: false })

//     }

//     render() {
//         return (
//             this.state.loading ? (
//                 <>
//                     <PreLoader />
//                 </>
//             ) : (

//                 <NewsContextProvider>
//                     <News items={this.state.Data} />
//                 </NewsContextProvider>
//             )
//         );

//     }
// }




