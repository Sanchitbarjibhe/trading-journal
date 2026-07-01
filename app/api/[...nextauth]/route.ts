// app/api/auth/[...nextauth]/route.ts
import { handlers } from "../auth/route";

export const { GET, POST } = handlers;