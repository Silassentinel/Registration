import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    },
  Input: {
    height: 40,
    width: 200,
    borderColor: "black",
    backgroundColor: "white",
    color: "#f0a",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft:3,
  },
  BtnStyle: {
    borderColor: "black",
    backgroundColor:"#f0a",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding:5,
    width: 150,
    height: 50,
  },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextElementContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    TextStyle: {
      fontSize: 20,
      color: '#f0a',
      fontWeight: 'bold',
    },
    HeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0a',
      padding:5,
    },
    HeaderText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    imgContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Image: {
      justifyContent: 'center',
    },
  });

export default styles;
