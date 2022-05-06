import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Input , Button , Icon , Box ,Image ,AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.Continer}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Sign In</Text>
            </View>
            <View style={styles.Text2}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.SignupText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/* Username OR Email Phone Input Field */}
            <View style={styles.Buttonstyle}>
                <View style={styles.emailInput}>
                    <Input
                       InputLeftElement={
                           <Icon 
                              as={<FontAwesome5 name="user-secret"/>}
                              size="sm"
                              m={2}
                              _light={{
                                  color: 'black',
                              }}
                              _dark={{
                                  color: 'gray.300',
                              }}
                           />
                       }
                       variant= "outline"
                       placeholder='Username or Email'
                       keyboardType='email-address'
                       _light={{
                           placeholderTextcolor: "blueGray.400",
                       }}
                       _dark={{
                           placeholderTextColor: "blueGray.50",
                       }}
                    />
                </View>
            </View>

            {/* PAssword input field */}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                <Input
                       InputLeftElement={
                           <Icon 
                              as={<FontAwesome5 name="key"/>}
                              size="sm"
                              m={2}
                              _light={{
                                  color: 'black',
                              }}
                              _dark={{
                                  color: 'gray.300',
                              }}
                           />
                       }
                    variant= "outline"
                    secureTextEntry={true}
                    placeholder='Password'
                    keyboardType='visible-password'
                    _light={{
                        placeholderTextcolor: "blueGray.400",
                    }}
                    _dark={{
                        placeholderTextColor: "blueGray.50",
                    }}
                    />
                </View>
            </View>

            {/* Button */}
            <View style={styles.Buttonstyle}>
                <Button style={styles.ButoonDesign}>
                    Login
                </Button>
            </View>

            {/* Line */}

            <View style={styles.LineStyle}>
                <View style={{flex:1, height:1,backgroundColor:'black'}}/>
                <View>
                    <Text style={{width:50, textAlign:'center'}}>OR</Text>
                </View>
                <View style={{flex:1, height: 1 , backgroundColor: 'black'}}/>
            </View>

            {/* Box */}
            <View style={styles.boxStyle}>


                <Box 
                 onPress={()=> navigation.navigate('#')}
                 style={{height: 65 , width: 80, marginLeft:20}}
                 shadow={3}
                 _light={{
                     backgroundColor: "gray.50"
                 }}
                 _dark={{
                     backgroundColor: "gray.700"
                 }}
                >
                    <AspectRatio radio={1/1}>
                        <Image
                           rounded='lg'
                           resizeMode='stretch'
                           source={{
                               uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png"
                           }}
                           alt="Image"
                        />
                    </AspectRatio>
                </Box>


                <Box 
                 onPress={()=> navigation.navigate('#')}
                 style={{height: 65 , width: 80, marginLeft:20}}
                 shadow={3}
                 _light={{
                     backgroundColor: "gray.50"
                 }}
                 _dark={{
                     backgroundColor: "gray.700"
                 }}
                >
                    <AspectRatio radio={1/1}>
                        <Image
                           rounded='lg'
                           source={{
                               uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
                           }}
                           alt="Image"
                        />
                    </AspectRatio>
                </Box>


                <Box 
                 onPress={()=> navigation.navigate('#')}
                 style={{height: 65 , width: 80, marginLeft:20}}
                 shadow={3}
                 _light={{
                     backgroundColor: "gray.50"
                 }}
                 _dark={{
                     backgroundColor: "gray.700"
                 }}
                >
                    <AspectRatio radio={1/1}>
                        <Image
                           rounded='lg'
                           source={{
                               uri: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png"
                           }}
                           alt="Image"
                        />
                    </AspectRatio>
                </Box>


                <Box 
                 onPress={()=> navigation.navigate('#')}
                 style={{height: 70 , width: 80, marginLeft:20}}
                 shadow={3}
                 _light={{
                     backgroundColor: "gray.50"
                 }}
                 _dark={{
                     backgroundColor: "gray.700"
                 }}
                >
                    <AspectRatio radio={1/1}>
                        <Image
                           rounded='lg'
                           source={{
                               uri: "https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png"
                           }}
                           alt="Image"
                        />
                    </AspectRatio>
                </Box>


            </View>
        </View>

    )
}

export default () => {
   return(
    <NativeBaseProvider>
         <Login/>
     </NativeBaseProvider>
)
}


const styles = StyleSheet.create({
    Continer:{
        flex:1,
        backgroundColor: '#fff',
    },
    LoginText:{
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middle:{
        alignItems:'center',
        justifyContent: 'center'
    },
    Text2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5,
    },
    SignupText: {
        fontWeight: 'bold'
    },
    emailInput:{
        marginTop: 20,
        marginRight: 5,
    },
    Buttonstyle:{
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonStyleX:{
        margin:12,
        marginLeft: 15,
        marginRight:15,
    },
    ButoonDesign:{
        backgroundColor: '#026efd',
        fontWeight: 'bold'
    },
    LineStyle:{
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
    },
    boxStyle:{
        flexDirection: 'row',
        marginTop:30,
        marginLeft: 15,
        marginRight:15,
        justifyContent: 'space-around'
    },

})


