import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null);

const signIn = async (email, password) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Can't login account");
    }
    return res;
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
}

const useLogin = () => {
  return { error, signIn };
}

export default useLogin;
