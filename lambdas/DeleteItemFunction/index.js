var AWS = require("aws-sdk");
var ddb = new AWS.DynamoDB.DocumentClient();

async function generateDeleteRequest(standUpItem) {
  return {
    TableName: "whiteBoard",
    Key: {
      itemId: standUpItem.itemId,
      standUpId: standUpItem.standupId,
    },
  };
}

async function deleteItemFromTable(standUpItem) {
  var standUpItem = await generateDeleteRequest(standUpItem.body);
  var data;
  try {
    data = await ddb.delete(standUpItem).promise();
  } catch (err) {
    return {
      error: err.message,
    };
  }

  return {
    statusCode: 200,
    body: {message:"Item deleted successfully"},
  };
}

exports.handler = async (event) => {
  return await deleteItemFromTable(event);
};
