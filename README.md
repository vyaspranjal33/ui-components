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

- [Actions](https://github.com/sendgrid/ui-components/blob/master/src/components/Actions.tsx)
- [Alert](https://github.com/sendgrid/ui-components/blob/master/src/components/Alert.tsx)
- [Badge](https://github.com/sendgrid/ui-components/blob/master/src/components/Badge.tsx)
- [Breadcrumb](https://github.com/sendgrid/ui-components/blob/master/src/components/Breadcrumb.tsx)
- [Button](https://github.com/sendgrid/ui-components/blob/master/src/components/Button.tsx)
- [Button List](https://github.com/sendgrid/ui-components/blob/master/src/components/ButtonList.tsx)
- [Card](https://github.com/sendgrid/ui-components/blob/master/src/components/Card.tsx)
- [Checkbox](https://github.com/sendgrid/ui-components/blob/master/src/components/Checkbox.tsx)
- [Divider](https://github.com/sendgrid/ui-components/blob/master/src/components/Divider.tsx)
- [Dropdown Button](https://github.com/sendgrid/ui-components/blob/master/src/components/DropdownButton.tsx)
- [Dropzone](https://github.com/sendgrid/ui-components/blob/master/src/components/Dropzone.tsx)
- [Empty State](https://github.com/sendgrid/ui-components/blob/master/src/components/EmptyState.tsx)
- [Icon](https://github.com/sendgrid/ui-components/blob/master/src/components/Icon.tsx)
- [Loader](https://github.com/sendgrid/ui-components/blob/master/src/components/Loader.tsx)
- [Meter](https://github.com/sendgrid/ui-components/blob/master/src/components/Meter.tsx)
- [Numbered Steps](https://github.com/sendgrid/ui-components/blob/master/src/components/NumberedSteps.tsx)
- [Progress Bar](https://github.com/sendgrid/ui-components/blob/master/src/components/Progress.tsx)
- [Radio Button](https://github.com/sendgrid/ui-components/blob/master/src/components/Radio.tsx)
- [Slider](https://github.com/sendgrid/ui-components/blob/master/src/components/Slider.tsx)
- [Small Footer](https://github.com/sendgrid/ui-components/blob/master/src/components/SmallFooter.tsx)
- [Table](https://github.com/sendgrid/ui-components/blob/master/src/components/Table.tsx)
- [Tabs](https://github.com/sendgrid/ui-components/blob/master/src/components/Tabs.tsx)
- [TextInput](https://github.com/sendgrid/ui-components/blob/master/src/components/TextInput.tsx)
- [Toggle Buttons](https://github.com/sendgrid/ui-components/blob/master/src/components/ToggleButtons.tsx)
- [Tooltip](https://github.com/sendgrid/ui-components/blob/master/src/components/Tooltip.tsx)

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

## Testing

To make sure your additions don't break `ui-components`, run `npm run test`, which will test all of your changed `*.test.*` files and show a coverage report.

## Deploying

Deploying to npm is as simple as `npm run lerna`. Lerna will prompt you for a new version and you'll be able to pick the appropriate version bump. If you're not in the npm group, reach out to Steve.
