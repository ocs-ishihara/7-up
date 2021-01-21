import {firebaseDb} from './firebase';

export const loginApi = (id, password) => {
    const ref = firebaseDb.ref('users/' + id);
    return new Promise((resolve) => {
      ref.once('value', (snapshot) => {
          const m = snapshot.val();
          if(m !== null) {
            if(password === m.passWord) {
              resolve({
                userId: id,
                userName: m.userName,
                profileImage: m.profileImage,
                hash: m.passWord,
              });
            }
            else {
              resolve(null);
            };
          }
          else {
            resolve(null);
          };
      });
  });
};
