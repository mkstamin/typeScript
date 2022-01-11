// naver type does not returned anythink

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("An error occurred", 500);
