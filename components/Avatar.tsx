import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

import useUser from "@/hooks/useUser";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();

  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback((event: any) => {
    event.stopPropagation();

    const url = `/users/${userId}`;

    router.push(url);
  }, [router, userId]);

  return (
    <div
      className={`
        ${hasBorder ? 'border-[6px] border-neutral-900' : ''}
        ${isLarge ? 'h-24' : 'h-10'}
        ${isLarge ? 'w-24' : 'w-10'}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
        flex-shrink-0 
      `}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || '/images/placeholder.png'}
      />
    </div>
  );
}
 
export default Avatar;