var AWS = require("aws-sdk");
var ddb = new AWS.DynamoDB.DocumentClient();

async function generateFetchRequest(standUpItem) {
  return {
    TableName: "whiteBoard",
    ExpressionAttributeValues: {
      ":standup": standUpItem.body.standUpId,
    },
    FilterExpression: "standUpId= :standup",
  };
}

async function retrieveItems(standUpItem) {
  var data;
  try {
    const request = await generateFetchRequest(standUpItem);
    data = await ddb.scan(request).promise();
  } catch (err) {
    return { error: err.message };
  }
  return {
    statusCode: 200,
    body: data,
  };
}

exports.handler = async (event) => {
  return await retrieveItems(event);
};
