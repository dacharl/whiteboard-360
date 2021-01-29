const { handler } = require("./index");
var AWS = require("aws-sdk");

jest.mock("aws-sdk", () => {
  const mockDocumentClient = { scan: jest.fn() };
  const mockDynamoDB = { DocumentClient: jest.fn(() => mockDocumentClient) };
  return { DynamoDB: mockDynamoDB };
});

const mockDynamoDB = new AWS.DynamoDB.DocumentClient();

describe("RetrieveItemsFunction() ", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  const payload = {
    body: {
      standupId: "Columbus",
    },
  };

  it("should retrieve all items from the table", async () => {
    const successResult = {
      Items: [
        {
          itemId: "itemId",
          standupId: "Columbus",
          category: "category1",
          title: "theTitle",
          author: "theAuthor",
          date: "1/12/2021",
          description: "today in awesome",
        },
        {
          itemId: "itemId2",
          standupId: "Columbus",
          category: "category2",
          title: "theTitle2",
          author: "theAuthor2",
          date: "2/12/2021",
          description: "rhe other today in awesome",
        },
      ],
      Count: 2,
      ScannedCount: 2,
    };

    const mockAwsSdkPromiseResponse = jest
      .fn()
      .mockReturnValue(Promise.resolve(successResult));
    const wrappedSuccessResult = { statusCode: 200, body: successResult };
    mockDynamoDB.scan.mockImplementationOnce(() => ({
      promise: mockAwsSdkPromiseResponse,
    }));

    const actual = await handler(payload);
    expect(mockDynamoDB.scan).toBeCalled();
    expect(actual).toEqual(wrappedSuccessResult);
  });

  it("should handle failure", async () => {
    const errorString = "Error retrieving records from Dynamo Stand-Up Table";
    const errorResult = {
      error: errorString,
    };
    const mockAwsSdkPromiseResponse = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error(errorString)));

    mockDynamoDB.scan.mockImplementationOnce(() => ({
      promise: mockAwsSdkPromiseResponse,
    }));

    const actual = await handler(payload);
    expect(mockDynamoDB.scan).toBeCalled();
    expect(actual).toEqual(errorResult);
  });
});
