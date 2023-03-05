import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import TagsList from '../../Tags/TagsList';

describe('<TagsList />', () => {
  it('should render the TagsList component', () => {
    const {getByTestId} = render(
      <TagsList isCreation={false} tags={[]} onRemoveTagCallBack={() => {}} />,
    );

    const tagsListComponent = getByTestId('tags-list-component');

    expect(tagsListComponent).toBeTruthy();
  });

  it('should only display the “no tags” block if tags list is empty', () => {
    const {queryByTestId} = render(
      <TagsList isCreation={false} tags={[]} onRemoveTagCallBack={() => {}} />,
    );

    const noTag = queryByTestId('no-tag');
    const tagsList = queryByTestId('tags-list');

    expect(noTag).toBeTruthy();
    expect(tagsList).toBeFalsy();
  });

  it('should only display the list block if tags list is not empty', () => {
    const {queryByTestId} = render(
      <TagsList
        isCreation={false}
        tags={['tag1']}
        onRemoveTagCallBack={() => {}}
      />,
    );

    const noTag = queryByTestId('no-tag');
    const tagsList = queryByTestId('tags-list');

    expect(noTag).toBeFalsy();
    expect(tagsList).toBeTruthy();
  });

  it('should display as much elements as tags length if tags is not empty', () => {
    const {getAllByTestId} = render(
      <TagsList
        isCreation={false}
        tags={['tag1']}
        onRemoveTagCallBack={() => {}}
      />,
    );

    const tagsList = getAllByTestId('tag-component', {
      exact: false,
    });

    expect(tagsList).toHaveLength(1);
  });

  it('should call onRemoveTagCallBack when clicking on the cross of the first element in creation mode', () => {
    const onRemoveTagCallBack = jest.fn();

    const {getAllByTestId} = render(
      <TagsList
        isCreation={true}
        tags={['tag1']}
        onRemoveTagCallBack={onRemoveTagCallBack}
      />,
    );

    const firstTag = getAllByTestId('tag-component', {
      exact: false,
    })[0];

    fireEvent.press(firstTag);

    expect(onRemoveTagCallBack).toHaveBeenCalledWith('tag1');
  });

  it('should NOT call onRemoveTagCallBack when clicking on the cross of the first element NOT in creation mode', () => {
    const onRemoveTagCallBack = jest.fn();

    const {getAllByTestId} = render(
      <TagsList
        isCreation={false}
        tags={['tag1']}
        onRemoveTagCallBack={onRemoveTagCallBack}
      />,
    );

    const firstTag = getAllByTestId('tag-component', {
      exact: false,
    })[0];

    fireEvent.press(firstTag);

    expect(onRemoveTagCallBack).not.toHaveBeenCalled();
  });
});
