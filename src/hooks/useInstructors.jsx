import { useEffect, useState } from "react"

export const useInstructors = () =>{
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://artics-summer-camp-server.vercel.app//instructors')
        .then(res => res.json())
        .then(data =>{
            setInstructors(data);
            setLoading(false);
        })
    }, [])

    return [instructors, loading];
}