/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconShouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M888 462.4L544 142.4c-19.2-17.6-48-17.6-65.6 0l-344 320c-9.6 9.6-16 22.4-16 35.2v355.2c0 27.2 22.4 49.6 49.6 49.6h683.2c27.2 0 49.6-22.4 49.6-49.6V497.6c3.2-12.8-3.2-25.6-12.8-35.2z m-32 392c0 1.6-1.6 1.6-1.6 1.6h-240V657.6c0-56-46.4-102.4-102.4-102.4-56 0-102.4 46.4-102.4 102.4v198.4h-240c-1.6 0-1.6-1.6-1.6-1.6V497.6l344-320 344 320v356.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShouye.defaultProps = {
  size: 18,
};

IconShouye = React.memo ? React.memo(IconShouye) : IconShouye;

export default IconShouye;
