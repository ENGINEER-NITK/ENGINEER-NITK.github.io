import { useState, useEffect } from 'react';

import { auth } from '../config/firebase';

export default function useAuth() {
    const [login, setLogin] = useState({
        loggedIn: false,
        user: null
    })

    useEffect(() => {
        const listener = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                const user = {
                    email: authUser.email,
                    uid: authUser.uid
                }
                setLogin({
                    user: user,
                    loggedIn: true,
                })
            } else {
                console.log(authUser)
                setLogin({
                    user: null,
                    loggedIn: false
                })
            }
        });

        return () => listener?.();
    }, []);

    return [login]
}
