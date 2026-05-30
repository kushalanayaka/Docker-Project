"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAdmin } from "../../lib/auth";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedAdminRoute({
  children,
}: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin()) {
      router.push("/login");
    }
  }, [router]);

  if (!isAdmin()) {
    return null;
  }

  return <>{children}</>;
}