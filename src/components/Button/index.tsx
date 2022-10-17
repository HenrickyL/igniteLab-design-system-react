import React, { ReactNode } from "react";
import {clsx} from 'clsx' 
import {Slot} from '@radix-ui/react-slot'
export interface ButtonProps{
    children: ReactNode;
    asChield?:  boolean
}

export function Button({children, asChield}: ButtonProps){
    const Comp = asChield ? Slot: 'button'
    return(
        <Comp className={clsx(
            `py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full 
                transition-colors hover:bg-cyan-300 focus:right-2 ring-white`,
            {
                
            }
        )}>{children}</Comp>
    )
}