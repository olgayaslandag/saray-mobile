import { Box, Text, Image } from "native-base";
import MenuButton from "../icons/MenuButton";
import UserAvatar from "./UserAvatar";


export default function HeaderUser() {
    return (
        <>
            <Box width="70%">
                <UserAvatar />
            </Box>
            <Box width="30%" alignItems="flex-end" mt="3">
              <MenuButton height={30} width={30} fill="black" />
            </Box>
        </>
    );
}

