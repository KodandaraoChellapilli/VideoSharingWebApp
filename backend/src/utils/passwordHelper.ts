import bcrypt from "bcrypt";

export const hashPassord = async (
  originalPassword: string
): Promise<string> => {
  const hashedPassword = await bcrypt.hash(originalPassword, 16);
  return hashedPassword;
};
