import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import type { CreateCompletionResponse } from "openai/api";
import type { AxiosResponse } from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const promptBase = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. The AI always answers the question, even if it was already asked previously.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: What are the best 5 songs that go well with the book Atomic Habits? Why?\nAI: The best five songs to go with Atomic Habits are \"Start Today\" by Grouplove, \"Change Is Gonna Come\" by Sam Cooke, \"Make it Happen\" by Mariah Carey, \"Break the Chain\" by Toni Childs, and \"Do It Again\" by Steely Dan. These songs offer motivational and inspirational messages about making positive changes and cultivating good habits.\nHuman: What are the best 5 songs that go well with the book Anna Karenina? Why?\nAI: The best five songs to go with Anna Karenina are \"Into the Unknown\" by Panic! At The Disco, \"Dreamers\" by Adele, \"Dream On\" by Aerosmith, \"You're Gonna Make It After All\" by Mary J. Blige, and \"Beauty of the Dark\" by Smokie. These songs capture the themes of hope, struggle, and transformation present in the novel, as well as its underlying message of resilience in the face of adversity.\nHuman: What are the best 5 songs that go well with the book Tomorrow, and Tomorrow, and Tomorrow? Why?\nAI: The best five songs to go with Tomorrow, and Tomorrow, and Tomorrow are \"The Time Is Now\" by Moloko, \"Don't Stop Believing\" by Journey, \"Give It All You Got\" by Austin Mahone, \"Tomorrow\" by Silverchair, and \"Dream On\" by Aerosmith. These songs emphasize the importance of seizing the present moment, as well as the hope of a better future that can be achieved through perseverance and dedication.\nHuman: What are the best 5 songs that go well with the book War and Peace? Why? \nAI: The best five songs to go with War and Peace are \"Nothing Else Matters\" by Metallica, \"Beautiful Day\" by U2, \"On Top of the World\" by Imagine Dragons, \"Carry On\" by Fun., and \"Marching On\" by One Republic. These songs capture the themes of resilience and courage in the face of conflict and turmoil, as well as the strength of determined faith in the eventual emergence of peace and harmony.\n";
const defaultAnswer = {
  choices: ["\"Lonely\" by Akdong Musician","\"The Day\" by BTS","\"The Moon Represents My Heart\" by Teresa Teng","\"The Sun\" by IU","and \"The End of the World\" by Billie Eilish"],
  reason: 'these songs all capture the themes of loneliness, despair, and longing that are present in the book'
};
const answerMap = {};
let count = 0;

export default async function handler(req: NextApiRequest,
                                res: NextApiResponse) {
  const bookNameDirty: string = req.body?.book?.length > 0 ? req.body.book : 'XXX X';
  let bookName = bookNameDirty.replace(/[^a-z\s]/gi, '').replace(/\s\s+/g, ' ');
  if (!!bookNameDirty && (bookName === '' || bookName === ' ' || !bookName)) {
    res.status(400).json({ error: 'Bad book name. What even is that?!' })
    return;
  }
  if (bookName === '' || bookName === ' ' || !bookName) {
    res.status(400).json({ error: 'Book name required. I\'m not a wizard' })
    return;
  }

  // Capitalize first letter of each word
  const words = bookName.split(" ");
  bookName = words.map((word) => {
    return (word[0] as string).toUpperCase() + word.substring(1);
  }).join(" ");

  console.log('bookName', bookName);
  count += 1;
  if (count > 10) {
    console.log(answerMap);
    count = 0;
  }

  // @ts-ignore
  if (!!answerMap[bookName]) {
    // @ts-ignore
    res.status(200).json({ data: answerMap[bookName] });
    return;
  }

  let responseData = defaultAnswer;
  try {
    const response: AxiosResponse<CreateCompletionResponse, any> = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.retry === 1
        ? `${promptBase}Human: What are the best songs that go well with the book ${bookName}? Why?\nAI:`
        : `${promptBase}Human: What are the best 5 songs that go well with the book ${bookName}? Why?\nAI:`,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.3,
      presence_penalty: 0.4,
      stop: [" Human:", " AI:"],
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (!response?.data?.choices?.length) {
      throw new Error('Something went wrong');
    }
    const value = response.data.choices[0]?.text;
    if (!value) {
      throw new Error('Something went wrong');
    }

    if (value === ' Unknown' || value === 'Unknown') {
      res.status(400).json({ unknown: true, error: 'I\'m sorry, I don\'t know that book. Might help if you also include the author\'s name. Otherwise please try another book!' })
      return;
    }

    let choices = [''];
    let reason = '';
    let splitByDot = value.split('. These');
    if (splitByDot[splitByDot.length - 1] === '') {
      splitByDot = splitByDot.slice(0, -1);
    }
    if (splitByDot?.length > 2) {
      // @ts-ignore
      splitByDot = [splitByDot.slice(0, -1).join('.'), splitByDot[splitByDot.length - 1]]
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    splitByDot[splitByDot.length - 1] = `These ${splitByDot[splitByDot.length - 1]}`;
    if (splitByDot?.length > 1) {
      reason = (splitByDot[1] as string).toLowerCase();
      const splitByAre = (splitByDot[0] as string).split(' are ');
      if (splitByAre?.length > 1) {
        const unprocessedChoices = splitByAre[1] as string;
        choices = unprocessedChoices.split(', ');
        choices[choices.length - 1] = (choices[choices.length - 1] as string).replace('and "', '"');
      } else {
        if (req.body.retry === 0) {
          res.status(400).json({ unknown: true, error: 'I\'m sorry, I don\'t know that book. Might help if you also include the author\'s name. Otherwise please try another book!' })
        } else {
          res.status(400).json({ error: 'I\'m sorry, I don\'t know that book. Might help if you also include the author\'s name. Otherwise please try another book!' })
        }
        return;
      }
    } else {
      if (req.body.retry === 0) {
        res.status(400).json({ unknown: true, error: 'I\'m sorry, I don\'t know that book. Might help if you also include the author\'s name. Otherwise please try another book!' })
      } else {
        res.status(400).json({ error: 'I\'m sorry, I don\'t know that book. Might help if you also include the author\'s name. Otherwise please try another book!' })
      }
      return;
    }

    responseData = {
      choices,
      reason,
    };
  } catch (e) { }
  // @ts-ignore
  answerMap[bookName] = responseData;
  res.status(200).json({ data: responseData })
}
