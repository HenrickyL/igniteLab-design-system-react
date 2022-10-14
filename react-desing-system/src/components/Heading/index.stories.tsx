import {Heading,HeadingProps} from './index'
import {Meta,StoryObj} from '@storybook/react'
import React from 'react'

export default {
    title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingProps>

export const Small:StoryObj<HeadingProps>={
    args:{
        size: 'sm'
    }
}
export const Default:StoryObj<HeadingProps>={}
export const Large:StoryObj<HeadingProps>={
    args:{
        size: 'lg'
    }
}
export const CustomComponent:StoryObj<HeadingProps>={
    args:{
        asChield: true,
        children: (
            <h1>Heading wih H1</h1>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true
            }
        },asChield:{
            table:{
                disable: true
            }
        }
    }
}
