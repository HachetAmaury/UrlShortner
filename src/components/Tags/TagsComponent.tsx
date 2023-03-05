import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TagCreationInput from './TagCreationInput';
import TagsList from './TagsList';

function TagsComponent({
  title,
  tags,
  isCreation,
  onListUpdated,
}: {
  title: string;
  tags: string[];
  isCreation: boolean;
  onListUpdated: (tags: Array<string>) => void;
}) {
  const [localTags, setLocalTags] = React.useState<Array<string>>([]);

  React.useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  const onRemoveTagCallBack = React.useCallback(
    (tag: string) => {
      const newTags = tags.filter(t => t !== tag);
      onListUpdated(newTags);
      setLocalTags(newTags);
    },
    [tags, onListUpdated],
  );

  const onAddTagCallBack = React.useCallback(
    (tag: string) => {
      if (localTags.includes(tag)) {
        return;
      }

      onListUpdated([...localTags, tag]);
      setLocalTags([...localTags, tag]);
    },
    [localTags, onListUpdated],
  );

  return (
    <View style={s.tagsBlock} testID="tags-component">
      <Text style={s.title} testID="tags-component-title">
        {title}
      </Text>
      {isCreation ? (
        <TagCreationInput
          onAddTagCallBack={onAddTagCallBack}
          placeholder="Enter a tag ..."
          validationText="Add "
        />
      ) : (
        <></>
      )}
      <TagsList
        isCreation={isCreation}
        tags={localTags}
        onRemoveTagCallBack={onRemoveTagCallBack}
      />
    </View>
  );
}

const s = StyleSheet.create({
  tagsBlock: {
    flexDirection: 'column',
    columnGap: 5,
  },
  title: {
    textAlign: 'center',
  },
  noTags: {},
});

export default TagsComponent;
