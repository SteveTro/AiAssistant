import axios, { AxiosResponse } from 'axios';
import {
  ChatCompletionRequestMessage,
  Configuration,
  CreateChatCompletionResponse,
  OpenAIApi,
} from 'openai';
import { useState } from 'react';
import { IChatItem } from './ChatScreen';
import Config from 'react-native-config';

export const useChatScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [history, setHistory] = useState<IChatItem[]>([
    {
      role: 'assistant',
      content: 'Hi, how can I help you?',
      type: 'success',
    },
  ]);

  const openAICall = async (
    messages: IChatItem[]
  ): Promise<AxiosResponse<CreateChatCompletionResponse, any>> => {
    const apiKey = Config.REACT_APP_API_URL ?? '';
    const url = Config.REACT_APP_OPENAPIKEY ?? '';

    const oaiMessages = messages.map((message) => {
      const { type, ...rest } = message;
      return rest;
    });
    const response = await axios.post(
      url,
      {
        model: 'gpt-4',
        messages: oaiMessages,
        stream: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response;
  };

  const onSendMessage = async (text: string, clear: () => void) => {
    try {
      const newMessage = { role: 'user', content: text, type: 'success' } as IChatItem;
      setLoading(true);
      clear();
      setHistory((prev) => [...prev, newMessage]);
      let result = await openAICall([...history, newMessage]);
      const resMessage = result?.data.choices[0].message ?? { content: '', role: 'assistant' };
      setHistory((prev) => [...prev, { ...resMessage, type: 'success' }]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, history, onSendMessage };
};
