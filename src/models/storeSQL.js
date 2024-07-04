// 가게 이름 중복 확인
export const confirmStoreNameQuery =
    `SELECT EXISIS (SELECT 1 FROM stores WHERE name = ?) AS nameExist;`;

// 가게 추가
export const insertStoreQuery =
    `ÌNSERT INTO stores (regionId, name, address, starRating) VALUES (?, ?, ?, ?);`;

// 리뷰 추가
export const insertReviewQuery =
    `INSERT INTO reviews (storeId, userId, reviewBody, starRating) VALUES (?, ?, ?, ?);`;
