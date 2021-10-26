import { useState, useEffect } from 'react'

export const UseNetwork = (): any => {
    const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine)
    useEffect(() => {
        setIsOnline(window.navigator.onLine)
    }, [isOnline])

    return {isOnline}
}

export default UseNetwork;