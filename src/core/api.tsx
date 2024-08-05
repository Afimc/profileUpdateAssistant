import OpenAI from "openai";
import { IData, IStep } from "./types";

const apiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true});

const getSteps = async (inputString: string): Promise<IStep[]> => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
          From Provided data please generate a json Array in the following format
          {"generalSteps": [{"title": String, "description": String}]}
          Each item inside should be a object that the user should follow to make the profile look professional.
          Generate the information to make the profile look professional.
          example: 
        `
      },
      {
        role: "user",
        content: inputString
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
  });

  const stepsResultString = completion.choices?.[0]?.message?.content || null;
  if (!stepsResultString) throw new Error("Not able to Parse the data for steps");
  const stepsResult = JSON.parse(stepsResultString) as { generalSteps: IStep[] };
  return stepsResult.generalSteps;
};

const getDescription = async (inputString: string): Promise<string> => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
          From Provided data please generate a profile description as text 
          Generate the information to make the profile look professional.
          At least 300 words
        `
      },
      {
        role: "user",
        content: inputString
      }
    ],
    model: "gpt-3.5-turbo",
  });

  const descriptionResultString = completion.choices?.[0]?.message?.content || null;
  if (!descriptionResultString) throw new Error("Not able generate the description");
  return descriptionResultString;
};

const getProposals = async (inputString: string): Promise<string> => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
          From Provided data please generate a proposals example as text 
          Generate the information to make the profile look professional.
          At least 150 words
        `
      },
      {
        role: "user",
        content: inputString
      }
    ],
    model: "gpt-3.5-turbo",
  });

  const proposalsResultString = completion.choices?.[0]?.message?.content || null;
  if (!proposalsResultString) throw new Error("Not able generate the proposals example");
  return proposalsResultString;
};


export const getData = async (
  inputString: string
): Promise<{
  data?: IData;
  errorMsg?: string;
}> => {
  try {
    const generalSteps = await getSteps(inputString);
    const profileDescription = await getDescription(inputString);
    const proposalsExample = await getProposals(inputString);
    const result: IData = { generalSteps, profileDescription, proposalsExample };
    return { data: result };
    //eslint-disable-next-line
  } catch (error: any) {
    return { errorMsg: error.message };
  }
};
