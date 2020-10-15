import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
         {/* --Title Welcome-- */}
        <Image
          style={{width: '100%', height:300}}
          source={ require('./assets/imap/login-lo.png')}
          resizeMode="contain"
        />
        <Text style={{ fontSize:40, fontWeight: 'bold'}}>Hello</Text>
        <Text style={{
           fontSize: 16,
            color: 'gray',
            textAlign: 'center',
            marginHorizontal:20
            }}>Welcome to console.login. A my App of designing login screen
             </Text>

             {/* --Bocial Icon-- */}
            <View style={{flexDirection:'row', margin: 20, paddingVertical: 20}}>
              <TouchableOpacity style={{
                 backgroundColor: '#4dd2ff',
                 padding:10,
                 width: 150,
                 borderRadius: 30,
                 marginHorizontal: 2,
                 }}>
                <Text style={{ textAlign: 'center', color:'#fff', fontSize: 18}}>login</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                 backgroundColor: '#fff',
                 padding:10,
                 width: 150,
                 borderRadius: 30,
                 marginHorizontal: 2,
                 borderWidth: 1,
                 borderColor: '#0000ff',
                 }}>
                <Text style={{ textAlign: 'center', color:'#0000ff', fontSize: 18}}>Sign In</Text>
              </TouchableOpacity>
            </View>
              {/* --Social Icon-- */}
              <Text style={{ fontSize: 16, marginTop: 10}}>Or via Social media</Text>
            <View style={{ flexDirection: 'row',marginTop: 5}}>
              <View style={{
                 height: 50,
                  width:50,
                   borderRadius:50/2,
                    backgroundColor: '#4dd2ff',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom:5}}>f</Text>
              </View>

              <View style={{
                 height: 50,
                  width:50,
                   borderRadius:50/2,
                    backgroundColor: '#ff3333',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom:5}}>G</Text>
              </View>

              <View style={{
                 height: 50,
                  width:50,
                   borderRadius:50/2,
                    backgroundColor: '#b84dff',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom:5}}>In</Text>
              </View>
              
            </View>
             {/* --End Social Icon-- */}

      </View>
    )
  }
}

const styles=StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
     backgroundColor: '#ffb3ff'
  }
})