import axios from "axios";
import OpenAI from "openai";

const apiKey = 'test';
const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true
})

export const getData = async() => {
  console.log('test')
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: '',
      }
    ],
    model: 'test'
  })
  console.log(completion)
  axios.get('https://api.openai.com/v1/chat/completions', {headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+apiKey,
    'OpenAI-Beta': 'assistants=v1',
  }})
}