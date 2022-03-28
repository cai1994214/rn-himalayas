/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconFaxian from './IconFaxian';
import IconYinletianchong from './IconYinletianchong';
import IconWode from './IconWode';
import IconShoucang from './IconShoucang';
import IconShouye from './IconShouye';
export { default as IconFaxian } from './IconFaxian';
export { default as IconYinletianchong } from './IconYinletianchong';
export { default as IconWode } from './IconWode';
export { default as IconShoucang } from './IconShoucang';
export { default as IconShouye } from './IconShouye';

export type IconNames = 'icon-faxian' | 'icon-yinletianchong' | 'icon-wode' | 'icon-shoucang' | 'icon-shouye';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-faxian':
      return <IconFaxian key="1" {...rest} />;
    case 'icon-yinletianchong':
      return <IconYinletianchong key="2" {...rest} />;
    case 'icon-wode':
      return <IconWode key="3" {...rest} />;
    case 'icon-shoucang':
      return <IconShoucang key="4" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="5" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
