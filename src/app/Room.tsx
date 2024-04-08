"use client";

import { LiveMap } from "@liveblocks/client";
import { RoomProvider } from "../../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import Loader from "@/src/components/navbar/Loader";

export function Room({ children }: { children: React.ReactNode }) {
  return (
    <RoomProvider
      id="my-room"
      initialPresence={{
        cursor: null,
        cursorColor: null,
        editingText: null,
        message: null,
      }}
      initialStorage={{
        canvasObjects: new LiveMap(),
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
