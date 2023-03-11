import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../../components/rockets/rockets';
import store from '../../redux/store';

describe('Rockets', () => {
  it('Rockets Page Rendered Correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
