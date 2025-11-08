'use client';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function LottiePlayer({
  path,
  className,
}: {
  path: string;
  className?: string;
}) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then(setData)
      .catch(() => {});
  }, [path]);

  if (!data) return null;
  return <Lottie animationData={data} loop={true} autoplay={true} className={className} />;
}
