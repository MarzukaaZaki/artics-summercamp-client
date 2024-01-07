import { useEffect, useState } from "react"

export const useInstructors = () =>{
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data =>{
            setInstructors(data);
            setLoading(false);
        })
    }, [])

    return [instructors, loading];
}