import { createSlice } from '@reduxjs/toolkit'

const uiReducer = createSlice({
    name: 'ui',
    initialState: {
        mode: localStorage.getItem('portTheme') ?? 'light'
    },
    reducers: {
       toggleMode (state){
           if(state.mode === 'dark')
               state.mode = 'light'
           else state.mode = 'dark'

           localStorage.setItem('portTheme', state.mode)
           return state
       }
    }
})


export const uiActions = uiReducer.actions
export const reducer = uiReducer.reducer
