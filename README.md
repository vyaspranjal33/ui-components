[![Build status](https://badge.buildkite.com/31ee26b5d97341ef0f9c82a304631b99340fd8e2d2bea38f90.svg)](https://buildkite.com/sendgrid/ui-components)

# UI Components

Re-useable React components based on the SendGrid's Style Guide.

## Getting Started
```
npm install @sendgrid/ui-components
```

### Importing UI Components into Your Project

To import the component on your desired page:

```ts
import { Badge } from '@sendgrid/ui-components
```

List of available components in [Available Components](#available-components) section.

### Importing a Particular COmponent

Maybe you don't want to import all of UI Components. You can import just the components that you need.

```js
import Badge from '@sendgrid/ui-components/badge
```

### Getting Styles to Work

UI-Components uses a mix of module styles and global styles to insert style guide.  To use module styles for each individual component, you'll need to update your webpack config to parse module styles from files with the naming convention ".module.scss".

```js
config.module.rules.push({
    test: /\.module.scss$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  });
```

To use the global application styles included with styleguide (such as typography, reset, tables, and more), you'll need to include the following in your root component:

```js
import '../path_to_uicomponents/packages/styles/global/main.scss';
```

### Starting Storybook

After running `npm install` and ensuring that style-guide is pulled properly just run `npm run storybook` and you should be good to go!

## Adding Test Hooks

For many components, it's useful for testing to have attributes that make them easy to query for and select.

For this, use `data-test="some-test-id"` as an attribute that describes the component. If it's possible, you can and should the props passed in to create a unique identifier.

### What are these Stateful Components?

State is hard and all of the UI components should be purely presentational. But, that makes them hard to test out in Storybook. The stateful components (e.g. `StatefulTextInput`) are solely for working with Storybook and are not supported or endorsed in anyway. Think of them as a private API. They can be removed at any time. You've been warned.

# Semver Versioning

When making a pull request, make sure the title has a [semver](https://semver.org/) bump level defined (**#major**, **#minor**, or **#patch**).

Semver bumps are used to know when to update the [@sendgrid/ui-components npm package](https://www.npmjs.com/package/@sendgrid/ui-components).
Patch and minor changes will be updated automatically, but major changes will update if you update your npm package version manually.

More information: https://semver.org/

## Available Components

This is a list of the available Components and most of the properties. [Run storybook](#starting-storybook) for more information on the styling, properties, and functionalities.

- [Actions](https://github.com/sendgrid/ui-components/blob/master/src/actions.tsx)
- [Alert](https://github.com/sendgrid/ui-components/blob/master/src/alert.tsx)
- [Badge](https://github.com/sendgrid/ui-components/blob/master/src/badge.tsx)
- [Breadcrumb](https://github.com/sendgrid/ui-components/blob/master/src/breadcrumb.tsx)
- [Button](https://github.com/sendgrid/ui-components/blob/master/src/button.tsx)
- [Button List](https://github.com/sendgrid/ui-components/blob/master/src/button-list.tsx)
- [Card](https://github.com/sendgrid/ui-components/blob/master/src/card.tsx)
- [Center Modal](https://github.com/sendgrid/ui-components/blob/master/src/center-modal.tsx)
- [Checkbox](https://github.com/sendgrid/ui-components/blob/master/src/checkbox.tsx)
- [Confirmation Modal](https://github.com/sendgrid/ui-components/blob/master/src/confirmation-modal.tsx)
- [Divider](https://github.com/sendgrid/ui-components/blob/master/src/divider.tsx)
- [Dropdown Button](https://github.com/sendgrid/ui-components/blob/master/src/dropdown-button.tsx)
- [Dropzone](https://github.com/sendgrid/ui-components/blob/master/src/dropzone.tsx)
- [Email Card](https://github.com/sendgrid/ui-components/blob/master/src/email-card.tsx)
- [Empty State](https://github.com/sendgrid/ui-components/blob/master/src/empty-state.tsx)
- [Filterable List](https://github.com/sendgrid/ui-components/blob/master/src/filterable-list.tsx)
- [Fragment Loader](https://github.com/sendgrid/ui-components/blob/master/src/fragment-loader.tsx)
- [Icon](https://github.com/sendgrid/ui-components/blob/master/src/icon.tsx)
- [Loader](https://github.com/sendgrid/ui-components/blob/master/src/loader.tsx)
- [Meter](https://github.com/sendgrid/ui-components/blob/master/src/meter.tsx)
- [Numbered Steps](https://github.com/sendgrid/ui-components/blob/master/src/numbered-steps.tsx)
- [Page Header](https://github.com/sendgrid/ui-components/blob/master/src/page-header.tsx)
- [Progress Bar](https://github.com/sendgrid/ui-components/blob/master/src/progress.tsx)
- [Radio Button](https://github.com/sendgrid/ui-components/blob/master/src/radio.tsx)
- [Segment Term](https://github.com/sendgrid/ui-components/blob/master/src/segment-term.tsx)
- [Side Modal](https://github.com/sendgrid/ui-components/blob/master/src/side-modal.tsx)
- [Slider](https://github.com/sendgrid/ui-components/blob/master/src/slider.tsx)
- [Small Footer](https://github.com/sendgrid/ui-components/blob/master/src/smal-footer.tsx)
- [Statistics](https://github.com/sendgrid/ui-components/blob/master/src/statistics.tsx)
- [Tabs](https://github.com/sendgrid/ui-components/blob/master/src/tabs.tsx)
- [TextInput](https://github.com/sendgrid/ui-components/blob/master/src/text-input.tsx)
- [Toggle Buttons](https://github.com/sendgrid/ui-components/blob/master/src/toggle-buttons.tsx)
- [Tooltip](https://github.com/sendgrid/ui-components/blob/master/src/tooltip.tsx)
- [Truncated List](https://github.com/sendgrid/ui-components/blob/master/src/truncated-list.tsx)

# Available Commands

- `yarn start`: This is an alias for `yarn run storybook`
- `yarn storybook`: Start Storybook on port 6006.
- `yarn build`: Builds the assets for deployment.
- `yarn lint`: Runs the linter.
- `yarn lint-fix`: Runs the linter and auto-fixes the errors it can auto-fix.
- `yarn test`: Run the unit tests.
- `yarn snapshot`: Update snapshot tests. Make sure you run the tests first and you're not overwriting snapshots by accident.
- `yarn lint-snapshot`: A combination of `yarn run lint` and `yarn run snapshot`.
- `yarn ci-test`: Test used for the CI build (doesn't use interactive mode).
- `yarn build-storybook`: Build a deployable version of the Storybook.
- `yarn prepare`: Used by npm to build the assets before publishing.
- `yarn run image-snapshots`: Builds a static index.html file and runs image snapshot tests.

## Testing

To make sure your additions don't break `ui-components`, run `npm run test`, which will test all of your changed `*.test.*` files and show a coverage report.

**Image Snapshots & Animations**:

- To skip a test, include `[DontTest]` in the name of the story.
- To increase the threshold of a test (for example if you need to test a component but there is also an animation that is being troublesome), add `[animation]` in the name of the story.

These configurations are implemented in Storyshots.test.ts.


# Contributing
See [CONTRIBUTING.md](https://github.com/sendgrid/ui-components/blob/master/CONTRIBUTING.md)

## Deploying


Deploying to npm is as simple as `npm run lerna`. Lerna will prompt you for a new version and you'll be able to pick the appropriate version bump. If you're not in the npm group, reach out to Steve.
