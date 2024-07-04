// 미션 존재 여부 확인 쿼리
export const missionExistSQL = `
  SELECT EXISTS(
    SELECT 1 
    FROM mission 
    WHERE store_id = ? 
      AND body = ?
  ) AS MissionExitAlready
`;

// 미션 삽입 쿼리
export const addMissionSQL = `
  INSERT INTO mission (store_id, body, points, created_at, updated_at) 
  VALUES (?, ?, ?, NOW(), NOW())
`;
