import axios from "axios";
const API_KEY = import.meta.env.VITE_OPENAPI_API_KEY;

export const getChatResponse = async (messages, prompt) => {
    const systemMessage = { role: "system", content: prompt };
    const userMessages = messages.map((m) => ({ role: "user", content: m }));

    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-3.5-turbo",
            messages: [systemMessage, ...userMessages],
            temperature: 0.7,
        },
        {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
        }
    );

    console.log(response);
    return response.data.choices[0].message.content;
};
