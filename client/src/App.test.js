import React from 'react';

import App from './App';
import Nav from './components/Nav';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);q
// });

it('page renders correct title in Nav', () => {
  const wrapper = rtl.render(<Nav />);
  const element = wrapper.getByText(/women's world cup/i);
  expect(element).toBeVisible();
})

it('page renders correct subheader in players list', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/players ranked by search interest/i);
  expect(element).toBeVisible();
})

it('render "searches:" text', () => {
  const wrapper = rtl.render(<App />);;
  const hasSearchText = wrapper.queryByText(/searches:/i)
  expect(hasSearchText).toBeInTheDocument();
})