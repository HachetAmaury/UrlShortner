import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import TagCreationInput from '../../Tags/TagCreationInput';

describe('<TagCreationInput />', () => {
  it('should render the Tag Creation Input ', () => {
    const {getByTestId} = render(
      <TagCreationInput
        onAddTagCallBack={() => {}}
        placeholder={''}
        validationText={''}
      />,
    );

    const component = getByTestId('tag-creation-block');

    expect(component).toBeTruthy();
  });

  it('should have a placeholder of "enter new tag" when passed as placeholder prop', () => {
    const {getByTestId, getByPlaceholderText} = render(
      <TagCreationInput
        onAddTagCallBack={() => {}}
        placeholder={'enter new tag'}
        validationText={''}
      />,
    );

    const input = getByTestId('tag-creation-input');
    expect(input).toBeTruthy();
    expect(getByPlaceholderText('enter new tag')).toBeTruthy();
  });

  it('should have a button with text "add tag" when passed as validationText prop', () => {
    const {getByTestId, getByText} = render(
      <TagCreationInput
        onAddTagCallBack={() => {}}
        placeholder={''}
        validationText={'add tag'}
      />,
    );

    const input = getByTestId('add-tag-button');

    expect(input).toBeTruthy();
    expect(getByText('add tag')).toBeTruthy();
  });

  it('should not be able to add a tag if the input is empty', () => {
    const addTagCallBack = jest.fn();

    const {getByTestId} = render(
      <TagCreationInput
        onAddTagCallBack={addTagCallBack}
        placeholder={''}
        validationText={''}
      />,
    );

    const input = getByTestId('tag-creation-input');
    const button = getByTestId('add-tag-button');

    fireEvent.changeText(input, '');
    fireEvent.press(button);

    expect(addTagCallBack).not.toHaveBeenCalled();
  });

  it('should be able to add a tag if the input is not empty', () => {
    const addTagCallBack = jest.fn();

    const {getByTestId} = render(
      <TagCreationInput
        onAddTagCallBack={addTagCallBack}
        placeholder={''}
        validationText={''}
      />,
    );

    const input = getByTestId('tag-creation-input');
    const button = getByTestId('add-tag-button');

    fireEvent.changeText(input, 'tag1');

    fireEvent.press(button);

    expect(addTagCallBack).toHaveBeenCalledWith('tag1');
  });
});
