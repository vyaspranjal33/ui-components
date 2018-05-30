import { storiesOf } from '@storybook/react';
import React from 'react';

import Card from '../src/card';
import Icon from '../src/icon';
import Accordion from '../src/accordion';

const stories = storiesOf('Accordion', module);

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vestibulum vehicula semper eleifend.
  Morbi tincidunt, magna non hendrerit malesuada,
  ex est pulvinar nisi, ac luctus lorem quam vel nibh. Integer at tortor luctus
  dui egestas consequat. Donec ut nibh lorem. Phasellus sed sapien lobortis,
  egestas lacus nec, vehicula lorem. Donec hendrerit nibh sed velit placerat
  aliquet. Morbi tristique pretium lorem, nec pretium turpis mattis vel.`;

class AccordionContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      panels: props.panels,
    };
  }

  onAccordionClick = (e: any, index: number) => {
    this.setState((prevState: any, props: any) => {
      const newState = { ...prevState };
      newState.panels[index].isOpen = !newState.panels[index].isOpen;
      return newState;
    });
  }

  render() {
    return (
      <Accordion
        onClick={this.onAccordionClick}
        panels={this.state.panels}
        {...this.props}
      />
    );
  }
}

const CardContent: React.SFC<any> = ({ title, iconType }) => (
  <p>
    <Icon type={iconType} />
    { title }
  </p>
);

stories.add('Accordion - Standard', () => {
  const panels = [
    {
      title: 'Accordion title',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
    },
    {
      title: 'Accordion title',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
    },
    {
      title: 'Accordion title',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
    },
  ];

  return (
    <AccordionContainer panels={panels} />
  );
});

stories.add('Accordion - Caret Left', () => {
  const panels = [
    {
      title: 'Accordion title',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
    },
    {
      title: 'Accordion title',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
    },
    {
      title: 'Accordion title',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
    },
  ];

  return (
    <AccordionContainer panels={panels} caretLeft />
  );
});

stories.add('Accordion - Nested', () => {
  const secondaryTitle = (title?: string) => <h3>{title}</h3>;
  const secondaryPanels = [
    {
      title: 'Secondary Accordion title 1',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
      titleRender: secondaryTitle,
    },
    {
      title: 'Secondary Accordion title 2',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
      titleRender: secondaryTitle,
    },
  ]
  const primaryPanels = [
    {
      title: 'Primary Accordion title 1',
      hasChildren: true,
      contentRender: () => (
        <AccordionContainer
          panels={secondaryPanels}
        />
      ),
    },
    {
      title: 'Primary Accordion title 2',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
    },
  ];

  return (
    <AccordionContainer panels={primaryPanels} />
  );
});

stories.add('Accordion - Large', () => {
  const panels = [
    {
      title: 'Accordion title with icon and intro text',
      titleDescription: 'Accordion title description.',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
      icon: 'teammate',
    },
    {
      title: 'Accordion with no icon/text',
      contentRender: () => <p>{LOREM_IPSUM}</p>,
    },
  ];

  return (
    <AccordionContainer panels={panels} isLarge />
  );
});

stories.add('Accordion - Editor', () => {
  const panels = [
    {
      titleRender: () => <h4>Add Modules</h4>,
      contentRender: () => {
        return (
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
        );
      },
    },
  ];

  return (
    <AccordionContainer panels={panels} isEditor />
  );
});
