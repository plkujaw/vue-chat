import { ref } from 'vue';
import { auth } from '@/firebase/config';

const currentUser = ref(auth.currentUser);

auth.onAuthStateChanged((user) => {
  // console.log('User state change. Current user is:', user);
  currentUser.value = user;
});

const getUser = () => {
  return { currentUser };
};

export default getUser;
