import React from 'react';
import { createComponent } from '@lit-labs/react';
import { Colors as OriginalColors, ColorsSelector } from '@ds/beauty';

export const Colors = createComponent({
  tagName: ColorsSelector,
  elementClass: OriginalColors,
  react: React,
});
