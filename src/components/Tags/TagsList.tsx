import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Tag from './Tag';

function TagsList({
  tags,
  isCreation,
  onRemoveTagCallBack,
}: {
  tags: string[];
  isCreation: boolean;
  onRemoveTagCallBack: (tag: string) => void;
}) {
  const tagsList = React.useMemo(
    () =>
      tags.map((tag, i) => (
        <Tag
          key={`${i}_tag`}
          isCreation={isCreation}
          text={tag}
          onRemoveTagCallBack={onRemoveTagCallBack}
        />
      )),
    [tags, isCreation, onRemoveTagCallBack],
  );

  if (tags.length === 0) {
    return (
      <View testID="tags-list-component">
        <View style={s.noTags} testID="no-tag">
          <Text>No tags</Text>
        </View>
      </View>
    );
  }

  return (
    <View testID="tags-list-component">
      <View style={s.tagsList} testID="tags-list">
        {tagsList}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  tagsList: {
    flexDirection: 'row',
    columnGap: 5,
    flexWrap: 'wrap',
  },
  noTags: {},
});

export default TagsList;
