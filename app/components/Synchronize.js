import { useEffect, useState } from "react";
import { fileListApi } from "../api/fileListApi";
import { useDispatch } from "react-redux";
import { synchronize } from "../store/dataSlice";
import { Modal, View, Text, Image } from "native-base";
import LogoIcon from "./icons/LogoIcon";


export default function Synchronize({ dir }) {
    const [process, setProcess] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setProcess(true);
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
            
            setProcess(false)
        })();
    }, [dir]);

    return (
        <Modal isOpen={process} animationType="slide" transparent={true} bgColor="white">
            <View>
                <LogoIcon />
            </View>
        </Modal>
    );
}