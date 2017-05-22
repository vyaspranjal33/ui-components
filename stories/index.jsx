// @flow
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/Button';
import Welcome from './Welcome';
// eslint-disable-next-line no-unused-vars
import css from '../style-guide/app/scss/style-guide.scss';
// eslint-disable-next-line no-unused-vars
import morecss from './storybook.css';
import Card from '../src/components/Card';
import { StandardLoader, FragmentLoader } from '../src/components/Loader';
import ButtonList from '../src/components/ButtonList';
import Menu from '../src/components/Menu';
import MenuItem from '../src/components/MenuItem';
import Icon, { icons } from '../src/components/Icons';

storiesOf('Welcome', module).add("to SendGrid's Storybook", () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('Primary', () => (
    <Button type="primary" onClick={action('clicked')}>Primary Button</Button>
  ))
  .add('Primary Disabled', () => (
    <Button type="primary" disabled onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Primary with badge', () => (
    <Button type="primary" badge={1} onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Primary with loader icon', () => (
    <Button
      type="primary"
      onClick={action('clicked')}
      icon={<StandardLoader small dark />}
    >
      Primary Button
    </Button>
  ))
  .add('Primary Disabled with badge', () => (
    <Button type="primary" disabled badge={1} onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Secondary', () => (
    <Button type="secondary" onClick={action('clicked')}>
      {' '}Secondary Button{' '}
    </Button>
  ))
  .add('Secondary Disabled', () => (
    <Button type="secondary" disabled onClick={action('clicked')}>
      {'Secondary Button'}
    </Button>
  ))
  .add('Secondary with badge', () => (
    <Button type="secondary" onClick={action('clicked')} badge={2}>
      {'Secondary Button'}
    </Button>
  ))
  .add('Secondary with loader icon', () => (
    <Button
      type="secondary"
      onClick={action('clicked')}
      icon={<StandardLoader small />}
    >
      Primary Button
    </Button>
  ))
  .add('Secondary Disabled with badge', () => (
    <Button type="secondary" disabled onClick={action('clicked')} badge={2}>
      {'Secondary Button'}
    </Button>
  ))
  .add('Button List', () => (
    <ButtonList>
      <Button type="primary" onClick={action('clicked')}>
        Primary Button
      </Button>
      <Button type="primary" onClick={action('clicked')}>
        Primary Button
      </Button>
      <Button type="primary" onClick={action('clicked')}>
        Primary Button
      </Button>
    </ButtonList>
  ));
const cardStyle = {
  width: '350px',
  margin: '20px',
};
storiesOf('Card', module)
  .add('Standard with textacular', () => (
    <Card small style={{ ...cardStyle }} centered>
      {"Let's test your integration"}
    </Card>
  ))
  .add('Large with text', () => (
    <Card style={{ ...cardStyle }} centered>
      {"Let's test your integration"}
    </Card>
  ))
  .add('Inline Card', () => (
    <div>
      <Card small inline style={{ ...cardStyle }} centered>
        {"Let's test your integration"}
      </Card>
      <Card small inline style={{ ...cardStyle }} centered>
        {"Let's test your integration"}
      </Card>
    </div>
  ))
  .add('Module Cards', () => (
    <div>
      <Card small module style={{ width: '80px' }} centered>
        <p><i className="sg-icon sg-icon-images" /> Image</p>
      </Card>
      <Card small module style={{ width: '80px' }} centered>
        <p><i className="sg-icon sg-icon-images" /> Image </p>
      </Card>
    </div>
  ));
storiesOf('Loader', module)
  .add('Standard Loader', () => <StandardLoader />)
  .add('Standard Loader small', () => <StandardLoader small />)
  .add('Standard Loader large', () => <StandardLoader large />)
  .add('Standard Loader dark', () => (
    <div
      style={{
        padding: '45px 30px',
        backgroundColor: '#294661',
      }}
    >
      <StandardLoader dark />
    </div>
  ))
  .add('Fragment Loader', () => <FragmentLoader />);
storiesOf('Menu is still janky', module).add('Menu', () => (
  <div>
    <Menu text="ROBOTS" primary>
      <MenuItem> shit whaddup! </MenuItem>
    </Menu>
    <Menu text="ROBOTS">
      <MenuItem> shit whaddup! </MenuItem>
    </Menu>
  </div>
));
storiesOf('Icon', module)
  .add('Airplane all sizes', () => (
    <div>
      <Icon type={'airplane'} size={'xlarge'} />
      <Icon type={'airplane'} size={'large'} />
      <Icon type={'airplane'} size={'medium'} />
      <Icon type={'airplane'} size={'small'} />
    </div>
  ))
  .add('All Icons', () => {
    const iconList: any = Object.keys(icons);
    const divStyle = {
      margin: '10px',
      display: 'inline-block',
      border: '1px solid gray',
      padding: '10px',
      overflowWrap: 'break-word',
      textAlign: 'center',
      backgroundColor: 'white',
    };
    return (
      <div>
        {iconList.map(element => (
          <div style={divStyle}>
            <Icon type={element} size={'large'} />
            <p>
              {element}
            </p>
          </div>
        ))}
      </div>
    );
  });
