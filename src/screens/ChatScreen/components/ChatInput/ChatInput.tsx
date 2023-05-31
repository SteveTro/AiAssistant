import LottieView from 'lottie-react-native';
import React, { FC, useEffect, useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import { IconButton, TextInput, useTheme } from 'react-native-paper';
import { useSpeech } from '../../../../hooks/useSpeech';
import Animation from './animation.json';

interface IChatInput {
  onSendMessage: (input: string, clear: () => void) => void;
}

const ChatInput: FC<IChatInput> = ({ onSendMessage }) => {
  const theme = useTheme();
  const { input, setInput, animation, isRecording, startRecording, stopRecording, clear } =
    useSpeech();

  const buttonProps =
    input === ''
      ? {
          icon: 'microphone',
          onPress: () => startRecording(),
        }
      : {
          icon: 'send',
          onPress: () => onSendMessage(input, clear),
        };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput multiline onChangeText={setInput} value={input} style={{ flex: 1 }} />
        <IconButton
          {...buttonProps}
          containerColor={theme.colors.primary}
          iconColor="white"
          style={{ borderRadius: 0, padding: 10, margin: 0, height: '100%' }}
        />
      </View>
      {isRecording ? (
        <TouchableWithoutFeedback onPress={() => stopRecording()}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 25,
              backgroundColor: theme.colors.primaryContainer,
            }}
          >
            <LottieView
              style={{ height: 100 }}
              ref={animation}
              source={Animation}
              autoPlay={false}
              loop
            />
          </View>
        </TouchableWithoutFeedback>
      ) : null}
    </KeyboardAvoidingView>
  );
};

export default ChatInput;
