import { render, screen } from '@testing-library/react';
import App from './App';
import {configure} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  About from './About';
import {shallow} from 'enzyme'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


 
Enzyme.configure({ adapter: new Adapter() });
it('object check', () => {
  let wrapper = shallow(<About/>)
  // console.log(wrapper);
  // console.log(wrapper.debug);
  expect(wrapper.exists('.homecls')).toEqual(true);
})
