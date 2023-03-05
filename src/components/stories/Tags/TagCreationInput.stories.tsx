// ./src/components/stories/Button.stories.tsx

import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

import TagCreationInput from '../../Tags/TagCreationInput';

storiesOf('TagCreationInput', module)
  .addDecorator(story => <View style={s.decorator}>{story()}</View>)
  // 👇 you can add multiple variants of component, here's variant with name 'default'
  .add('TagCreationInput', () => (
    <TagCreationInput
      onAddTagCallBack={action('onAddTagCallBack')}
      placeholder={text('placeholder', 'Enter new tag ...')}
      validationText={text('validationText', 'Add tag')}
    />
  ));

const s = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
