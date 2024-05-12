import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';

const Terms_Conditions_Industry = () => {
  const navigation = useNavigation();

  const handleSwipe = () => {
    navigation.navigate('Industry_S_Confirm',{profession, industrySelected, professionSub, selected, checked});
  };

  const route = useRoute();
  const { profession, industrySelected, professionSub, selected, checked } = route.params;

 

  

  return (
    <ScrollView style={{ marginTop: responsiveHeight(1) }}>

      <View style={styles.container}>
        <View style={{ height: responsiveHeight(8), width: responsiveWidth(50), marginBottom: responsiveHeight(0.2), flexDirection: 'row', position: 'relative', right: responsiveWidth(22) }}>

          <Image style={{
            height: responsiveHeight(7),
            width: responsiveWidth(18), bottom: responsiveHeight(1), alignSelf: 'center',
          }} source={require("../../../Assets/Login_page/FH_logos.png")} />

          <Image style={{ height: responsiveHeight(3.5), width: responsiveWidth(40), position: 'absolute', left: responsiveWidth(10), top: responsiveHeight(3) }} source={require('../../../Assets/Login_page/Film_hook_name.png')} />
          <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: responsiveFontSize(1.3), position: 'absolute', left: responsiveWidth(33), top: responsiveHeight(6), }}>Industry User</Text>


        </View>

        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Terms & Conditions</Text>
          </View>
          <Text style={{ textAlign: 'justify' }}>Home
            Terms and Conditions
            General Site Usage
            Last Revised: December 16, 2013

            Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.

            1. YOUR AGREEMENT
            By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.

            PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
            2. PRIVACY
            Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.

            3. LINKED SITES
            This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.

            4. FORWARD LOOKING STATEMENTS
            All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.

            5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY
            A. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE, INCLUDING ANY RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT, MEMORANDUM, OR INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE RISK; (ii) THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE AND NON-INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH RESPECT TO THE RESULTS THAT MAY BE OBTAINED FROM THIS SITE, THE PRODUCTS OR SERVICES ADVERTISED OR OFFERED OR MERCHANTS INVOLVED; (v) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR FOR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.

            B. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.

            6. EXCLUSIONS AND LIMITATIONS
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.

            7. OUR PROPRIETARY RIGHTS
            This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third party's intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively "Trademarks") or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services.

            The framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited.

            8. INDEMNITY
            By using the Site web sites you agree to indemnify us and affiliated entities (collectively "Indemnities") and hold them harmless from any and all claims and expenses, including (without limitation) attorney's fees, arising from your use of the Site web sites, your use of the Products and Services, or your submission of ideas and/or related materials to us or from any person's use of any ID, membership or password you maintain with any portion of the Site, regardless of whether such use is authorized by you.

            9. COPYRIGHT AND TRADEMARK NOTICE
            Except our generated dummy copy, which is free to use for private and commercial use, all other text is copyrighted. generator.lorem-ipsum.info © 2013, all rights reserved

            10. INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS
            It is our policy to respond expeditiously to claims of intellectual property infringement. We will promptly process and investigate notices of alleged infringement and will take appropriate actions under the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws. Notices of claimed infringement should be directed to:

            generator.lorem-ipsum.info

            126 Electricov St.

            Kiev, Kiev 04176

            Ukraine

            contact@lorem-ipsum.info

            11. PLACE OF PERFORMANCE
            This Site is controlled, operated and administered by us from our office in Kiev, Ukraine. We make no representation that materials at this site are appropriate or available for use at other locations outside of the Ukraine and access to them from territories where their contents are illegal is prohibited. If you access this Site from a location outside of the Ukraine, you are responsible for compliance with all local laws.

            12. GENERAL
            A. If any provision of these Terms and Conditions is held to be invalid or unenforceable, the provision shall be removed (or interpreted, if possible, in a manner as to be enforceable), and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. These Terms and Conditions set forth the entire understanding and agreement between us with respect to the subject matter contained herein and supersede any other agreement, proposals and communications, written or oral, between our representatives and you with respect to the subject matter hereof, including any terms and conditions on any of customer's documents or purchase orders.

            B. No Joint Venture, No Derogation of Rights. You agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of these Terms and Conditions or your use of the Site. Our performance of these Terms and Conditions is subject to existing laws and legal process, and nothing contained herein is in derogation of our right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by us with respect to such use.</Text>


          <TouchableOpacity onPress={handleSwipe} style={{ height: responsiveHeight(3), borderWidth: 1, width: responsiveWidth(18), justifyContent: 'center', alignItems: 'center', borderRadius: responsiveWidth(2), bottom: responsiveHeight(5), backgroundColor: 'black', alignSelf: 'flex-end' }} >
            <Text style={{ color: 'white' }}>I Agree</Text>
          </TouchableOpacity>

        </View>


      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: responsiveWidth(1)
  },
  formContainer: {
    width: '90%',
    // height:'120%',
    // left:responsiveWidth(3),
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: responsiveHeight(1)
    //  marginTop:responsiveHeight(2)

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    //  alignSelf: 'center',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  subHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'justify',
    marginBottom: 10,
  },
  nextSteps: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  impact: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  thankYou: {
    fontSize: 15,
    fontWeight: 'bold',
    bottom: 30

  },
  termsButton: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Terms_Conditions_Industry;