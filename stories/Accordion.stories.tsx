import { storiesOf } from '@storybook/react';
import React from 'react';

import Card from '../src/card';
import Icon from '../src/icon';
import Accordion, { AccordionPanel } from '../src/accordion';
import { Breadcrumb } from '../src/breadcrumb';

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

  onAccordionPanelClick = (e: any) => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <AccordionPanel
        {...this.props}
        isOpen={this.state.isOpen}
        onClick={this.onAccordionPanelClick}
      >
       { this.props.children }
      </AccordionPanel>
    );
  }
}

stories.add('Accordion - Standard', () => (
  <Accordion>
    <AccordionPanelContainer
      title="Accordion Title"
      contentRender={ () => <p>{LOREM_IPSUM}</p> }
      isOpen
    />
    <AccordionPanelContainer
      title="Accordion Title"
      contentRender={ () => <p>{LOREM_IPSUM}</p> }
    />
    <AccordionPanelContainer
      title="Accordion Title"
      contentRender={ () => <p>{LOREM_IPSUM}</p> }
    />
  </Accordion>
));

stories.add('Accordion - Caret Left', () => (
  <Accordion caretLeft>
    <AccordionPanelContainer
      title="Accordion Title"
      contentRender={ () => <p>{LOREM_IPSUM}</p> }
    />
    <AccordionPanelContainer
      title="Accordion Title"
      contentRender={ () => <p>{LOREM_IPSUM}</p> }
    />
    <AccordionPanelContainer
      title="Accordion Title"
      contentRender={ () => <p>{LOREM_IPSUM}</p> }
    />
  </Accordion>
));

stories.add('Accordion - Nested', () => {
  const secondaryTitle = (title?: string) => <h3>{title}</h3>;
  return (
  <Accordion>
    <AccordionPanelContainer
      title="Primary Accordion Title 1"
      noPadding
      contentRender={ () => (
        <Accordion>
          <AccordionPanelContainer
            title="Secondary Accordion Title 1"
            contentRender={ () => <p>{LOREM_IPSUM}</p> }
            titleRender={ secondaryTitle }
          />
          <AccordionPanelContainer
            title="Secondary Accordion Title 2"
            contentRender={ () => <p>{LOREM_IPSUM}</p> }
            titleRender={ secondaryTitle }
          />
        </Accordion>
      )}
      isOpen
    />
    <AccordionPanelContainer
      title="Primary Accordion Title 1"
      contentRender={ () => <p>{LOREM_IPSUM}</p> }
    />
  </Accordion>
  )
});

stories.add('Accordion - Large', () => (
  <Accordion isLarge>
    <AccordionPanelContainer
      contentRender={ () => <p>{LOREM_IPSUM}</p> }
      icon={"teammate"}
      title="Accordion title with icon and intro text"
      titleDescription="Accordion title description."
    />
    <AccordionPanelContainer
      title="Accordion with no icon/text"
      contentRender={ () => <p>{LOREM_IPSUM}</p> }
    />
  </Accordion>
));

const CardContent: React.SFC<any> = ({ title, iconType }) => (
  <p>
    <Icon type={iconType} />
    { title }
  </p>
);

stories.add('Accordion - Editor', () => (
  <Accordion isEditor>
    <AccordionPanelContainer
      isOpen
      titleRender={ () => <h4>Add Modules</h4> }
      contentRender={ () => (
        <div>
          <Card className="is-module" centered>
            <CardContent title="Image" iconType="images" />
          </Card>
          <Card className="is-module" centered>
            <CardContent title={"Image & Text"} iconType="image-text" />
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
      ) }
    />
  </Accordion>
));
