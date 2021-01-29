var AWS = require('aws-sdk');

exports.CreateItemFunction = async (event) => {
    try {
var ddb = new AWS.DynamoDB.DocumentClient();
        if (!AWS.config.region) {
            AWS.config.update({
              region: 'us-east-2'
            });
          }

        // var standUpItem = JSON.parse(event.body);
        var standUpItem = event.body;

        var params = {
            TableName: 'whiteboard-standup-items',
            Item: {
                "itemId":  standUpItem.itemId,
                "standupId": standUpItem.standupId,
                "category": standUpItem.category,
                "title":  standUpItem.title,
                "author":  standUpItem.author,
                "date":  standUpItem.date,
                "description": standUpItem.description 
            }
        };

        var data;
        var msg;

        try {
            data = await ddb.put(params).promise();
            console.log("Item entered successfully:", data);
            msg = 'Item entered successfully';
        } catch (err) {
            console.log("Error inserting record into Dynamo Stand-Up Table: ", err);
            msg = err;
        }


        var response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: msg
            })
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};