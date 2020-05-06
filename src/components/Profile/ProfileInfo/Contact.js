import React from 'react';

const Contact = ({contactTitle, contactValue}) => {
  return (
      <div>
        {contactTitle}: {contactValue}
      </div>
  )
};

export default Contact;
