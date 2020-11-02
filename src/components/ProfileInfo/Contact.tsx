import React, {FC} from 'react';

type PropsTypes = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<PropsTypes> = ({contactTitle, contactValue}) => {
  return (
      <div>
        {contactTitle}: {contactValue}
      </div>
  )
};

export default Contact;
