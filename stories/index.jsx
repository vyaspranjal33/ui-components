import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion, { AccordionChecklistItem } from '../src/components/Accordion';
import Button from '../src/components/Button';
import Welcome from './Welcome';
import '../style-guide/app/scss/style-guide.scss';
import Card from '../src/components/Card';
import { StandardLoader, FragmentLoader } from '../src/components/Loader';
import ButtonList from '../src/components/ButtonList';
import Menu from '../src/components/Menu';
import MenuItem from '../src/components/MenuItem';
import Icon, { icons } from '../src/components/Icon';
import Badge from '../src/components/Badge';
import Meter from '../src/components/Meter';
import Progress from '../src/components/Progress';
import ProgressItem from '../src/components/ProgressItem';
import NumberedSteps from '../src/components/NumberedSteps';
import Step from '../src/components/Step';

storiesOf('Welcome', module).add("to SendGrid's Storybook", () => <Welcome />);

storiesOf('Accordion', module)
  .add('Standard', () => (
    <Accordion title="Standard Accordion">
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
    </Accordion>
  ))
  .add('Nested', () => (
    <Accordion title="I heard you liked accordions" includesNestedAccordions>
      <Accordion title="So I added an accordion" isChildAccordion>
        <p>to your accordion</p>
      </Accordion>
    </Accordion>
  ))
  .add('Caret Left', () => (
    <Accordion title="🥕 Left" caretLeft>
      <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
      <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
      <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
    </Accordion>
  ))
  .add('Large', () => (
    <div>
      <Accordion title="Large Accordion" large>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
      </Accordion>
      <Accordion title={
        <span>
          <i className="accordion-icon sg-icon sg-icon-airplane" />
          <span>Large Accordion with Icon</span>
        </span>
      } large>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
      </Accordion>
    </div>
  ))
  .add('Large List', () => (
    <Accordion title="Large List" large containsList>
      <ul>
        <AccordionChecklistItem isComplete>
          <h3>Leverage agile frameworks</h3>
          <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment</p>
          <button className="btn btn-secondary">Start</button>
        </AccordionChecklistItem>
        <AccordionChecklistItem>
          <h3>Leverage agile frameworks</h3>
          <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment</p>
          <button className="btn btn-secondary">Start</button>
        </AccordionChecklistItem>
      </ul>
    </Accordion>
  ))

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
  .add('Standard Loader small', () => <StandardLoader size="small" />)
  .add('Standard Loader large', () => <StandardLoader size="large" />)
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
    <Menu text="Robots" primary>
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
      overflowWrap: 'break-word',
      padding: '10px',
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

const BadgeNames = [
  'sg-blue',
  'slate',
  'ron-burgundy',
  'burnt-orange',
  'carrot',
  'mango',
  'mantis',
  'spruce',
  'grass-stain',
  'lime',
  'cobalt',
  'bluebird',
  'seafoam',
  'caribbean',
  'crown',
  'screample',
  'sangria',
  'lavender',
  'wild-strawberry',
  'steel',
];

const badgeList: any = BadgeNames;
const badgeStyles = {
  display: 'block',
  float: 'left',
  marginLeft: '15px',
};
storiesOf('Badge', module).add('All Badges', () => (
  <div>
    {badgeList.map(eleType => (
      <div style={badgeStyles}>
        <Badge color={eleType}> {eleType} </Badge>
      </div>
    ))}
  </div>
));

badgeList.forEach((eleType) => {
  storiesOf('Badge', module).add(eleType, () => (
    <div>
      <Badge color={eleType}> {eleType} </Badge>
    </div>
  ));
});

storiesOf('Meter', module)
  .add('Side By Sides', () => (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <div><Meter title="Money" percentage={8} /></div>
      <div><Meter title="Rage" percentage={20} /></div>
      <div><Meter title="Mana" percentage={40} /></div>
      <div><Meter title="Health" percentage={60} /></div>
      <div><Meter title="Energy" percentage={80} /></div>
      <div><Meter title="Experience" percentage={100} /></div>
    </div>
  ))
  .add('20% Meter', () => <div><Meter title="Mana" percentage={20} /></div>)
  .add('40% Meter', () => <div><Meter title="Mana" percentage={40} /></div>)
  .add('60% Meter', () => <div><Meter title="Health" percentage={60} /></div>)
  .add('80% Meter', () => <div><Meter title="Energy" percentage={80} /></div>)
  .add('100% Meter', () => (
    <div><Meter title="Experience" percentage={100} /></div>
  ));

storiesOf('Progress', module)
  .add('Horizontal Progress', () => (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <Progress>
        <ProgressItem label="Transactional" done />
        <ProgressItem label="Blamsactional" done />
        <ProgressItem label="Escargot" selected />
        <ProgressItem label="Fourthteenth" />
        <ProgressItem label="Xenotech" />
      </Progress>
    </div>
  ))
  .add('Vertical Progress', () => (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <Progress vertical>
        <ProgressItem label="Transactional" done />
        <ProgressItem label="Blamsactional" selected />
        <ProgressItem label="Escargot" />
        <ProgressItem label="Fourthteenth" />
        <ProgressItem label="Xenotech" />
      </Progress>
    </div>
  ))
  .add('Numbered Steps', () => (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <NumberedSteps>
        <Step
          title="Use these settings"
          description="Configure your application with the settings below.
          Use your account credentials in the areas highlighted."
        />
        <Step
          title="Send your first email"
          description="Test your integration by sending email through your application."
        />
        <Step
          title="See email activity"
          description="After you have successfully sent your first message, view a log of events."
        />
      </NumberedSteps>
    </div>
  ));
