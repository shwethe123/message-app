import { ref } from "vue";
import { auth } from "../firebase/config"

const error = ref(null);

const createAccount = async (email, password, displayName) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Could not create new user");
    }
    await res.user.updateProfile({ displayName });
    return res;
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
}

const useSignup = () => {
  return { error, createAccount };
}

export default useSignup;
