FROM node:8

ADD ./ /opt/sendgrid/ui-components/

WORKDIR /opt/sendgrid/ui-components
RUN yarn install

EXPOSE 6006:6006
CMD ["yarn", "storybook"]
