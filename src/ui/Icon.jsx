import React from 'react';
import * as Icons from './icons';

const Icon = ({ title, ...props }) => {
  const SvgIcon = Icons[title.charAt(0).toUpperCase() + title.slice(1) + 'Icon'];
  return SvgIcon ? <SvgIcon {...props} /> : null;
};

export default Icon;
