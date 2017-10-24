import data from './build_db.json';
import firebase from 'firebase';

// const database = firebase.database();
//
// database.ref('skills').on('value', (snapshot) => {
//   const skills = []
//   snapshot.forEach((child) => {
//     skills.push({
//       id: child.key,
//       ...child.val()
//     })
//   })
// })

export default () => data;
