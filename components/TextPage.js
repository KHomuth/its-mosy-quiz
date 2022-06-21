import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";
import { Component } from 'react';
import { Modal, TouchableHighlight, StyleSheet} from 'react-native'


export default class TextPage extends Component {
   
  state = {
      modalVisible: false,
      modal1Visible: false,
      modal2Visible: false,
      modal3Visible: false,
      modal4Visible: false,
   }
   toggleModal(visible) {
    this.setState({ modalVisible: visible });
   }
   toggle1Modal(visible) {
    this.setState({ modal1Visible: visible });
   }
   toggle2Modal(visible) {
    this.setState({ modal2Visible: visible });
   }
   toggle3Modal(visible) {
    this.setState({ modal3Visible: visible });
   }
   toggle4Modal(visible) {
    this.setState({ modal4Visible: visible });
   }
   
   render() {
      return (
        
        <View style={styles.containerBackground}>
         <View style = {styles.container}>
          <Text style={styles.titleText}>Weiterführende Informationen</Text>



          <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
            <Text style={[styles.text, styles.textCenter]} numberOfLines={3}>{Questions.Fragen[0].Zusatztext}</Text>
          </TouchableHighlight>

          <Modal animationType = {"fade"} transparent = {false} propagateSwipe = {true}
               
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <ScrollView> 
                <View style = {styles.modal}>
                    <Text style={[styles.text, styles.textCenter]} >{Questions.Fragen[0].Zusatztext}</Text>
                    <TouchableHighlight style={styles.buttonBeenden} onPress = {() => {
                      this.toggleModal(!this.state.modalVisible)}}>
                      <Text style = {styles.buttonText}>Schließen</Text>
                    </TouchableHighlight>
                </View>
               </ScrollView> 
            </Modal>



          <TouchableHighlight onPress = {() => {this.toggle1Modal(true)}}>
            <Text style={[styles.text, styles.textCenter]} numberOfLines={3}>{Questions.Fragen[1].Zusatztext}</Text>
          </TouchableHighlight>

          <Modal animationType = {"fade"} transparent = {false} propagateSwipe = {true}
               visible = {this.state.modal1Visible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <ScrollView> 
                <View style = {styles.modal}>
                <Text style={[styles.text, styles.textCenter]} >{Questions.Fragen[1].Zusatztext}</Text>
                    <TouchableHighlight style={styles.buttonBeenden} onPress = {() => {
                      this.toggle1Modal(!this.state.modal1Visible)}}>
                      <Text style = {styles.buttonText}>Schließen</Text>
                    </TouchableHighlight>
                </View>
               </ScrollView> 
            </Modal>



          <TouchableHighlight onPress = {() => {this.toggle2Modal(true)}}>
            <Text style={[styles.text, styles.textCenter]} numberOfLines={3}>{Questions.Fragen[2].Zusatztext}</Text>
          </TouchableHighlight>

          <Modal animationType = {"fade"} transparent = {false} propagateSwipe = {true}
               visible = {this.state.modal2Visible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <ScrollView> 
                <View style = {styles.modal}>
                <Text style={[styles.text, styles.textCenter]}>{Questions.Fragen[2].Zusatztext}</Text>
                    <TouchableHighlight style={styles.buttonBeenden} onPress = {() => {
                      this.toggle2Modal(!this.state.modal2Visible)}}>
                      <Text style = {styles.buttonText}>Schließen</Text>
                    </TouchableHighlight>
                </View>
               </ScrollView> 
            </Modal>
          
          

          <TouchableHighlight onPress = {() => {this.toggle3Modal(true)}}>
            <Text style={[styles.text, styles.textCenter]} numberOfLines={3}>{Questions.Fragen[3].Zusatztext}</Text>
          </TouchableHighlight>

          <Modal animationType = {"fade"} transparent = {false} propagateSwipe = {true}
               visible = {this.state.modal3Visible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <ScrollView> 
                <View style = {styles.modal}>
                <Text style={[styles.text, styles.textCenter]}>{Questions.Fragen[3].Zusatztext}</Text>
                    <TouchableHighlight style={styles.buttonBeenden} onPress = {() => {
                      this.toggle3Modal(!this.state.modal3Visible)}}>
                      <Text style = {styles.buttonText}>Schließen</Text>
                    </TouchableHighlight>
                </View>
               </ScrollView> 
            </Modal>
        


          <TouchableHighlight onPress = {() => {this.toggle4Modal(true)}}>
            <Text style={[styles.text, styles.textCenter]} numberOfLines={3}>{Questions.Fragen[4].Zusatztext}</Text> 
          </TouchableHighlight>

          <Modal animationType = {"fade"} transparent = {false} propagateSwipe = {true}
               visible = {this.state.modal4Visible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <ScrollView> 
                <View style = {styles.modal}>
                <Text style={[styles.text, styles.textCenter]}>{Questions.Fragen[4].Zusatztext}</Text> 
                    <TouchableHighlight style={styles.buttonBeenden} onPress = {() => {
                      this.toggle4Modal(!this.state.modal4Visible)}}>
                      <Text style = {styles.buttonText}>Schließen</Text>
                    </TouchableHighlight>
                </View>
               </ScrollView> 
            </Modal>
         </View>
         </View>
      )
   }
}
