import { createHandler } from "@premieroctet/next-admin/appHandler";

import prisma from "../../../../prisma";
import { adminOptions } from "@/app/admin/options";

export const dynamic = "force-dynamic";

const { run } = createHandler({
  apiBasePath: "/api/admin",
  prisma,
  options: adminOptions,
});

export {
  run as GET,
  run as POST,
  run as DELETE,
};