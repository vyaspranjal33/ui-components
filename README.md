# UI Components

Re-useable React components based on the SendGrid's Style Guide.

## Starting Storybook

After running `npm install` and ensuring that style-guide is pulled properly just run `npm run storybook` and you should be good to go!

## Adding Test Hooks

For many components, it's useful for testing to have attributes that make them easy to query for and select.

For this, use `data-test="some-test-id"` as an attribute that describes the component. If it's possible, you can and should the props passed in to create a unique identifier.

## What are these Stateful Components?

State is hard and all of the UI components should be purely presentational. But, that makes them hard to test out in Storybook. The stateful components (e.g. `StatefulTextInput`) are solely for working with Storybook and are not supported or endorsed in anyway. Think of them as a private API. They can be removed at any time.
