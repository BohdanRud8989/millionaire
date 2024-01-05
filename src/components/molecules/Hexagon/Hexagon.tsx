import React from 'react';
import { useBreakpoints } from '@hooks';
import { SVGConfigType, HexagonVariantType, HexagonType } from '@types';

import styles from './hexagon.module.css';

const SVGConfig: SVGConfigType = {
  flattened: {
    mobile: {
      width: 320,
      height: 32,
      viewBox: '0 0 320 32',
      leftArrowPath: 'M41 16H0',
      rightArrowPath: 'M320 16H279',
      containerPath: 'M53.5303 3.70404C55.6719 1.64809 58.5256 0.5 61.4944 0.5H258.506C261.474 0.5 264.328 1.64809 266.47 3.70404L279.278 16L266.47 28.296C264.328 30.3519 261.474 31.5 258.506 31.5H61.4944C58.5256 31.5 55.6719 30.3519 53.5303 28.296L40.722 16L53.5303 3.70404Z',
      y: 24,
    },
    desktop: {
      width: 376,
      height: 40,
      viewBox: '0 0 376 40',
      leftArrowPath: 'M69 20H0',
      rightArrowPath: 'M376 20H307',
      containerPath: 'M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z',
      y: 28,
    },
  },
  stretched: {
    mobile: {
      width: 320,
      height: 56,
      viewBox: '0 0 320 56',
      leftArrowPath: 'M303 28L320 28',
      rightArrowPath: 'M0 28L17 28',
      containerPath: 'M32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576Z',
      y: 35,
    },
    desktop: {
      width: 405,
      height: 72,
      viewBox: '0 0 405 72',
      leftArrowPath: 'M388 36L405 36',
      rightArrowPath: 'M0 36L17 36',
      containerPath: 'M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z',
      y: 42,
    },
  },
};

export type HexagonProps = React.HTMLAttributes<SVGSVGElement> & {
  variant?: HexagonVariantType
  type?: HexagonType
  text: string
  prefix?: string
  centered?: boolean
};

export default function Hexagon({
  variant = 'inactive', type = 'stretched', text, prefix, centered, ...props
}: HexagonProps) {
  const { isLg } = useBreakpoints();
  const {
    width, height, viewBox, containerPath, leftArrowPath, rightArrowPath, y,
  } = SVGConfig[type][isLg ? 'desktop' : 'mobile'];

  return (
    <svg
      className={styles[variant]}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      {...props}
    >
      <path d={leftArrowPath} stroke="#D0D0D8" />
      <path d={rightArrowPath} stroke="#D0D0D8" />
      <path d={containerPath} fill="white" stroke="#D0D0D8" />
      <text x={centered ? '37.5%' : '50'} y={y} className={styles.text}>
        {prefix && (
        <tspan className={styles.prefix}>
          {prefix}
          {'  '}
        </tspan>
        )}
        {text}
      </text>
    </svg>
  );
}
