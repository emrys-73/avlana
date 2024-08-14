/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export const load = async ({ locals, params }) => {
    const getUser = async () => {

        const user = await locals.pb.collection('users').getOne(`${params.userId}`);

        return user;
    }

    return {
        user: await getUser()
    }
}

