// // import React from 'react'
// // import { Image, StyleSheet, View,Text,TouchableOpacity } from 'react-native'

// // export default function Profilephoto() {
// //   return (

// //     <View style={style.container}>
// //     <TouchableOpacity style={style.imgdiv}>
// //       </TouchableOpacity>
// //       </View>


// //   )
// // }

// // const style = StyleSheet.create({
// //     container:{
// //         height:250,
// //         width:280,
// //         borderRadius:20,
// //         backgroundColor:"#3B3B3C",
// //     },
// //     imgdiv:{
// //         height:200,
// //         width:190,
// //         borderRadius:20,
// //         marginLeft:45,
// //         marginTop:20,
// //         backgroundColor:"white",
// //     }
// // })

// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// export default function Profilephoto() {
//   // const navigation = useNavigation();
//   const [hasProfile, setHasProfile] = useState(false); 


//   const handleProfileToggle = () => {
//     setHasProfile(!hasProfile);
   
//   };

//   // const handleProfileNavigation = () =>{
//   //   navigation.navigate('User Profile')
//   // }

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.imgdiv} onPress={handleProfileToggle}>
//         {hasProfile ? (
//           <Image
//             source={{ uri: 'https://example.com/user-profile-image.jpg' }} // Replace with the actual URL or local path
//             style={{ flex: 1, borderRadius: 20 }}
//           />
//         ) : (
//           <Image source={require('../../Assets/Userprofile_And_Fonts/Filmhook_UserProfile.png')} style={{height:180,width:180,alignSelf:'center',top:10}}/>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 250,
//     width: 280,
//     borderRadius: 20,
//     backgroundColor: '#3B3B3C',
//   },
//   imgdiv: {
//     height:200,
//     width:190,
//     borderRadius: 20,
//     marginLeft: 45,
//     marginTop: 20,
//     backgroundColor: 'white',
//     overflow: 'hidden', // Ensure the image stays within the borders
//   },
// });


// import React from 'react'
// import { Image, StyleSheet, View,Text,TouchableOpacity } from 'react-native'

// export default function Profilephoto() {
//   return (

//     <View style={style.container}>
//     <TouchableOpacity style={style.imgdiv}>
//       </TouchableOpacity>
//       </View>


//   )
// }

// const style = StyleSheet.create({
//     container:{
//         height:250,
//         width:280,
//         borderRadius:20,
//         backgroundColor:"#3B3B3C",
//     },
//     imgdiv:{
//         height:200,
//         width:190,
//         borderRadius:20,
//         marginLeft:45,
//         marginTop:20,
//         backgroundColor:"white",
//     }
// })
import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { removeEmitHelper } from 'typescript';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Profilephoto() {
 
         const navigation = useNavigation();

      const handleProfileNavigation = () =>{
        console.log('profilePic');
          navigation.navigate('User Profile')
        //  setIsVisible(!IsVisible)
      }

      const handle_profileedit=()=>{
          console.log('handle_profileedit');

          navigation.navigate('ProfileEditPage')
      }
      
 return (
   <View style={styles.container}>
        <TouchableOpacity style={styles.imgdiv} onPress={handleProfileNavigation}>
            <Image source={require('../../../components/Assets/app_logo/8641606.jpg')} style={{width:'100%' , height:'100%'}} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={handle_profileedit}
        style={{width:responsiveWidth(8),height:responsiveHeight(4),bottom:responsiveHeight(3)}}>
           <Image source={require('../../../components/Assets/Audition_Icons_Fonts/write_icon.png')} style={{width:'100%',height:'100%'}} />
           <Text style={{color:"white",width:responsiveWidth(16.4),right:-45,bottom:responsiveHeight(3)}}>EditProfile</Text>
        </TouchableOpacity>
        <View style={{bottom:responsiveHeight(2),width:responsiveWidth(18),height:responsiveHeight(4),backgroundColor:'black',borderRadius:responsiveWidth(3),flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:responsiveWidth(2)}}>
          <Text style={{color:'white',fontWeight:'600',fontSize:responsiveFontSize(2)}}>9.9</Text>
          <Image source={require('../../../components/Assets/Home_Icon_And_Fonts/star_icon.png')} style={{width:responsiveWidth(4),height:responsiveHeight(3)}}></Image>
        </View>
      

        {/* <View 
        style={{width:responsiveWidth(18),height:removeEmitHelper(5),borderRadius:responsiveWidth(3),backgroundColor:'#000000',left:responsiveWidth(25),bottom:responsiveHeight(10),flexDirection:'row',justifyContent:'center',alignItems:'center'}}
        >
            <Text 
            style={{color:'#ffffff',padding:5,fontWeight:'500',fontSize:18}}>9.9</Text>
            <View style={{width:20,height:20}}>
            <Image source={require('../../../components/Assets/Home_Icon_And_Fonts/star_icon.png')} style={{width:'100%',height:'100%'}} />
            </View>
        </View> */}
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(30),
    width: responsiveWidth(65),
    borderRadius: responsiveWidth(4),
    backgroundColor: '#3B3B3C',
    
    borderWidth:1,
    borderColor:'white',
    top:responsiveHeight(0.8),
    justifyContent:'center',
    alignItems:'center'

  },
  imgdiv: {
    height:responsiveHeight(25),
    width:responsiveWidth(50),
    borderRadius: responsiveWidth(3),
    top:responsiveHeight(2),
  
  //  left:responsiveWidth(3),
   
    overflow: 'hidden', 
    // Ensure the image stays within the borders
  }
    });