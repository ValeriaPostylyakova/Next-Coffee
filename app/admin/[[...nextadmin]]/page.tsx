import { getNextAdminProps } from "@premieroctet/next-admin/appRouter";
import { NextAdmin } from "@premieroctet/next-admin/adapters/next";

import prisma from "../../../prisma";
import { adminOptions } from "../options";

export const dynamic = "force-dynamic";


export default async function AdminPage({
  params,
  searchParams,
}: {
  params: { nextadmin?: string[] };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const props = await getNextAdminProps({
    params: params.nextadmin ?? [],
    searchParams,
    basePath: "/admin",
    apiBasePath: "/api/admin",
    prisma,
    options: adminOptions,
  });

  return <NextAdmin {...props} />;
}