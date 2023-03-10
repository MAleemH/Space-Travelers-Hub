import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../../components/profile/profile';
import store from '../../redux/store';

describe('Profile', () => {
  it('Profile Page Rendered Correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
