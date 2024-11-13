import { useEffect, useState } from "react";


const useWindowSize = () => {
    const getWindowSize = () => ({
        width: window.innerWidth,
        height: window.innerHeight
    })

    
    const [ windowSize, setWindowSize ] = useState(getWindowSize);




    useEffect(() => {
        const handler = () => setWindowSize(getWindowSize);

        window.addEventListener('resize', handler)

        return () => window.removeEventListener('resize', handler);
    }, [])


    return windowSize;
}


export default useWindowSize;