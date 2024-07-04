export const missionResDTO = (mission) => {
  return {
    id: mission.id,
    storeId: mission.storeId,
    body: mission.body,
    points: mission.points,
    createdAt: mission.createdAt,
    updatedAt: mission.updatedAt
  };
};