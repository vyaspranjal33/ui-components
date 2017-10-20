FROM node:8

ADD ./package.json ./yarn.lock /opt/sendgrid/ui-components/

WORKDIR /opt/sendgrid/ui-components
RUN yarn install

ADD ./ /opt/sendgrid/ui-components/
