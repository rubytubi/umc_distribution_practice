// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
  //  prefer[0]에서 각 선호 음식 카테고리의 이름 (f_category_name)을 추출해
  //  preferFood 배열에 저장함.
  const preferFood = [];
  for (let i = 0; i < prefer[0].length; i++) {
    preferFood.push(prefer[0][i].f_category_name);
  }
  return {
    'email': user[0].email,
    'name': user[0].user_name,
    'preferCategory': preferFood
  };
}