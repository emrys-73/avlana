/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
    const getUser = async () => {

        try {
            const user = await locals.pb.collection('users').getOne(`${params.userId}`);
            
            return user;
        } catch (error) {
            console.log(error)
        }
    }

    return {
        user: await getUser()
    }
}

export const actions = {
    logout: async ({ locals, request }) => {
        locals.pb.authStore.clear();

        throw redirect(303, `/`)
    },

    run: async ({ locals, request }) => {
        // Some logic here connecting to our Backend or mildly running here already

        throw redirect(303, `/${locals.user.id}/run`)
    },
}

