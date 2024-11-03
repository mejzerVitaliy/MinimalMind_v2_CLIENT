import { LogInTypes } from "@/components/organisms/LogInOrganism";
import { User } from "@/types/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = 'https://minimal-mind-server.onrender.com/api/'

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
        }),
        checkUserAuth: builder.query<User | null, { login: string; password: string }>({
            query: ({ login }) => ({
                url: 'users',
                method: 'GET',
                params: { login },
            }),
            transformResponse: (response: User[], meta, arg: LogInTypes) => {
                const targetUser = response.find(
                    (user) => user.password === arg.password
                );
                return targetUser || null;
            }
        })
    })
})

export const { useCreateUserMutation, useGetUserByIdQuery, useLazyCheckUserAuthQuery } = userApi