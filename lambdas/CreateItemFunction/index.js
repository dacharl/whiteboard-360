var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = async (event) => {
    try {

        var standUpItem = JSON.parse(event.body);

        var params = {
            TableName: 'whiteboard-standup-items',
            Item: {
                itemId: { S: standUpItem.itemId },
                standupId: { S: standUpItem.standupId },
                category: { S: standUpItem.category },
                title: { S: standUpItem.title },
                author: { S: standUpItem.author },
                date: { S: standUpItem.date },
                description: { S: standUpItem.description }
            }
        };

        var data;
        var msg;

        try {
            data = await ddb.putItem(params).promise();
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