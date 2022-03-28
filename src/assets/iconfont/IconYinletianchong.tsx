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

let IconYinletianchong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M577.948672 39.648256 442.712064 39.648256c-226.089984 0-409.99936 183.904256-409.99936 409.99936l0 490.211328c0 8.854528 8.231936 16.101376 17.091584 16.101376L196.0448 955.96032c37.082112 0 67.233792-30.15168 67.233792-67.279872L263.278592 657.354752c0-37.087232-30.15168-67.238912-67.233792-67.238912L64.746496 590.11584 64.746496 449.64864c0-208.421888 169.54368-377.969664 377.965568-377.969664l135.237632 0c208.375808 0 377.924608 169.547776 377.924608 377.969664l0 140.468224L817.328128 590.116864c-37.087232 0-67.238912 30.15168-67.238912 67.238912l0 231.32672c0 37.128192 30.15168 67.279872 67.238912 67.279872l154.737664-0.08704c8.767488-0.091136 15.83616-7.246848 15.83616-16.01536L987.901952 449.64864C987.902976 223.553536 803.9936 39.648256 577.948672 39.648256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconYinletianchong.defaultProps = {
  size: 18,
};

IconYinletianchong = React.memo ? React.memo(IconYinletianchong) : IconYinletianchong;

export default IconYinletianchong;
