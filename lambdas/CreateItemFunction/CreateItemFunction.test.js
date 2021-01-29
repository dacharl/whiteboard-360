const {CreateItemFunction} = require('./index');


// afterAll(done => {
//   AWSMock.restore()
//   done()
// })

describe('CreateItemFunction() ', () => {
    it('should insert item into table', async () => {
      var AWS = require('aws-sdk');
      // AWS.config.update({region: 'us-east-2'})
      var AWSMock = require('aws-sdk-mock');
      AWSMock.setSDKInstance(AWS)
      AWSMock.mock('DynamoDB.DocumentClient', 'put', function(params, callback) {
        console.log('DynamoDB.DocumentClient', 'put', 'mock called');
        callback({});
      });


        const payload = {"body": {
            "itemId": "itemId",
            "standupId": "Columbus",
            "category": "category1",
            "title": "theTitle",
            "author": "theAuthor",
            "date": "1/12/2021",
            "description": "today in awesome"
        }
      };

        CreateItemFunction(payload).then(result => {
          expect(result).to.equal({
                  "statusCode": 200,
                "body": "{\"message\":\"Item entered successfully\"}"
              })
        });
        AWSMock.restore('DynamoDB.DocumentClient');
        });
});