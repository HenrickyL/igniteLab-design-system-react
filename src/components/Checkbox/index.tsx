import React, { ReactNode } from "react";
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {Check} from 'phosphor-react'
export interface CheckboxProps{
    children: ReactNode;
}

export function Checkbox({children}: CheckboxProps){
    return(
        <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
            <CheckboxPrimitive.Indicator asChild>
                <Check width="bold" className="h-5 w-5 text-cyan-500"/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}