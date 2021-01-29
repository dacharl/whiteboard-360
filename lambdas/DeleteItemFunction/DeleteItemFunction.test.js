const { handler } = require("./index");
var AWS = require("aws-sdk");

jest.mock("aws-sdk", () => {
  const mockDocumentClient = { delete: jest.fn() };
  const mockDynamoDB = { DocumentClient: jest.fn(() => mockDocumentClient) };
  return { DynamoDB: mockDynamoDB };
});

const mockDynamoDB = new AWS.DynamoDB.DocumentClient();

describe("DeleteItemFunction() ", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  const payload = {
    body: {
      itemId: "itemId",
      standupId: "Columbus",
    },
  };

  it("should delete item from the table", async () => {
    const successResult = {
      statusCode: 200,
      body: {message:"Item deleted successfully"},
    };
    const mockAwsSdkPromiseResponse = jest
      .fn()
      .mockReturnValue(Promise.resolve(successResult));

    mockDynamoDB.delete.mockImplementationOnce(() => ({
      promise: mockAwsSdkPromiseResponse,
    }));

    const actual = await handler(payload);
    expect(mockDynamoDB.delete).toBeCalled();
    expect(actual).toEqual(successResult);
  });

  it("should handle failure", async () => {
    const errorString = "Error deleting record from Dynamo Stand-Up Table";
    const errorResult = {
      error: errorString,
    };
    const mockAwsSdkPromiseResponse = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error(errorString)));

    mockDynamoDB.delete.mockImplementationOnce(() => ({
      promise: mockAwsSdkPromiseResponse,
    }));

    const actual = await handler(payload);
    expect(mockDynamoDB.delete).toBeCalled();
    expect(actual).toEqual(errorResult);
  });
});
