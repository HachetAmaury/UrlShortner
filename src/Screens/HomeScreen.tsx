import React from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: red;
`;

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <StyledText>Hello</StyledText>
      <Button
        testID="go-to-details"
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        testID="go-to-tags"
        title="Go to Tags"
        onPress={() => navigation.navigate('Tags')}
      />
    </View>
  );
}

export default HomeScreen;
