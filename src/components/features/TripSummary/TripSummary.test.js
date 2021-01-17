import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const expectedLink = '/trip/123';

    const component = shallow(<TripSummary id='123' image='image.png' name='Canada' cost='$30' days={3} tags={['tag1','tag2']} />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct src and alt for image', () => {
    const expectedAlt = 'Canada';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TripSummary id='123' image={expectedSrc} name={expectedAlt} cost='$30' days={3} tags={['tag1','tag2']}  />);

    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
  });

  it('should render correct props', () => {
    const expectedName = 'Canada';
    const expectedCost = 'from $30';
    const expectedDays = '3 days';

    const component = shallow(<TripSummary id='123' image='image.png' name={expectedName} cost= '$30' days={3} tags={['tag1','tag2']}  />);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);

    const renderedCost = component.find('.details span').at(1).text();
    expect(renderedCost).toEqual(expectedCost);

    const renderedDays = component.find('.details span').at(0).text();
    expect(renderedDays).toEqual(expectedDays);
  });

  it('should throw error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render 3 tags in span in order', () => {
    const expectedTags=['one', 'two', 'three'];
    const component = shallow(<TripSummary id='123' image='image.png' name='Canada' cost='$30' days={3} tags={['one', 'two', 'three']} />);

    const renderedFirstTag = component.find('article .tag').at(0).text();
    expect(renderedFirstTag).toEqual(expectedTags[0]);

    const renderedSecondTag = component.find('article .tag').at(1).text();
    expect(renderedSecondTag).toEqual(expectedTags[1]);

    const renderedThirdTag = component.find('article .tag').at(2).text();
    expect(renderedThirdTag).toEqual(expectedTags[2]);
  });

  it('should not render div without tags', () => {
    const component = shallow(<TripSummary id='123' image='image.png' name='Canada' cost='$30' days={3}  tags={[]} />);

    expect(component.hasClass('tags')).toBe(false);
  });
});
