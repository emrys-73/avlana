/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { redirect } from '@sveltejs/kit';
import { verify } from 'crypto';

export const load = async ({ locals, params }) => {
    const getUser = async () => {

        const user = await locals.pb.collection('users').getOne(`${params.userId}`);

        return user;
    }

    return {
        user: await getUser()
    }
}

export const actions = {
    verify: async ({ locals, request, params }) => {

        if(locals.pb.authStore.isValid){
            throw redirect(303, `/${params.userId}`)
        }

        throw redirect(303, `/${params.userId}/verify`)
    },
}
