import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import { Breadcrumb } from '../breadcrumb';
import Card from '../card';
import Icon from '../icon';
import Accordion, {
  AccordionPanel,
  AccordionPanelDescription,
  AccordionPanelIcon,
  AccordionPanelTitle,
} from './index';

const stories = storiesOf('Accordion', module);

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vestibulum vehicula semper eleifend. Morbi tincidunt, magna non hendrerit malesuada,
  ex est pulvinar nisi, ac luctus lorem quam vel nibh. Integer at tortor luctus
  dui egestas consequat. Donec ut nibh lorem. Phasellus sed sapien lobortis,
  egestas lacus nec, vehicula lorem. Donec hendrerit nibh sed velit placerat
  aliquet. Morbi tristique pretium lorem, nec pretium turpis mattis vel.`;

stories.add('Accordion - Standard', () => (
  <Accordion>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />} open>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
  </Accordion>
));

stories.add('Accordion - Caret Left', () => (
  <Accordion caretLeft>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
  </Accordion>
));

stories.add('Accordion - Nested', () => {
  return (
    <Accordion>
      <AccordionPanel
        title={<AccordionPanelTitle text="Primary Accordion Title 1" />}
        noPadding
        open
      >
        <Accordion>
          <AccordionPanel title={<h3>Secondary Accordion Title 1</h3>}>
            <p>{LOREM_IPSUM}</p>
          </AccordionPanel>
          <AccordionPanel title={<h3>Secondary Accordion Title 2</h3>}>
            <p>{LOREM_IPSUM}</p>
          </AccordionPanel>
        </Accordion>
      </AccordionPanel>
      <AccordionPanel
        title={<AccordionPanelTitle text="Primary Accordion Title 2" />}
      >
        <p>{LOREM_IPSUM}</p>
      </AccordionPanel>
    </Accordion>
  );
});

stories.add('Accordion - Large', () => (
  <Accordion large>
    <AccordionPanel
      title={
        <Fragment>
          <AccordionPanelIcon iconType="teammate" />
          <AccordionPanelTitle text="Accordion title with icon and intro text" />
          <AccordionPanelDescription text="Accordion title description." />
        </Fragment>
      }
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel
      title={<AccordionPanelTitle text="Accordion with no icon/text" />}
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
  </Accordion>
));

const CardContent: React.SFC<any> = ({ title, iconType }) => (
  <p>
    <Icon type={iconType} />
    {title}
  </p>
);

stories.add('Accordion - Editor', () => (
  <Accordion editor>
    <AccordionPanel open title={<h4>Add Modules</h4>}>
      <div>
        <Card className="is-module" centered>
          <CardContent title="Image" iconType="images" />
        </Card>
        <Card className="is-module" centered>
          <CardContent title={'Image & Text'} iconType="image-text" />
        </Card>
        <Card className="is-module" centered>
          <CardContent title="Text" iconType="text" />
        </Card>
        <Card className="is-module" centered>
          <CardContent title="Code" iconType="code" />
        </Card>
        <Card className="is-module" centered>
          <CardContent title="Columns" iconType="columns" />
        </Card>
        <Card className="is-module" centered>
          <CardContent title="Button" iconType="button" />
        </Card>
        <Card className="is-module" centered>
          <CardContent title="Divider" iconType="divider" />
        </Card>
        <Card className="is-module" centered>
          <CardContent title="Spacer" iconType="spacer" />
        </Card>
        <Card className="is-module" centered>
          <CardContent title="Social" iconType="social" />
        </Card>
      </div>
    </AccordionPanel>
  </Accordion>
));
