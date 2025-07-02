let likeCount = 0; // Contador en memoria

export const getLikes = async () => {
  return likeCount;
};

export const addLike = async () => {
  likeCount += 1;
  return likeCount;
};
