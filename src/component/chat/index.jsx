import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from 'react-chat-engine-advanced';
import CustomHeader from '../customheader';
import StandardMessageForm from '../custommessageforms/standardmessageform';

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    'testuser',
    '123'
  );

  return (
    <div style={{ flexBasis: '100%' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: '100vh' }}
        renderChatHeader={(chat) => (
          <CustomHeader
            chat={chat}
            renderMessageForm={(props) => {
              return (
                <StandardMessageForm
                  props={props}
                  activeChat={chatProps.chat}
                />
              );
            }}
          />
        )}
      />
    </div>
  );
};

export default Chat;
