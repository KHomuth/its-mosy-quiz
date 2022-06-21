import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerBackground: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
      },
      container: {
        top: 85,
        position: 'absolute',
        maxWidth: 768,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
      },
      titleText: {
        fontFamily: 'ZenLoop',
        fontSize: 60,
        color: '#00517A',
        marginLeft: 30, 
      },
      text: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00517A',
        margin: 20,
        marginLeft: 30, 
        marginRight: 30,
        textAlign: 'center'
      },
      button: {
        backgroundColor: '#00517A',
        marginBottom: 20,
        marginLeft: 20, 
        marginRight: 20,
        width: 300,
        borderRadius: 10,
      },
      buttonText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#ece6dd',
        margin: 20,
        textAlign: 'center'
      },
      modalText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 800,
        color: '#00517A',
        margin: 20,
        textAlign: 'center'
      }
})

export default styles;