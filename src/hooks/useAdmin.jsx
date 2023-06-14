import { useAuth } from "./useAuth"
import { useAxiosSecure } from "./useAxiosSecure";
import {useQuery} from '@tanstack/react-query'

export const useAdmin = () =>{

    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`users/admin/${user?.email}`)
            console.log('is admin response', res);
            return res.data.admin;
 
        }
    })
return [isAdmin, isAdminLoading];    

}