[![Build status](https://badge.buildkite.com/31ee26b5d97341ef0f9c82a304631b99340fd8e2d2bea38f90.svg)](https://buildkite.com/sendgrid/ui-components)

# UI Components

Re-useable React components based on the SendGrid's Style Guide.

## @sendgrid/ui-components npm package

These components are available as npm package [`@sendgrid/ui-components`](https://www.npmjs.com/package/@sendgrid/ui-components).

### Getting Started
```
npm install @sendgrid/ui-components
```

### Importing ui-components into Your Project

To import the component on your desired page:
```
import { Badge } from '@sendgrid/ui-components
```

List of available components in [Available Components](#available-components) section.

## Starting Storybook

After running `npm install` and ensuring that style-guide is pulled properly just run `npm run storybook` and you should be good to go!

## Adding Test Hooks

For many components, it's useful for testing to have attributes that make them easy to query for and select.

For this, use `data-test="some-test-id"` as an attribute that describes the component. If it's possible, you can and should the props passed in to create a unique identifier.

## What are these Stateful Components?

State is hard and all of the UI components should be purely presentational. But, that makes them hard to test out in Storybook. The stateful components (e.g. `StatefulTextInput`) are solely for working with Storybook and are not supported or endorsed in anyway. Think of them as a private API. They can be removed at any time. You've been warned.

# Semver Versioning

When making a pull request, make sure the title has a [semver](https://semver.org/) bump level defined (**#major**, **#minor**, or **#patch**).

Semver bumps are used to know when to update the [@sendgrid/ui-components npm package](https://www.npmjs.com/package/@sendgrid/ui-components).
Patch and minor changes will be updated automatically, but major changes will update if you update your npm package version manually.

More information: https://semver.org/

# Available Components

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
* Start Storybook
```
yarn start
```
* Start Storybook on port 6006
```
yarn storybook
```
* Build
```
yarn build
```
* Run linter
```
yarn lint
```
* Try to auto fix linter issues
```
yarn lint-fix
```
* Test (with coverage)
```
yarn test
```
* Update tests (retake snapshots)
```
yarn snapshot
```
* Lint & update tests
```
yarn lint-snapshot
```
* Test used for Jenkins CI build (doesn't use interactive mode)
```
yarn ci-test
```
* Build Storybook
```
yarn build-storybook
```
* Prepublish
```
yarn prepublish
```
# Testing
To make sure your additions don't break `ui-components`, run `npm run test`, which will test all of your changed `*.test.*` files and show a coverage report.

# Contributing

## Components
If you create a new component on a feature branch, make sure to do the following
1. Add the component to `src/components`
2. Make sure your changes do not break ui-components by running `npm run test`
4. Add it to the storybook by creating a story in `stories` folder
5. Add the component export to `src/index.ts`
6. Update the `README.md` where appropriate
7. Make a PR detailing your changes with a [semver](#semver-versioning) Tag and get it CR'ed
