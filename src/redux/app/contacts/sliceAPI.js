import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://627447ab3d2b5100742a6075.mockapi.io/api/v1',
  }),
  // refetchOnReconnect: true,
  // refetchOnFocus: true,

  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'GET',
      }),
      providesTags: ['Contacts'],
    }),

    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: newContact.name,
          phone: newContact.phone,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),

    editContact: builder.mutation({
      query: ({id, name, phone}) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: {
           name,
          phone,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useCreateContactMutation,
  useEditContactMutation,
  useDeleteContactMutation,
} = contactsApi;

