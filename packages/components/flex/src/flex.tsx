import React, { CSSProperties } from 'react';
import classes from './flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
export type FlexAlign = 'stretch' | 'center' | 'end' | 'start';
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export declare interface FlexProps {
    children?: React.ReactNode;
    mih?: number;
    style?: CSSProperties;
    gap?: number;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    wrap?: FlexWrap;
    className?: string;
}

export const Flex = (props: FlexProps) => {
    return (
        <div
            style={{
                ...props.style,
                minHeight: props.mih,
                gap: props.gap,
                justifyContent: props.justify,
                alignItems: props.align,
                flexDirection: props.direction,
                flexWrap: props.wrap,
            }}
            className={classes.root + " " + (props.className ?? "")}
        >
            {props.children}
        </div>
    );
}