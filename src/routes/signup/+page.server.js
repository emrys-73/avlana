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
            "name": data.name,
        };
        
        const record = await locals.pb.collection('users').create(user);
        
        await locals.pb.collection('users').requestVerification(data.email);

        throw redirect(303, `/${record.id}/verify`)        

    },

    registerLegacy: async ({ locals, request }) => {

        const data = Object.fromEntries(await request.formData());

        const newAvlanaUser = {
            "name": data.name,
            "email": data.email,
            "emailVisibility": true,
            "password": data.password,
            "passwordConfirm": data.passwordConfirm
        };

        const newAvlanaUserRecord = await locals.pb.collection('users').create(newAvlanaUser);
        await locals.pb.collection('users').requestVerification(`${data.email}`);
        console.log(newAvlanaUserRecord)
        

        throw redirect(303, `/${newAvlanaUserRecord.id}/verify`)
    }
}