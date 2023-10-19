'use strict';

require('dotenv').config();
const { Configuration, OpenAI } = require("openai");

module.exports.callOpenAI = async (event) => {
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: completion.choices,
        input: event,
      },
      null,
      2
    ),
  };
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
