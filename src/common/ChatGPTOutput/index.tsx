import React from 'react';

const formatChatGPTText = (text) => {
  
  const lines = text.split('\n');
  
  return lines.map((line, index) => {
    
    const formattedLine = line.split('**').map((part, partIndex) => {
      if (partIndex % 2 === 1) {
        return <strong key={partIndex}>{part}</strong>;       }
      return part;
    });

    if (line.trim().startsWith('* ')) {
      return (
        <li key={index}>
          {formattedLine}
        </li>
      );
    }

    return (
      <React.Fragment key={index}>
        {formattedLine}
        <br />
      </React.Fragment>
    );
  });
};

const ChatGPTOutput = ({ text }) => {
  const formattedLines = formatChatGPTText(text);
  const listItems = formattedLines.filter(line => line.type === 'li');
  const nonListItems = formattedLines.filter(line => line.type !== 'li');

  return (
    <div>
      {nonListItems}
      {listItems.length > 0 && <ul>{listItems}</ul>}
    </div>
  );
};

export default ChatGPTOutput;
