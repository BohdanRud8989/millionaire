import {useBreakpoints} from "@hooks";
import { SVGConfigType, HexagonVariantType } from "@types";

import styles from './hexagon.module.css'

const SVGConfig: SVGConfigType = {
    "mobile": {
        width: 288,
        height: 56,
        viewBox: '0 0 288 56',
        pathD: 'M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z',
        y: 35
    },
    "desktop": {
        width: 373,
        height: 72,
        viewBox: '0 0 373 72',
        pathD: 'M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z',
        y: 40
    },
}

export type HexagonProps = React.HTMLAttributes<SVGSVGElement> & {
    variant?: HexagonVariantType
    text: string
    prefix?: string
    centered?: boolean
}

const Hexagon = ({ variant = 'inactive', text, prefix, centered, ...props }: HexagonProps) => {
    const { isLg } = useBreakpoints()
    const { width, height, viewBox, pathD, y } = SVGConfig[isLg ? 'desktop': 'mobile']

    return <svg className={styles[variant]}
                     xmlns="http://www.w3.org/2000/svg"
                     width={width}
                     height={height}
                     viewBox={viewBox}
                     fill="none"
                     {...props}>
        {/*TODO adjust it*/}
            <path d="M0 1L17 1" stroke="#D0D0D8"/>
            <path d={pathD} fill="white" stroke="#D0D0D8"/>
            <text x={centered ? '37.5%' : '20'} y={y} className={styles.text}>
                {prefix && <tspan className={styles.prefix}>
                    {prefix}{'  '}
                </tspan>}
                {text}
            </text>
        {/*TODO adjust it*/}
            <path d="M0 1L17 1" stroke="#D0D0D8"/>
        </svg>
};

export { Hexagon };
