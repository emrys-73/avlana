/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {

    let localScenes = []

    const scenes = await locals.base('Scenes').select({
        maxRecords: 10,
        view: "Grid view"
    }).eachPage(
        function page(records, fetchNextPage) {
            records.forEach(function(record) {
                
                // console.log('Scene name:', record.get('Name'));
                // console.log('Description:', record.get('Description'));
            })}
    )
    
    return {
        scenes: localScenes
    }

}