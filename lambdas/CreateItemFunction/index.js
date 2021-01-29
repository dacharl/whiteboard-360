var AWS = require("aws-sdk");
var ddb = new AWS.DynamoDB.DocumentClient();

async function putItem(standUpItem) {
  try {
    await ddb.put(buildStandupItemRecord(standUpItem)).promise();
    return {
      statusCode: 200,
      body: '{"message":"Item entered successfully"}',
    };
  } catch (err) {
    return { error: err.message };
  }
}

async function buildStandupItemRecord(standUpItem) {
  return {
    TableName: "whiteboard-standup-items",
    Item: {
      itemId: standUpItem.itemId,
      standupId: standUpItem.standupId,
      category: standUpItem.category,
      title: standUpItem.title,
      author: standUpItem.author,
      date: standUpItem.date,
      description: standUpItem.description,
    },
  };
}

exports.CreateItemFunction = async (event) => {
  return await putItem(event.body);
};
