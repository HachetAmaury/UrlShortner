// src/components/Tags/Tag.tsx

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Tag = ({
  text,
  isCreation,
  onRemoveTagCallBack,
}: {
  text: string;
  isCreation: boolean;
  onRemoveTagCallBack?: (tag: string) => void;
}) => {
  const onPress = React.useCallback(
    () => onRemoveTagCallBack && onRemoveTagCallBack(text),
    [onRemoveTagCallBack, text],
  );

  if (!text) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={isCreation ? onPress : () => {}}
      testID={`tag-component-${text}`}>
      <View style={s.tag}>
        <Text style={{}}>{text}</Text>
        {isCreation ? (
          <Text style={s.removeTag} testID="remove-tag">
            X
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Tag;

const s = StyleSheet.create({
  tag: {
    backgroundColor: '#95C4CB',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    columnGap: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeTag: {
    paddingLeft: 5,
  },
});
