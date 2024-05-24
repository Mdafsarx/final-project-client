import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";
import axiosUrl from "../Hooks/axiosUrl";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const axiosBase=axiosUrl()

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
     const unSubscribe=onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
            if(user){
              axiosBase.post('/jwt',{email:user?.email})
              .then(res=>{
                if(res.data.token){
                    localStorage.setItem('token',res.data.token);
                }
              })
            }
            else{
                localStorage.removeItem('token')
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    


    function singIn(email,password){
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const register=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    function update(name,url){
      return updateProfile(auth.currentUser, {
            displayName:name, photoURL: url
          })
        
    }

    function logout(){
        setLoading(true)
        signOut(auth)
        .then(()=>{
            toast.success('logout successful')
        })
    }
     
    const googleProvider=new GoogleAuthProvider();
    function google(){
        setLoading(true);
       return signInWithPopup(auth,googleProvider)
    }


    const Auth = {user,loading,singIn,register,logout,google,update}
    return (
        <AuthContext.Provider value={Auth}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;