import {Text,TextProps} from './index'
import {Meta,StoryObj} from '@storybook/react'
import React from 'react'
export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: "Lorem ipsum",
        size: 'md'
    },
    argTypes:{
        size: {
            options: ['sm','md','lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Small:StoryObj<TextProps>={
    args:{
        size: 'sm'
    }
}
export const Default:StoryObj<TextProps>={}
export const Large:StoryObj<TextProps>={
    args:{
        size: 'lg'
    }
}
export const CustomComponent:StoryObj<TextProps>={
    args:{
        asChield: true,
        children: (
            <p>Text with P tag</p>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true
            }
        },
        asChield:{
            table:{
                disable: true
            }
        }
    }
}
