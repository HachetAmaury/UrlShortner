// ./src/components/stories/Button.stories.tsx

import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, array, text} from '@storybook/addon-knobs';
import TagsComponent from '../../Tags/TagsComponent';

storiesOf('TagsComponent', module)
  .addDecorator(story => <View style={s.decorator}>{story()}</View>)
  .add('Tags Component', () => (
    <TagsComponent
      title={text('title', 'Tags')}
      tags={array('tags', ['Tag1', 'Tag2', 'Tag3'])}
      isCreation={boolean('isCreation', true)}
      onListUpdated={action('onListUpdated')}
    />
  ));

const s = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
