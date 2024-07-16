import React, { useState, useRef } from 'react'
import {View,Text, Modal, TouchableOpacity, Dimensions} from "react-native";
import {Entypo, FontAwesome5} from "@expo/vector-icons"

import BottomSheet,{
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { GestureHandlerRootView } from 'react-native-gesture-handler';


const {width, height} = Dimensions.get('window');

export default function Prueba(){

    // const [modal, setModal]= useState(false);
    const bottomSheetModalRef = useRef(null);
    const func = ()=>{bottomSheetModalRef?.current?.present()}
    const snapPoints = [height * 0.3, height * 0.5, height * 0.9]
    
    return(

        <GestureHandlerRootView style={{flex:1}}>
        <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              snapPoints={snapPoints}
            >
                <View style={{
                    width:width,
                    height:height,
                    alignItems:"flex-start",
                    backgroundColor:"#fff",
                    paddingHorizontal:width*0.05
                }}>
                    <Text style={{
                        fontSize:width * 0.05,
                        fontWeight:"800",
                        color:"#000"
                    }}>
                        HOLA, MUNDO
                    </Text>
                    <Text style={{
                        fontSize:width * 0.02,
                        fontWeight:"200"

                    }}>
                        Como estas el dia de hoy, espero que estes bien.
                    </Text>

                </View>
            </BottomSheetModal>
            <View style={
                {
                    flex: 1,
                    justifyContent: "center",
                    alignItems:"center",
                    backgroundColor: "#000",
                }
            }>
                <TouchableOpacity onPress={()=> func()}
                    style={{
                        width: width * 0.3,
                        height: height * 0.3,
                        backgroundColor: "#ffff",
            
                    }}
                    >
                <Text>Hola</Text>
                </TouchableOpacity>
            </View>
        </BottomSheetModalProvider>
            </GestureHandlerRootView>
    )
}


