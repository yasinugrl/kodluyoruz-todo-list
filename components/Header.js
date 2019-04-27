import React from 'react';
import { View, Text, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

export const Header = (data) => {
    return (
        <View style={styles.view1}> 
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> TODO LİST APP  </Text>
                <Text style= {{ color: 'white'}}>{data.isLogin ? null : 'login ol'}</Text>
        </View>
    );
}


const styles = {
    view1: {  
        flex: 1, 
        width, 
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        
    },
  };


