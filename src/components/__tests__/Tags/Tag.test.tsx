import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import Tag from '../../Tags/Tag';

describe('<Tag />', () => {
  it('should render the Tag component', () => {
    const {getByTestId} = render(
      <Tag isCreation onRemoveTagCallBack={() => {}} text={'tag1'} />,
    );

    const button = getByTestId('tag-component-tag1');

    expect(button).toBeTruthy();
  });

  it('should display text "tag1" if text value is "tag1"', () => {
    const {getByText} = render(
      <Tag isCreation onRemoveTagCallBack={() => {}} text={'tag1'} />,
    );

    const button = getByText('tag1');

    expect(button).toBeTruthy();
  });

  it('should display a cross if text value is “tag1” and isCreation is true', () => {
    const {getByTestId} = render(
      <Tag isCreation={true} onRemoveTagCallBack={() => {}} text={'tag1'} />,
    );

    const removeTag = getByTestId('remove-tag');

    expect(removeTag).toBeTruthy();
  });

  it('should not display a cross if text value is “tag1” and isCreation is false', () => {
    const {queryByTestId} = render(
      <Tag isCreation={false} onRemoveTagCallBack={() => {}} text={'tag1'} />,
    );

    const removeTag = queryByTestId('remove-tag');

    expect(removeTag).toBeNull();
  });

  it('should not display anything if text is empty', () => {
    const {root} = render(
      <Tag isCreation={false} onRemoveTagCallBack={() => {}} text={''} />,
    );

    expect(root).toBeUndefined();
  });

  it('should not display anything if text is null', () => {
    const {root} = render(
      <Tag isCreation={false} onRemoveTagCallBack={() => {}} text={null} />,
    );

    expect(root).toBeUndefined();
  });

  it('should call removeTagCallBack with "tag1" if text value is "tag1", isCreation is true and the cross is clicked', () => {
    const removeTagCallBack = jest.fn();

    const {getByTestId} = render(
      <Tag
        isCreation={true}
        onRemoveTagCallBack={removeTagCallBack}
        text={'tag1'}
      />,
    );

    const removeTag = getByTestId('remove-tag');

    fireEvent.press(removeTag);

    expect(removeTagCallBack).toHaveBeenCalledWith('tag1');
  });
});
