/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit'
// import { generateUsername } from '$lib/utils.ts'

export const actions = {
    register: async ({ locals, request }) => {

        const data = Object.fromEntries(await request.formData());

        const user = {
            "email": data.email,
            "emailVisibility": true,
            "password": data.password,
            "passwordConfirm": data.passwordConfirm,
            "full_name": data.full_name,
            "admin": false
        };
        
        const record = await locals.pb.collection('users').create(user);
        
        await locals.pb.collection('users').requestVerification(data.email);

        const authData = await locals.pb.collection('users').authWithPassword(
            data.email,
            data.password,
        );

        throw redirect(303, `/${record.id}/verify`)        

    },
}