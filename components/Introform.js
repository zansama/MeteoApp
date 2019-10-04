import React from 'react';
import {View, Text, TextInput, Button} from "react-native";


const Introform = ({handle, name, style, method}) => {
        return(
            <View style={style.container}>
                <Text style={style.label}>Prénom</Text>
                <TextInput
                    style={style.input}
                    onChangeText={(text) => method(text)}
                    value={name}


                />
                <Button
                    onPress={handle}
                    title="OK"
                    color="#841584"
                />
            </View>
         )
};

export default Introform;