import {firebaseDb} from './firebase';

export const chatApi = (roomId) => {
    const ref = firebaseDb.ref('chat/' + roomId);
    return new Promise((resolve) => {
      ref.once('value', (snapshot) => {
        const m = snapshot.val();
        if(m !== null) {
          let chat = [];
          snapshot.forEach((childSnapshot) => {
            const m2 = childSnapshot.val();
            chat.push({
              'userId' : m2.userId,
              'text' : m2.text,
              'today' : m2.today,
              'key': childSnapshot.key,
            });
          });
          resolve(chat);
        }
        else {
          resolve(null);
        };        
      });
  });
};
