import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function TagCreationInput({
  placeholder,
  validationText,
  onAddTagCallBack,
}: {
  placeholder: string;
  validationText: string;
  onAddTagCallBack: (tag: string) => void;
}) {
  const [tag, setTag] = React.useState('');

  const onPress = React.useCallback(() => {
    if (!tag) {
      return;
    }
    onAddTagCallBack(tag);
    setTag('');
  }, [tag, onAddTagCallBack]);

  return (
    <View style={s.tagsBlock} testID="tag-creation-block">
      <TextInput
        style={s.input}
        placeholder={placeholder}
        onChangeText={newTag => setTag(newTag)}
        defaultValue={tag}
        testID="tag-creation-input"
      />
      <TouchableOpacity
        style={s.validationButton}
        onPress={onPress}
        testID="add-tag-button">
        <Text>{validationText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  tagsBlock: {
    flexDirection: 'row',
    columnGap: 5,
  },
  input: {
    flexGrow: 1,
  },
  validationButton: {
    backgroundColor: '#95C4CB',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    columnGap: 15,
    flexDirection: 'row',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
  },
});

export default TagCreationInput;
