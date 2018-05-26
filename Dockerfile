FROM node:8

RUN mkdir -p /opt/sendgrid/ui-components/
RUN mkdir -p /opt/sendgrid/ssh/

WORKDIR /opt/sendgrid/ui-components/

COPY package.json /opt/sendgrid/ui-components/
COPY yarn.lock /opt/sendgrid/ui-components/

RUN yarn install

ADD ./ /opt/sendgrid/ui-components/

EXPOSE 6006:6006
CMD ["yarn", "storybook"]
