import { useEffect, useState } from "react"

export const useClasses = () =>{
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        fetch('https://artics-summer-camp-server.vercel.app/classes')
        .then(res => res.json())
        .then(data =>{
            setClasses(data);
            setLoading(false);
        })

    }, [])

    return [classes, loading];
}