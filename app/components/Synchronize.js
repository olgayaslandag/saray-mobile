import { useEffect } from "react";
import { fileListApi } from "../api/fileListApi";
import { useDispatch } from "react-redux";
import { synchronize } from "../store/dataSlice";

export default function Synchronize({ dir }) {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const result = await fileListApi({dir});            
            if(result.status)
                dispatch(synchronize(result.data));

            if(!result.status)
                dispatch(synchronize([]));            
        })();
    }, [dir]);

    return null;
}