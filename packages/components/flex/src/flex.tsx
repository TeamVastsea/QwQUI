import React from 'react';
import classes from './flex.module.scss';

export declare interface FlexProps {
    children?: React.ReactNode;
    mih?: number;
    bg?: string;
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'center' | 'flex-end' | 'flex-start';
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export const Flex = (props: FlexProps) => {
    return (
        <div
            style={{
                background: props.bg,
                minHeight: props.mih,
                gap: props.gap ? `var(--spacing-${props.gap})` : null,
                justifyContent: props.justify,
                alignItems: props.align,
                flexDirection: props.direction,
                flexWrap: props.wrap,
            }}
            className={classes.root}
        >
            {props.children}
        </div>
    );
}