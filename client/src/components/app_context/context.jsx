import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext();

export function Context({ children }) {
    const [trust, setTrust] = useState(localStorage.getItem('trust-shopping') === 'true')
    const [boot, setBoot] = useState(true)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (trust) {
            setTrust(localStorage.getItem('id-shopping'))
            //redirect user to home page
            setBoot(false)
        } else {
            //redirect user to login page
            setBoot(false)
        }
    }, [trust])

    const [currentPath, setCurrentPath] = useState(null);
    const [sizeLarge, setSizeLarge] = useState(window.innerWidth < 1200);
    const [sizeSmall, setSizeSmall] = useState(window.innerWidth < 680);
    const [sizeMidSmall, setSizeMidSmall] = useState(window.innerWidth < 900);
    const [sizeHightSmall, setSizeHightSmall] = useState(window.innerHeight < 400);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth < 1200) {
                setSizeLarge(true);
            } else {
                setSizeLarge(false);
            }

            if (window.innerWidth < 680) {
                setSizeSmall(true);
            } else {
                setSizeSmall(false);
            }

            if (window.innerWidth < 900) {
                setSizeMidSmall(true);
            } else {
                setSizeMidSmall(false);
            }

            if (window.innerHeight < 400) {
                setSizeHightSmall(true);
            } else {
                setSizeHightSmall(false);
            }
        };

        handleWindowResize();

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, [setSizeLarge, setSizeSmall]);

    return (
        <AppContext.Provider value={{
            boot, setBoot, trust, setTrust, currentPath, setCurrentPath, sizeLarge, setSizeLarge, sizeSmall, setSizeSmall,
            expanded, setExpanded, sizeMidSmall, setSizeMidSmall, sizeHightSmall, setSizeHightSmall
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}