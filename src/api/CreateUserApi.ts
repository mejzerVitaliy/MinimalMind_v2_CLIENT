import { User } from "@/types/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = 'http://localhost:5000/api/'

export const userApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        createUser: builder.mutation<void, User>({
            query: (user) => ({
                url: 'users',
                method: 'POST',
                body: user
            })
        }),
        getUserById: builder.query<User, string>({
            query: (id:string ) => ({
                url: `users/${id}`,
                method: 'GET'
            })
        })
    })
})

export const { useCreateUserMutation, useGetUserByIdQuery } = userApi