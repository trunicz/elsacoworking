import { defineMiddleware } from "astro:middleware";
import { createSessionClient } from "@/src/lib/appwrite";

export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
  try {
    const { account } = createSessionClient(request);
    locals.user = await account.get();
  } catch (error) {
    // Si no hay sesión, simplemente continuamos sin usuario
    locals.user = null;
  }
  return next();
});