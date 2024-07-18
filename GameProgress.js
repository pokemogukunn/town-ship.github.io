import React, { useState, useEffect } from 'react';
import { auth, firestore } from './firebaseConfig';

const GameProgress = () => {
  const [progress, setProgress] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const docRef = firestore.collection('gameProgress').doc(user.uid);
      docRef.get()
        .then(doc => {
          if (doc.exists) {
            setProgress(doc.data());
          }
        });
    }
  }, [user]);

  const saveProgress = () => {
    const docRef = firestore.collection('gameProgress').doc(user.uid);
    docRef.set({
      score: 100,
      level: 5,
      // 他のデータ
    })
    .then(() => {
      console.log('Progress saved');
    })
    .catch(error => {
      console.error('Error saving progress:', error);
    });
  };

  return (
    <div>
      <h2>Game Progress</h2>
      {progress ? (
        <div>
          <p>Score: {progress.score}</p>
          <p>Level: {progress.level}</p>
        </div>
      ) : (
        <p>Loading progress...</p>
      )}
      <button onClick={saveProgress}>Save Progress</button>
    </div>
  );
};

export default GameProgress;
