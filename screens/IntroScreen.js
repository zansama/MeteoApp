import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import {View, Text, Dimensions, AsyncStorage} from "react-native";

const { width } = Dimensions.get('window')

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameStyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
    },

};

const IntroScreen = props => {
    // useEffect(() => {
    //     async function getName() {
    //         const temp = await AsyncStorage.getItem('name');
    //         setName(temp);
    //     }
    //     getName();
    // }, []);

    const test = useSelector(state => state.app.name);

    useEffect(() =>{
        setTimeout(() => {
            props.navigation.navigate('App');
        }, 5000)
    }, []);

    const  [name, setName] = useState('');

    return(
        <View style={styleSheet.container}>
            <Text style={styleSheet.nameStyle}>Hello {test}</Text>
        </View>
            );
};

export default IntroScreen;
