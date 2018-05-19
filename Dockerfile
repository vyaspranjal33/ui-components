FROM node:9

RUN mkdir -p /opt/sendgrid/ui-components
WORKDIR /opt/sendgrid/ui-components

COPY ./package.json /opt/sendgrid/ui-components
COPY ./yarn.lock /opt/sendegrid/ui-components
RUN yarn install

COPY ./ /opt/sendgrid/ui-components

EXPOSE 6006:6006
CMD ["yarn", "storybook"]
