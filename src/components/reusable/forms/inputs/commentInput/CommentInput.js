import React from 'react';

const CommentsInput = () => {
  return (
    // <fieldset className="input-fieldset">
    //   <legend className="input-legend">Сообщение</legend>
      <textarea className="multiline-input" name="message" cols="1" rows="1" placeholder="Оставьте сообщение" />
    // </fieldset>
  );
};

export default CommentsInput;
