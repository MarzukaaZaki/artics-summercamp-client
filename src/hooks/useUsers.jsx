import { useEffect, useState } from "react"


export const useUsers = () =>{

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        fetch('https://artics-summer-camp-server.vercel.app/users')
        .then(res => res.json())
        .then(data =>{
            setUsers(data);
            setLoading(false);
        })

    }, [])

    return [users, loading];


}