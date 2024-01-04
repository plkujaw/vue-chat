import { ref, watchEffect } from 'vue';
import { projectFirestore } from '@/firebase/config';

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('date');

  const unsubscribeFromRealTimeListener = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().date &&
          results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = 'Could not fetch data.';
    }
  );

  watchEffect((onInvalidate) => {
    // unsubscribe from previous collection when watcher is stopped (component ChatWindow unmounted)
    onInvalidate(() => unsubscribeFromRealTimeListener());
  });

  return { documents, error };
};

export default getCollection;
