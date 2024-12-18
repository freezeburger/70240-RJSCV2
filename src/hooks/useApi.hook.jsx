
import { useState } from "react";
import { useHttp } from "./useHttp.hook"

export const useApi = (resources) => {

    const [data,setData] = useState([]);

    const http = useHttp();

    const create = async (data) => {
        return await http.post(`/${resources}`, data).then(response => {
            setData([...data, response.data]);
            return response.data;
        });
    }

    const read = async () => {
        return await http.get(`/${resources}`).then(response => {
            setData(response.data);
            return response.data;
        });
    }

    const update = async (id, data) => {   
        return await http.put(`${resources}/${id}`, data).then(response => {
            setData(data.map(item => item.id === id ? response.data : item));
            return response.data;
        });
    }

    const remove = async (id) => {
        return await http.delete(`${resources}/${id}`).then(response => {
            setData(data.filter(item => item.id !== id));
            return response.data;
        });
    }

    return {
        data,
        create,
        read,
        update,
        remove
    }
}