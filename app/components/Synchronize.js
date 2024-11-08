import { useEffect } from "react";
import { fileListApi } from "../api/fileListApi";
import { useDispatch } from "react-redux";
import { synchronize } from "../store/dataSlice";

export default function Synchronize({ dir }) {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const result = await fileListApi({dir});            
            if(result.status) {
                const items = result.data.map(item => {
                    return {
                        dir: {
                            title: item.dir.title,
                            path: item.dir.path
                        },
                        dirs: item.dirs
                    }
                });
                dispatch(synchronize(items));
            }

            if(!result.status)
                dispatch(synchronize([]));            
        })();
    }, [dir]);

    return null;
}