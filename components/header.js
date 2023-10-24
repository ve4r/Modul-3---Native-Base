
import { Image ,Box, Pressable} from "native-base";
const Header = (props) => {
    return (
        <Box backgroundColor={"#AA0002"} flexDirection={"row"} justifyContent={"space-between"} padding={15}>
            <Pressable onPress={() => props.drawer.current.openDrawer()}>
                <Image alt="Menu"
                    source={require("../assets/menu.png")}
                    width={18} height={18}
                />
            </Pressable>
            <Box>
                <Box flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                    <Image alt="facebook"
                        source={require("../assets/facebook.png")}
                        width={5} marginRight={3}  height={5} 
                    />
                    <Image alt="youtube"
                        source={require("../assets/youtube.png")}
                        width={5} marginRight={3} height={5} 
                    />
                    <Image alt="twitter"
                        source={require("../assets/twitter.png")}
                        width={5} marginRight={3} height={5} 
                    />
                    <Image alt="search"
                        source={require("../assets/search.png")}
                        width={5} height={5} 
                    />
                </Box>
            </Box>
        </Box>
    );
};



export default Header;



