// ./src/components/stories/Button.stories.tsx

import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, array} from '@storybook/addon-knobs';
import TagsList from '../../Tags/TagsList';

storiesOf('TagsList', module)
  .addDecorator(story => <View style={s.decorator}>{story()}</View>)
  // 👇 you can add multiple variants of component, here's variant with name 'default'
  .add('Creation or Edit Mode', () => (
    <TagsList
      tags={array('tags', ['Tag1', 'Tag2', 'Tag3'])}
      onRemoveTagCallBack={action('onPress')}
      isCreation={boolean('isCreation', true)}
    />
  ))
  .add('Display Mode', () => (
    <TagsList
      tags={array('tags', ['Tag1', 'Tag2', 'Tag3'])}
      onRemoveTagCallBack={action('onPress')}
      isCreation={boolean('isCreation', false)}
    />
  ));

const s = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
