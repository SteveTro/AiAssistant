import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { ChatCompletionRequestMessage, ChatCompletionResponseMessage } from 'openai';
import { IChatItem } from '../../ChatScreen';
import { MD3Theme, ThemeBase, useTheme } from 'react-native-paper';

const ChatItem: FC<IChatItem> = ({ content, role }) => {
  const theme = useTheme();
  return (
    <View style={[styles(theme).message, styles(theme)[role]]}>
      <Text style={{ color: '#fff' }}>{content}</Text>
    </View>
  );
};

export default ChatItem;

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    message: {
      marginVertical: 10,
      padding: 15,
      backgroundColor: '#eee',
      borderRadius: 15,
      width: '80%',
    },
    assistant: {
      borderTopLeftRadius: 0,
      backgroundColor: theme.colors.secondary,
    },
    user: {
      borderTopRightRadius: 0,
      alignSelf: 'flex-end',
      backgroundColor: theme.colors.primary,
    },
    system: {},
  });
