/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Pocketbase from 'pocketbase'
import Airtable from 'airtable'
import { AIRTABLE_API_KEY } from '$env/static/private';

const serializeNonPOJOs = (/** @type {any} */ obj) => {
    return structuredClone(obj)
};

export const handle = async ({ event, resolve }) => {
    event.locals.pb = new Pocketbase('https://base.avlana.co/');

    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    try {
        if (event.locals.pb.authStore.isValid) {
            await event.locals.pb.collection('users').authRefresh()
            event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)  
        }
    
    } catch (_) {
        event.locals.pb.authStore.clear()
        event.locals.user = undefined
    }

    event.locals.at = new Airtable({ apiKey: AIRTABLE_API_KEY })
    event.locals.base = event.locals.at.base('appPUmTOpMO0zq0Fu');

    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

    return response
}