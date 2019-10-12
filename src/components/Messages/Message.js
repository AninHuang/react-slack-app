import React from 'react';
import moment from 'moment';
import { Comment,Image } from 'semantic-ui-react';


const isOwnMessage = (message, user) => {
    return message.user.id === user.uid ? 'message__self' : '';
}

const isImage = message => {
  // Object的hasOwnProperty()方法返回一个布林值，判斷對象是否包含特定的自身（非繼承）屬性。
 
  return message.hasOwnProperty("image") && !message.hasOwnProperty("content");
};

const timeFromNow = timestamp => moment(timestamp).fromNow();

const Message = ({ message, user }) => (

    <Comment>
    <Comment.Avatar src={message.user.avatar} />
    <Comment.Content className={isOwnMessage(message, user)}>
      <Comment.Author as="a">{message.user.name}</Comment.Author>
      <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
      {isImage(message) ? (
        <Image src={message.image} className="message__image" />
      ) : (
        <Comment.Text>{message.content}</Comment.Text>
      )}
    </Comment.Content>
  </Comment>
);



export default Message;