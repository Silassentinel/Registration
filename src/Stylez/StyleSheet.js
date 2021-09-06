import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  Input: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    color: "#000"
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextElementContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    HeaderContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:0,
    },
    HeaderText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    imgContainer: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth:1920,
      maxHeight:1080,
    },
    Image: {
      width: 800,
      height: 600,
      zIndex: -1,
    },
  });

export default styles;
