import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access_token')

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:6001/carts?email=${user?.email}`)
                // , {
                // headers: {
                //     authorization: `Bearer ${token}`
                // }
                return res.json();


            },
            })
            return [cart, refetch]
           
        // },
    // })

    // return [cart, refetch]

}
export default useCart;
