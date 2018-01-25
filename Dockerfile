FROM node:8

ADD ./package.json ./yarn.lock ./.npmrc /opt/sendgrid/ui-components/ rollup.config.ts

WORKDIR /opt/sendgrid/ui-components
RUN yarn install

ADD ./ /opt/sendgrid/ui-components/

EXPOSE 6006:6006
CMD ["yarn", "storybook"]
