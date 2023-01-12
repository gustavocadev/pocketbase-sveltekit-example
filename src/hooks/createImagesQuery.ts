import { createQuery } from '@tanstack/svelte-query';
import { createCounter } from './useCounter';

const getImages = async (images: number) => {
  const resp = await fetch(
    `https://picsum.photos/v2/list?page=2&limit=${images}`
  );
  const data = await resp.json();
  return data;
};

type Props = {
  initialQuantityImages: number;
};

export const createImagesQuery = ({ initialQuantityImages }: Props) => {
  const counter = createCounter(initialQuantityImages);

  let count: number;
  counter.subscribe((current) => {
    console.log({ current });
    count = current;
  });

  const queryImages = createQuery(['images'], () => getImages(count));

  return {
    queryImages,
    counter,
  };
};
