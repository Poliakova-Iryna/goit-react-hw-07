import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact } from "./operations";

const initialState = {
   items: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
   filters: '',
   isLoading: false,
};

const slice = createSlice ({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload)
        },
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        })
    }
});

export const selectContacts = state => state.contacts.items;
export const { addContact } = slice.actions;
export const contactReducer = slice.reducer;