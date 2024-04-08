import React from "react";
import styles from "./Avatar.module.css";
import Image from "next/image";

export function Avatar({
  name,
  otherStyles,
}: {
  otherStyles: string;
  name: string;
}) {
  return (
    <div
      className={`${otherStyles} ${styles.avatar} h-9 w-9`}
      data-tooltip={name}
    >
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
        alt={name}
        fill
        className={styles.avatar_picture}
      />
    </div>
  );
}