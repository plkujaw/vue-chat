import { ref } from 'vue';
import { auth } from '@/firebase/config';
import router from '@/router';

const error = ref(null);

const signup = async (username, email, password) => {
  error.value = null;
  try {
    const res = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error('Could not complete the signup');
    }
    await res.user.updateProfile({ displayName: username });
    error.value = null;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return {
    error,
    signup,
  };
};

export default useSignup;
