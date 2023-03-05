// ./src/components/stories/Button.stories.tsx

import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text, boolean} from '@storybook/addon-knobs';
import Tag from '../../Tags/Tag';

storiesOf('Tag', module)
  .addDecorator(story => <View style={s.decorator}>{story()}</View>)
  // 👇 you can add multiple variants of component, here's variant with name 'default'
  .add('Creation or Edit Mode', () => (
    <Tag
      onRemoveTagCallBack={action('onPress')}
      text={text('Text', 'Tag1')}
      isCreation={boolean('isCreation', true)}
    />
  ))
  .add('Display Mode', () => (
    <Tag
      onRemoveTagCallBack={action('onPress')}
      text={text('Text', 'Tag1')}
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
