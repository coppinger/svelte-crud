// import { fail } from "assert"
// import { prisma } from '$lib/server/prisma'
// import type { Actions } from "./$types";

// export const actions: Actions = {
//     createTodo: async ({ request }) => {
//         const { task } = Object.fromEntries(await request.formData()) as {
//             content: string;
//         };

//         try {
//             await prisma.task.create(data: {
//                 task
//             })
//         } catch (err) {
//             console.log(err)
//             return fail(500, { message: 'Could not create todo'})
//         }
//         return {
//             status: 201
//         }
//     },
// };
