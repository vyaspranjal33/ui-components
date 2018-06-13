import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import Card from '../card';
import Icon from '../icon';
import Accordion, { AccordionPanel, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelTitle, } from './index';
var stories = storiesOf('Accordion', module);
var LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Vestibulum vehicula semper eleifend. Morbi tincidunt, magna non hendrerit malesuada,\n  ex est pulvinar nisi, ac luctus lorem quam vel nibh. Integer at tortor luctus\n  dui egestas consequat. Donec ut nibh lorem. Phasellus sed sapien lobortis,\n  egestas lacus nec, vehicula lorem. Donec hendrerit nibh sed velit placerat\n  aliquet. Morbi tristique pretium lorem, nec pretium turpis mattis vel.";
stories.add('Accordion - Standard', function () { return (React.createElement(Accordion, null,
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }), open: true },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)))); });
stories.add('Accordion - Caret Left', function () { return (React.createElement(Accordion, { caretLeft: true },
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)))); });
stories.add('Accordion - Nested', function () {
    return (React.createElement(Accordion, null,
        React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Primary Accordion Title 1" }), noPadding: true, open: true },
            React.createElement(Accordion, null,
                React.createElement(AccordionPanel, { title: React.createElement("h3", null, "Secondary Accordion Title 1") },
                    React.createElement("p", null, LOREM_IPSUM)),
                React.createElement(AccordionPanel, { title: React.createElement("h3", null, "Secondary Accordion Title 2") },
                    React.createElement("p", null, LOREM_IPSUM)))),
        React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Primary Accordion Title 2" }) },
            React.createElement("p", null, LOREM_IPSUM))));
});
stories.add('Accordion - Large', function () { return (React.createElement(Accordion, { large: true },
    React.createElement(AccordionPanel, { title: React.createElement(Fragment, null,
            React.createElement(AccordionPanelIcon, { iconType: "teammate" }),
            React.createElement(AccordionPanelTitle, { text: "Accordion title with icon and intro text" }),
            React.createElement(AccordionPanelDescription, { text: "Accordion title description." })) },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion with no icon/text" }) },
        React.createElement("p", null, LOREM_IPSUM)))); });
var CardContent = function (_a) {
    var title = _a.title, iconType = _a.iconType;
    return (React.createElement("p", null,
        React.createElement(Icon, { type: iconType }),
        title));
};
stories.add('Accordion - Editor', function () { return (React.createElement(Accordion, { editor: true },
    React.createElement(AccordionPanel, { open: true, title: React.createElement("h4", null, "Add Modules") },
        React.createElement("div", null,
            React.createElement(Card, { className: "is-module", centered: true },
                React.createElement(CardContent, { title: "Image", iconType: "images" })),
            React.createElement(Card, { className: "is-module", centered: true },
                React.createElement(CardContent, { title: 'Image & Text', iconType: "image-text" })),
            React.createElement(Card, { className: "is-module", centered: true },
                React.createElement(CardContent, { title: "Text", iconType: "text" })),
            React.createElement(Card, { className: "is-module", centered: true },
                React.createElement(CardContent, { title: "Code", iconType: "code" })),
            React.createElement(Card, { className: "is-module", centered: true },
                React.createElement(CardContent, { title: "Columns", iconType: "columns" })),
            React.createElement(Card, { className: "is-module", centered: true },
                React.createElement(CardContent, { title: "Button", iconType: "button" })),
            React.createElement(Card, { className: "is-module", centered: true },
                React.createElement(CardContent, { title: "Divider", iconType: "divider" })),
            React.createElement(Card, { className: "is-module", centered: true },
                React.createElement(CardContent, { title: "Spacer", iconType: "spacer" })),
            React.createElement(Card, { className: "is-module", centered: true },
                React.createElement(CardContent, { title: "Social", iconType: "social" })))))); });
//# sourceMappingURL=Accordion.stories.js.map