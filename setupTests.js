import '@testing-library/jest-native/extend-expect';

// to fix warning on fireEvent.changeText(input, '');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
