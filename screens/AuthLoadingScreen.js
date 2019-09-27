import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {AsyncStorage, ActivityIndicator, StatusBar, View} from "react-native";
import {useDispatch} from "react-redux";


const AuthLoadingScreen = props => {
   _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('name');
       name.app.setName(name);
      props.navigation.navigate(userToken ? 'App' : 'Auth')
  };

   const name = useDispatch();

    useEffect(() => {
      _bootstrapAsync()
  }, []);

  return (
      <View>
          <ActivityIndicator/>
          <StatusBar barStyle="default"/>
      </View>
  );
};

AuthLoadingScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default AuthLoadingScreen;