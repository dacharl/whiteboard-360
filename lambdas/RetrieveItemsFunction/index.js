var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = async (event) => {
    try {

        var desiredStandupId = JSON.parse(event.body);

        var params = {
            TableName: 'whiteboard-standup-items',
            ExpressionAttributeValues: {
           ":standup": {
          S: desiredStandupId
         }
  }, 
             FilterExpression : "standupId= :standup"
        };

        var data;

        try {
            data = await ddb.scan(params).promise();
            console.log("Item read successfully:", data);
        } catch (err) {
            console.log("Error: ", err);
            data = err;
        }

        var response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: data
            })
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};