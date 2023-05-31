import { RefObject, useEffect, useRef, useState } from 'react';
import Voice from '@react-native-community/voice';
import { SpeechEndEvent, SpeechResultsEvent, SpeechStartEvent } from '@react-native-voice/voice';
import AnimatedLottieView from 'lottie-react-native';

export const useSpeech = () => {
  const animation = useRef<AnimatedLottieView>(null);

  const [input, setInput] = useState('');
  const [isRecording, setRecording] = useState(false);
  const [isVoice, setIsVoice] = useState(false);

  const speechStartHandler = (e: SpeechStartEvent) => {
    console.log('speechStart successful', e);
  };

  const speechEndHandler = (e: SpeechEndEvent) => {
    setRecording(false);
    console.log('stop handler', e);
  };

  const speechResultsHandler = (e: SpeechResultsEvent) => {
    animation.current?.play();
    console.log('result', e);
    const text = e.value?.[0] ?? '';
    setInput(text);
  };

  const onSpeechError = (e) => {
    console.log('_onSpeechError');
    console.log(e.error);
  };
  const startRecording = async (): Promise<void> => {
    setRecording(true);
    console.log('start handler', isRecording);
    try {
      await Voice.start('en-GB');
    } catch (error) {
      console.log('error', error);
    }
  };

  const stopRecording = async (): Promise<void> => {
    try {
      await Voice.stop();
      setRecording(false);
      setInput('');
    } catch (error) {
      console.log('error', error);
    }
  };

  const clear = () => {
    setInput('');
  };

  const destory = () => {
    Voice.stop()
      .then(async () => {
        await Voice.destroy();
        Voice.removeAllListeners();
      })
      .catch((error: unknown) => console.log(error));
  };

  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = onSpeechError;

    return () => {
      destory();
    };
  }, []);

  return {
    input,
    isVoice,
    isRecording,
    animation,
    setInput,
    startRecording,
    stopRecording,
    clear,
  };
};
