import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('<App/>', ()=> {
  it('allows us to set props', ()=>{
    const wrapper = mount(<App bar="baz" />);
    expect(wrapper.props().bar).to.equal('bal');
  })
});

it('does a few simple chai expects', () =>{
  expect(function () {}).to.not.throw();
  expect({a: 1}).to.not.have.property('b');
  expect([1, 2]).to.be.an('array').that.does.not.include(3);
});
