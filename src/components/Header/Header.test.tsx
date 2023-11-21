import { shallow } from 'enzyme';

import Header from './Header';

describe('Header Component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the logo and title correctly', () => {
    const wrapper = shallow(<Header />);

    const logo = wrapper.find('.header__logo');
    expect(logo.exists()).toBe(true);
    expect(logo.first().is('img')).toBe(true);
    expect(logo.first().prop('alt')).toBe('react-logo');

    const title = wrapper.find('h1.header__logo');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Interbanking Challenge');
  });
});
