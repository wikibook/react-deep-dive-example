'use server'

import kv from '@vercel/kv'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function updateData(
  id: string,
  data: { name: string; age: number },
) {
  const key = `test:${id}`

  await kv.set(key, {
    name: data.name,
    age: data.age,
  })

  revalidatePath(`/server-action/form/${id}`)
}
