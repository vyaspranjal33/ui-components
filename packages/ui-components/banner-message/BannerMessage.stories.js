import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import BannerMessage from './index';
const stories = storiesOf('Banner Message', module);
stories.add('Banner Messages', () => (React.createElement(Fragment, null,
    React.createElement(BannerMessage, { type: "info" }, "Hello, this is an info banner Message"),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(BannerMessage, { type: "beta" },
        "Beta banner with ",
        React.createElement("strong", null, "some jsx")))));
//# sourceMappingURL=BannerMessage.stories.js.map