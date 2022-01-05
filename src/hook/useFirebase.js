import { useEffect, useState } from "react"
import initializeFirebase from "../firebase/firebase.init"
import { getAuth, signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [err, setErr] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    // create with email and password account...........
    const createWithEmailAuth = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name }
                setErr("")
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                })
            }).catch((error) => {
                setErr(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    // login with email and password.................. 
    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                setErr('')
                setUser(user)
            }).catch((error) => {
                setErr(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    // logout......................
    const logOut = () => {

        signOut(auth).then(() => {
            setErr("")
        }).catch((error) => {
            setErr(error.message)
        })
            .finally(() => setIsLoading(false))

    }


    // user observation.............
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [auth])

    // Display error
    if (err) {
        swal("An error Occurred!", err, "error")
    }


    return {
        createWithEmailAuth,
        loginWithEmail,
        logOut,
        user,
        isLoading,
    }


}
export default useFirebase;