import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../../components/navbar/navbar';
import store from '../../redux/store';

describe('Missions', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter store={store}>
          <Navbar />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
