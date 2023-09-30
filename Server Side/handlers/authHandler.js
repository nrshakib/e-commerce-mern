import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

const comparePassword = async (password, hashedPassword) => {
  const compare = bcrypt.compare(password, hashedPassword);
  return compare;
};
export default { hashPassword, comparePassword };
