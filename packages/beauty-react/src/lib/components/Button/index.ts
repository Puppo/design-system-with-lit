import React from 'react';
import { createComponent } from '@lit-labs/react';
import { Button as OriginalButton, ButtonSelector } from '@ds/beauty';

export const Button = createComponent({
  tagName: ButtonSelector,
  elementClass: OriginalButton,
  react: React,
  events: {
    onclick: 'click',
    oncustomover: 'customover',
  },
});
