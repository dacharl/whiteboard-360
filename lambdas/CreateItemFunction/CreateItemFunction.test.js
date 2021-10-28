const { handler } = require("./index");
var AWS = require("aws-sdk");

jest.mock("aws-sdk", () => {
  const mockDocumentClient = { put: jest.fn() };
  const mockDynamoDB = { DocumentClient: jest.fn(() => mockDocumentClient) };
  return { DynamoDB: mockDynamoDB };
});

const mockDynamoDB = new AWS.DynamoDB.DocumentClient();

describe("CreateItemFunction() ", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  const payload = {
    body: {
      itemId: "itemId",
      standupId: "Columbus",
      category: "category1",
      title: "theTitle",
      author: "theAuthor",
      date: "1/12/2021",
      description: "today in awesome",
    },
  };

  it("should insert item into table", async () => {
    const successResult = {
      statusCode: 200,
      body: '{"message":"Item entered successfully"}',
    };
    const mockAwsSdkPromiseResponse = jest
      .fn()
      .mockReturnValue(Promise.resolve(successResult));

    mockDynamoDB.put.mockImplementationOnce(() => ({
      promise: mockAwsSdkPromiseResponse,
    }));

    const actual = await handler(payload);
    expect(mockDynamoDB.put).toBeCalled();
    expect(actual).toEqual(successResult);
  });

  it("should handle failure", async () => {
    const errorString = "Error inserting record into Dynamo Stand-Up Table";
    const errorResult = {
      error: errorString,
    };
    const mockAwsSdkPromiseResponse = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error(errorString)));

    mockDynamoDB.put.mockImplementationOnce(() => ({
      promise: mockAwsSdkPromiseResponse,
    }));

    const actual = await handler(payload);
    expect(mockDynamoDB.put).toBeCalled();
    expect(actual).toEqual(errorResult);
  });
});
