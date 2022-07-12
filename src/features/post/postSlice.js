import { createSlice } from "@reduxjs/toolkit";


const initialState  = [
    {id: '1' , title: 'Learning Redux' , content:'helooooo'},
    {id: '2' , title: 'Learning toolkit' , content:'hi'},
    {id: '3' , title: 'Learning React' , content:'how are you'},
]


const postSlice = createSlice ({

    name:'posts',
    initialState,
    reducers: {

    }
})

export const selectAllPosts = (state) => state.posts

export default postSlice.reducer