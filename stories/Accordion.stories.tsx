import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import Accordion, {
  AccordionPanel,
  AccordionPanelDescription,
  AccordionPanelIcon,
  AccordionPanelTitle,
} from '../src/accordion';
import { Breadcrumb } from '../src/breadcrumb';
import Card from '../src/card';
import Icon from '../src/icon';

const stories = storiesOf('Accordion', module);

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vestibulum vehicula semper eleifend. Morbi tincidunt, magna non hendrerit malesuada,
  ex est pulvinar nisi, ac luctus lorem quam vel nibh. Integer at tortor luctus
  dui egestas consequat. Donec ut nibh lorem. Phasellus sed sapien lobortis,
  egestas lacus nec, vehicula lorem. Donec hendrerit nibh sed velit placerat
  aliquet. Morbi tristique pretium lorem, nec pretium turpis mattis vel.`;

class AccordionPanelContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };
  }

  public render() {
    return (
      <AccordionPanel
        {...this.props}
        isOpen={this.state.isOpen}
        onClick={this.onAccordionPanelClick}
      >
        {this.props.children}
      </AccordionPanel>
    );
  }
  private onAccordionPanelClick = (e: any) => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}

stories.add('Accordion - Standard', () => (
  <Accordion>
    <AccordionPanelContainer
      title={<AccordionPanelTitle text="Accordion Title" />}
      isOpen
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanelContainer>
    <AccordionPanelContainer
      title={<AccordionPanelTitle text="Accordion Title" />}
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanelContainer>
    <AccordionPanelContainer
      title={<AccordionPanelTitle text="Accordion Title" />}
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanelContainer>
  </Accordion>
));

stories.add('Accordion - Caret Left', () => (
  <Accordion caretLeft>
    <AccordionPanelContainer
      title={<AccordionPanelTitle text="Accordion Title" />}
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanelContainer>
    <AccordionPanelContainer
      title={<AccordionPanelTitle text="Accordion Title" />}
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanelContainer>
    <AccordionPanelContainer
      title={<AccordionPanelTitle text="Accordion Title" />}
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanelContainer>
  </Accordion>
));

stories.add('Accordion - Nested', () => {
  return (
    <Accordion>
      <AccordionPanelContainer
        title={<AccordionPanelTitle text="Primary Accordion Title 1" />}
        noPadding
        isOpen
      >
        <Accordion>
          <AccordionPanelContainer
            title={
              <AccordionPanelTitle
                text={<h3>Secondary Accordion Title 1</h3>}
              />
            }
          >
            <p>{LOREM_IPSUM}</p>
          </AccordionPanelContainer>
          <AccordionPanelContainer
            title={
              <AccordionPanelTitle
                text={<h3>Secondary Accordion Title 2</h3>}
              />
            }
          >
            <p>{LOREM_IPSUM}</p>
          </AccordionPanelContainer>
        </Accordion>
      </AccordionPanelContainer>
      <AccordionPanelContainer
        title={<AccordionPanelTitle text="Primary Accordion Title 2" />}
      >
        <p>{LOREM_IPSUM}</p>
      </AccordionPanelContainer>
    </Accordion>
  );
});

stories.add('Accordion - Large', () => (
  <Accordion isLarge>
    <AccordionPanelContainer
      title={
        <Fragment>
          <AccordionPanelIcon iconType="teammate" />
          <AccordionPanelTitle text="Accordion title with icon and intro text" />
          <AccordionPanelDescription text="Accordion title description." />
        </Fragment>
      }
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanelContainer>
    <AccordionPanelContainer
      title={<AccordionPanelTitle text="Accordion with no icon/text" />}
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanelContainer>
  </Accordion>
));

const CardContent: React.SFC<any> = ({ title, iconType }) => (
  <p>
    <Icon type={iconType} />
    {title}
  </p>
);

stories.add('Accordion - Editor', () => (
  <Accordion isEditor>
    <AccordionPanelContainer
      isOpen
      title={<AccordionPanelTitle text={<h4>Add Modules</h4>} />}
    >
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
    </AccordionPanelContainer>
  </Accordion>
));
