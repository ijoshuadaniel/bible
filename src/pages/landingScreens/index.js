import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../../utils/constants/colors';
import {LandingScreenContent} from '../../../utils/constants/constant';
import {
  headingStyles,
  subheadingStyles,
} from '../../../utils/constants/globalstyles';
import CustomButton from '../../components/customButton/index';
import LoginContainer from '../../components/loginContainer';

import {styles} from './styles';

const LandingScreens = () => {
  const [landingContent, setLandingContent] = useState(
    LandingScreenContent.BIBLE_READING,
  );
  const [showLogin, setShowLogin] = useState(false);

  const handleOnclick = () => {
    if (landingContent !== LandingScreenContent.READ_BOOKS) {
      const getLandingContent = triggerNextContent();
      setLandingContent(getLandingContent);
    } else {
      setShowLogin(!showLogin);
    }
  };

  const getTitle = () => {
    if (landingContent === LandingScreenContent.READ_BOOKS) {
      return 'Login';
    } else {
      return 'Next';
    }
  };

  const triggerNextContent = () => {
    if (landingContent === LandingScreenContent.BIBLE_READING) {
      return LandingScreenContent.ONLINE_WORSHIP;
    } else if (landingContent === LandingScreenContent.ONLINE_WORSHIP) {
      return LandingScreenContent.READ_BOOKS;
    } else {
      return LandingScreenContent.BIBLE_READING;
    }
  };

  const getScreensContent = type => {
    switch (type) {
      case LandingScreenContent.BIBLE_READING:
        return (
          <View style={styles.Info}>
            <Text style={{...headingStyles, ...styles.InfoHeading}}>
              Bible Reading
            </Text>
            <Text style={{...subheadingStyles, ...styles.InfoSubheading}}>
              Bible.co is the online provider for Bible Reading. Enjoy the
              presence of god with connecting through us.
            </Text>
          </View>
        );
      case LandingScreenContent.ONLINE_WORSHIP:
        return (
          <View style={styles.Info}>
            <Text style={{...headingStyles, ...styles.InfoHeading}}>
              Online Worship
            </Text>
            <Text style={{...subheadingStyles, ...styles.InfoSubheading}}>
              Join the world worshiping god, we will connect you all over the
              world
            </Text>
          </View>
        );
      case LandingScreenContent.READ_BOOKS:
        return (
          <View style={styles.Info}>
            <Text style={{...headingStyles, ...styles.InfoHeading}}>Books</Text>
            <Text style={{...subheadingStyles, ...styles.InfoSubheading}}>
              Read books through us. Get your religious book, increase your
              faith towards God
            </Text>
          </View>
        );
    }
  };

  return (
    <>
      <View style={styles.LandingScreens}>
        <View>
          <Text style={styles.Logo}>Bible.co</Text>
          <Text style={styles.Description}>
            In the world you will have tribulation. But take heart; I have
            overcome the world.
          </Text>
          <Text style={styles.Verses}>- John 16:33</Text>
        </View>

        {getScreensContent(landingContent)}

        <CustomButton
          title={getTitle()}
          textColor={Colors.white}
          backgroundColor={Colors.purssianBlue}
          handleOnClick={() => handleOnclick()}
        />
      </View>
      {showLogin && (
        <LoginContainer setShowLogin={setShowLogin} showLogin={showLogin} />
      )}
    </>
  );
};

export default LandingScreens;
