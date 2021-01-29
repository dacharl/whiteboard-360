var AWS = require("aws-sdk");
var ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

async function generateUpdateRequest(event) {
  var standUpItem = event.body;
  return {
    TableName: "whiteBoard",
    Key: {
      itemId: standUpItem.itemId,
      standUpId: standUpItem.standUpId,
    },
    ExpressionAttributeValues: {
      ":category": standUpItem.category,
      ":title": standUpItem.title,
      ":author": standUpItem.author,
      ":date": standUpItem.date,
      ":description": standUpItem.description,
    },
    ExpressionAttributeNames: {
      "#standUpDate": "date",
    },
    UpdateExpression:
      "set category = :category, title = :title, author = :author, description = :description, #standUpDate = :date",
  };
}

async function updateStandUpItem(event) {
  try {
    const request = await generateUpdateRequest(event);
    await ddb.update(request).promise();
  } catch (err) {
    return { error: err.message };
  }
  return {
    statusCode: 200,
    body: {message:"Item updated successfully"},
  };
}

exports.handler = async (event) => {
  return await updateStandUpItem(event);
};