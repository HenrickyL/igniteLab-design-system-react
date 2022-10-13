import React, { ReactNode } from "react";
import {clsx} from 'clsx' 
import {Slot} from '@radix-ui/react-slot'
export interface TextProps{
    size? : 'sm' | 'md' | 'lg'
    children: ReactNode;
    asChield?:  boolean
}

export function Text({size='md',children, asChield}: TextProps){
    const Comp = asChield ? Slot: 'span'
    return(
        <Comp className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg'
            }
        )}>{children}</Comp>
    )
}