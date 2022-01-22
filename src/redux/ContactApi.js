import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61e7e46be32cd90017acbe51.mockapi.io/api/1v/',
  }),
  tagTypes: ['CONTACT'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['CONTACT'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
      invalidatesTags: ['CONTACT'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `./contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['CONTACT'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactApi;
