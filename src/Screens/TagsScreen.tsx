import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import TagsComponent from '../components/Tags/TagsComponent';

function TagsScreen({navigation}) {
  const [tags, setTags] = React.useState<Array<string>>([]);

  const [isCreation, setIsCreation] = React.useState(true);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setIsCreation(!isCreation);
        }}>
        <Text>{isCreation ? 'Creation' : 'Display'}</Text>
      </TouchableOpacity>
      <TagsComponent
        isCreation={isCreation}
        onListUpdated={setTags}
        tags={tags}
        title="Tags"
      />
    </View>
  );
}

export default TagsScreen;
