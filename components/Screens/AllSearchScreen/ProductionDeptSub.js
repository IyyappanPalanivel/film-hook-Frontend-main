import React from "react";

import { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, searchQuery, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const ProductionDeptSub=()=> {
    const navigation = useNavigation();
    const jobPosts = [
        {
            id: 1,
            profession: 'EXECUTIVE PRODUCER',
        },
        {
            id: '2',
            profession: 'PRODUCTION MANAGER',
        },
        {
            id: '3',
            profession: 'ASSISTANT PRODUCTION MANAGER',
        },
       
        {
            id: '4',
            profession: 'PRODUCTION UNIT MANAGER',
        },
        {
            id: '5',
            profession: 'MANAGER',
        },
        {
            id: '6',
            profession: 'ASSISTANT MANAGER',
        },
        {
            id: '7',
            profession: 'PRODUCTION ASSISTANT',
        },
       

    ];

    const JobPosts = ({ profession }) => (
        <ImageBackground style={styles.inputContainer} source={require('../../Assets/Login_page/Medium_B_User_Profile.png')} resizeMode='stretch'>
            <View style={styles.inputContainer}>
            <Text style={styles.title}>{profession}</Text>
        </View>
        </ImageBackground>

    );

    const [select, setSelect] = useState(jobPosts)
    const handleOnPress = (item) => {
        const newItem = select.map((value) => {
            if (item.profession == 'EXECUTIVE PRODUCER') {
                return (
                    navigation.navigate("Director")
                )
            }
            if (item.profession == 'PRODUCTION MANAGER') {
                return (
                    navigation.navigate("Director")
                )
            }
            if (item.profession == 'ASSISTANT PRODUCTION MANAGER') {
                return (
                    navigation.navigate("Director")
                )
            }
            
            if (item.profession == 'PRODUCTION UNIT MANAGER') {
                return (
                    navigation.navigate("Director")
                )
            }
            if (item.profession == 'MANAGER') {
                return (
                    navigation.navigate("Director")
                )
            }
            if (item.profession == 'ASSISTANT MANAGER') {
                return (
                    navigation.navigate("Director")
                )
            }
            if (item.profession == 'PRODUCTION ASSISTANT') {
                return (
                    navigation.navigate("Director")
                )
            }

        }
        )
        setSelect(newItem)


    }

    return (
        <View style={styles.container}>

            <View style={styles.flatListContainer}>
                <FlatList
                    // data={jobPosts.filter((item) => ((item.profession).toLocaleLowerCase()).includes(search.toLocaleLowerCase()))}
                    data={jobPosts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (<TouchableOpacity onPress={() => handleOnPress(item)} style={styles.box}><JobPosts {...item} />
                    </TouchableOpacity>)}
                // style={{margin:5}}
                />
            </View>
        </View>

    )


};

export default ProductionDeptSub;

const styles = StyleSheet.create({

    content: {
       margin: responsiveWidth(2),
       width: responsiveWidth(75),
       height: responsiveHeight(6),
       marginTop:responsiveHeight(2)
       
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    flatListContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    // box: {

    //     width: responsiveWidth(95),
    //     height: responsiveHeight(9),
    //     margin: responsiveHeight(0.3),
    //     borderRadius: responsiveWidth(5),
    //     backgroundColor: '#fff',
    //     borderWidth: 1,
    //     alignContent:'center'
    // },

    title: {
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold',
        color: 'black',
      
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: responsiveWidth(3),
        height: responsiveHeight(9.2),
        width: responsiveWidth(87.5),
        margin: responsiveWidth(1),
        justifyContent:'center',
        

    },


});

