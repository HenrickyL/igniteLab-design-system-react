import {SignIn} from './index'
import {Meta,StoryObj} from '@storybook/react'
import {within, userEvent, waitFor} from '@storybook/testing-library'
import {expect} from '@storybook/jest'
import {rest} from 'msw'
import React from 'react'
export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args:{},
    argTypes:{},
    parameters:{
        msw: {
            handlers:[
                rest.post('/sessions',(req,res,context)=>{
                    return res(context.json({
                        message: "Login Realizado!"
                    }))
                })
            ]
        }
    }
  
} as Meta


export const Default:StoryObj={
    play: async ({canvasElement})=>{
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"),"Henrickyl1@gmail.com")
        userEvent.type(canvas.getByPlaceholderText("*********"),"12345678")

        userEvent.click(canvas.getByRole('button'))
        await waitFor(()=>{
            expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
        })
        


        

    }
}
