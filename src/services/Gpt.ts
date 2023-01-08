import { Configuration, OpenAIApi } from "openai";
import { LocalStorage } from "./LocalStorage";
import { promptCours } from "./prompts/cours";

export interface Response {
  result?: string;
  error?: string;
}

export class Gpt {
  static async completion(prompt: string): Promise<Response> {
    if (!LocalStorage.get("apiKey")) {
      return {
        error: "Veuillez entrer votre clé API GPT dans les préférences.",
      };
    }

    const configuration = new Configuration({
      apiKey: LocalStorage.get("apiKey") || "",
    });
    const openai = new OpenAIApi(configuration);
    const tokenCount = Math.floor(prompt.length / 3) + 100;

    let response;
    try {
      response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 4000 - tokenCount,
        temperature: 0,
        top_p: 1,
        n: 1,
        stream: false,
        logprobs: null,
      });
    } catch (error) {
      return { result: "", error: (error as Error).message };
    }

    return { result: response.data.choices[0].text };
  }

  static async cours(prompt: string): Promise<Response | undefined> {
    const finalPrompt = promptCours(prompt);
    return await Gpt.completion(finalPrompt);
  }
}
