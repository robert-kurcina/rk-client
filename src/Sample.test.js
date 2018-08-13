import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './Sample';

import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';


it('does a few simple chai expects', () =>{
  expect(function () {}).to.not.throw();
  expect({a: 1}).to.not.have.property('b');
  expect([1, 2]).to.be.an('array').that.does.not.include(3);
});
