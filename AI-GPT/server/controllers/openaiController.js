const dotenv = require("dotenv");
dotenv.config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.summaryController = async (req, res) => {
  try {
    if (!openai) {
      return res.status(500).json({
        message: "OpenAI API key not configured. Please set OPENAI_API_KEY in your .env file.",
      });
    }

    const { text } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Summarize this: ${text}`,
        },
      ],
      max_tokens: 500,
      temperature: 0.5,
    });

    if (completion.choices && completion.choices[0]) {
      return res.status(200).json(completion.choices[0].message.content);
    }

    return res.status(400).json({ message: "No response generated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};
exports.paragraphController = async (req, res) => {
  try {
    if (!openai) {
      return res.status(500).json({
        message: "OpenAI API key not configured. Please set OPENAI_API_KEY in your .env file.",
      });
    }

    const { text } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Write a detailed paragraph about: ${text}`,
        },
      ],
      max_tokens: 500,
      temperature: 0.5,
    });

    if (completion.choices && completion.choices[0]) {
      return res.status(200).json(completion.choices[0].message.content);
    }

    return res.status(400).json({ message: "No response generated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};
exports.chatbotController = async (req, res) => {
  try {
    if (!openai) {
      return res.status(500).json({
        message: "OpenAI API key not configured. Please set OPENAI_API_KEY in your .env file.",
      });
    }

    const { text } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: text,
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    if (completion.choices && completion.choices[0]) {
      return res.status(200).json(completion.choices[0].message.content);
    }

    return res.status(400).json({ message: "No response generated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};
exports.jsconverterController = async (req, res) => {
  try {
    if (!openai) {
      return res.status(500).json({
        message: "OpenAI API key not configured. Please set OPENAI_API_KEY in your .env file.",
      });
    }

    const { text } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Convert these instructions into JavaScript code: ${text}`,
        },
      ],
      max_tokens: 400,
      temperature: 0.25,
    });

    if (completion.choices && completion.choices[0]) {
      return res.status(200).json(completion.choices[0].message.content);
    }

    return res.status(400).json({ message: "No response generated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};
exports.scifiImageController = async (req, res) => {
  try {
    if (!openai) {
      return res.status(500).json({
        message: "OpenAI API key not configured. Please set OPENAI_API_KEY in your .env file.",
      });
    }

    const { text } = req.body;
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Generate a sci-fi image of: ${text}`,
      n: 1,
      size: "1024x1024",
    });

    if (response.data && response.data[0] && response.data[0].url) {
      return res.status(200).json(response.data[0].url);
    }

    return res.status(400).json({ message: "No image generated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};
