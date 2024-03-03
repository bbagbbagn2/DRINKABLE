import React from 'react';

type ButtonProps = {
  href?: string;
  buttonText?: string;
};

export default function Button({ href, buttonText }: ButtonProps) {
  return (
    <a href={href} className='cmp-teaser__action-link'>
      {buttonText}
    </a>
  );
}