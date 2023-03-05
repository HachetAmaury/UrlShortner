import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import TagsComponent from '../../Tags/TagsComponent';

describe('<TagsComponent />', () => {
  it('should render the TagsComponent component', () => {
    const {getByTestId} = render(
      <TagsComponent
        title=""
        isCreation={false}
        tags={[]}
        onListUpdated={() => {}}
      />,
    );

    const tagsComponent = getByTestId('tags-component');

    expect(tagsComponent).toBeTruthy();
  });

  it('should find each element of the UI in creation mode', () => {
    const {getByTestId} = render(
      <TagsComponent
        title=""
        isCreation={true}
        tags={[]}
        onListUpdated={() => {}}
      />,
    );

    expect(getByTestId('tags-component-title')).toBeTruthy();
    expect(getByTestId('tag-creation-block')).toBeTruthy();
    expect(getByTestId('tags-list-component')).toBeTruthy();
  });

  it('should find each element of the UI in display mode', () => {
    const {getByTestId, queryByTestId} = render(
      <TagsComponent
        title=""
        isCreation={false}
        tags={[]}
        onListUpdated={() => {}}
      />,
    );

    expect(getByTestId('tags-component-title')).toBeTruthy();
    // The tag creation block should not be displayed in display mode
    expect(queryByTestId('tag-creation-block')).toBeFalsy();
    expect(getByTestId('tags-list-component')).toBeTruthy();
  });

  it('it should not add two times the same tag', () => {
    const mockCallBack = jest.fn();

    const {getByTestId, getAllByTestId} = render(
      <TagsComponent
        title=""
        isCreation={true}
        tags={['tag1']}
        onListUpdated={mockCallBack}
      />,
    );

    // Enter tag1 in the input
    const tagInput = getByTestId('tag-creation-input');
    fireEvent.changeText(tagInput, 'tag1');

    // Press the add button
    const addTagButton = getByTestId('add-tag-button');
    fireEvent.press(addTagButton);

    // Check that the callback has not been called
    expect(mockCallBack).not.toHaveBeenCalled();

    // Check that there is still only one tag
    const tagsList = getAllByTestId('tags-component');
    expect(tagsList).toHaveLength(1);
  });
});
