import "server-only";

import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";

const DAY_IN_MS = 86_400_400;

export const checkSubscription = async () => {
  const { userId } = auth();
  if (!userId) return false;

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: { userId },
    select: {
      stripeSubscriptionId: true,
      stripePriceId: true,
      stripeCustomerId: true,
      stripeCurrentPeriodEnd: true,
    },
  });

  if (!userSubscription) return false;

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
