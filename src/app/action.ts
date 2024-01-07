"use server";

import { revalidatePath } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

export async function increaseCheckinCount() {
  const auth = await getServerAuthSession();

  if (!auth) {
    return {
      status: 401,
      body: {
        message: "Unauthorized",
      },
    };
  }

  const user = await db.user.findUnique({
    where: {
      id: auth.user.id,
    },
  });

  if (!user) {
    return {
      status: 401,
      body: {
        message: "User not found",
      },
    };
  }

  const checkin = await db.user.update({
    where: { id: user.id },
    data: {
      checkinCount: {
        increment: 1,
      },
    },
  });

  revalidatePath("/account");

  return {
    status: 200,
    body: {
      checkInCount: checkin.checkinCount,
    },
  };
}
