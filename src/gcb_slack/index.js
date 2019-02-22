// @flow

const IncomingWebhook = require('@slack/client').IncomingWebhook;

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK;

const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);

// subscribe is the main function called by Cloud Functions.
module.exports.subscribe = (event: $FlowFixMe, callback: $FlowFixMe) => {
  const build = eventToBuild(event.data.data);

  // Skip if the current status is not in the status list.
  // Add additional statues to list if you'd like:
  // QUEUED, WORKING, SUCCESS, FAILURE,
  // INTERNAL_ERROR, TIMEOUT, CANCELLED
  const status = ['SUCCESS', 'FAILURE', 'INTERNAL_ERROR', 'TIMEOUT'];
  if (status.indexOf(build.status) === -1) {
    return callback();
  }

  // Send message to Slack.
  const message = createSlackMessage(build);
  webhook.send(message, callback);

  return undefined;
};

// eventToBuild transforms pubsub event message to a build object.
const eventToBuild = data => {
  return JSON.parse(new Buffer(data, 'base64').toString());
};

// createSlackMessage create a message from a build object.
const createSlackMessage = build => {
  return {
    text: `${build.status} - build ID \`${build.id}\``,
    mrkdwn: true,
    attachments: [
      {
        title: 'Build logs',
        title_link: build.logUrl,
        fields: [
          {
            title: 'Status',
            value: build.status,
          },
        ],
      },
    ],
  };
};
