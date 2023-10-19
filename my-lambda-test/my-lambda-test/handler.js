'use strict';

require('dotenv').config();
const { Configuration, OpenAI } = require("openai");

module.exports.callOpenAI = async (event) => {

  const requestBody = JSON.parse(event.body);  // Parse the body from the event
  const messages = requestBody.messages;       // Extract messages from the parsed body

  console.log(messages);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    });

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: completion,
          input: event,
        }, null, 2),
    };
  } catch (error) {
    console.error("Error calling OpenAI: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: error,
          input: event,
        }, null, 2),
    };
  }
};

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
