import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function Signup() {
  const navigation = useNavigation();
  return (
    <View style={styles.Continer}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Sign Up</Text>
      </View>
      <View style={styles.Text2}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.SignupText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Username */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
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
            variant="outline"
            placeholder='Username'
            _light={{
              placeholderTextcolor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Email Field  */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name='email' />}
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
            variant="outline"
            placeholder='Email'
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

      {/* Repeat Field  */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name='key' />}
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
            variant="outline"
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

      {/* Password Field  */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name='key' />}
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
            variant="outline"
            secureTextEntry={true}
            placeholder='Repeat Password'
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
          Sign Up
        </Button>
      </View>

      {/* Line */}

      <View style={styles.LineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>
     
     {/* Box */}
      <View style={styles.boxStyle}>


        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 65, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: "gray.50"
          }}
          _dark={{
            backgroundColor: "gray.700"
          }}
        >
          <AspectRatio radio={1 / 1}>
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
          onPress={() => navigation.navigate('#')}
          style={{ height: 65, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: "gray.50"
          }}
          _dark={{
            backgroundColor: "gray.700"
          }}
        >
          <AspectRatio radio={1 / 1}>
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
          onPress={() => navigation.navigate('#')}
          style={{ height: 65, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: "gray.50"
          }}
          _dark={{
            backgroundColor: "gray.700"
          }}
        >
          <AspectRatio radio={1 / 1}>
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
          onPress={() => navigation.navigate('#')}
          style={{ height: 70, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: "gray.50"
          }}
          _dark={{
            backgroundColor: "gray.700"
          }}
        >
          <AspectRatio radio={1 / 1}>
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
  return (
    <NativeBaseProvider>
      <Signup />
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
      marginTop: 2,
      marginRight: 15,
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