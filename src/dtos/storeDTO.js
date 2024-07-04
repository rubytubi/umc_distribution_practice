export const addStoreResDTO = (store) => {
  return {
    id: store.id,
    regionId: store.regionId,
    name: store.name,
    address: store.address,
    starRating: store.starRating
  };
};

export const addReviewDTO = (review) => {
  return {
    id: review.id,
    storeId: review.storeId,
    userId: review.userId,
    body: review.body,
    starRating: review.starRating,
    createdAt: review.createdAt,
    updatedAt: review.updatedAt
  };
};