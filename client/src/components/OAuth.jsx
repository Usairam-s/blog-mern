import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../Firebase";
import { useDispatch } from "react-redux";
import { signInSucess } from "../../redux/user/userslice";
import { useNavigate } from "react-router-dom";
export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //pass app that we are setting in firebase.js
  const auth = getAuth(app);
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    //ask user ever time to select the account not just automatically log in
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      //calling a function for signin pop
      const resultFromGoogle = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: resultFromGoogle.user.displayName,
          email: resultFromGoogle.user.email,
          googlePhotoUrl: resultFromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(signInSucess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // so this button has event which trigger google auth functionality

    <Button
      type="button"
      onClick={handleGoogleClick}
      gradientDuoTone="pinkToOrange"
      outline
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
}
