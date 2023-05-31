import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { AppScreen } from '../../components';
import { ChatInput, ChatItem } from './components';
import { useChatScreen } from './ChatScreen.hooks';
import { ActivityIndicator, Text } from 'react-native-paper';
import { ChatCompletionResponseMessage } from 'openai';

export interface IChatItem extends ChatCompletionResponseMessage {
  type: 'success' | 'error';
}
function ChatScreen() {
  const { isLoading, history, onSendMessage } = useChatScreen();
  const renderItem: ListRenderItem<IChatItem> = ({ item }) => <ChatItem {...item} />;
  return (
    <AppScreen>
      <FlatList style={{ margin: 16 }} data={history} renderItem={renderItem} />
      {isLoading && (
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Ai is thinking ...</Text>
          <ActivityIndicator style={{ marginLeft: 20 }} animating={true} />
        </View>
      )}
      <ChatInput onSendMessage={onSendMessage} />
    </AppScreen>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({});
