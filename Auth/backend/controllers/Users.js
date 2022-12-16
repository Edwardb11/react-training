import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword) {
    return res.status(400).json({ msg: "Las contraseñas no coinciden" });
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Registrado" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findAll({
      where: {
        email: email,
      },
    });
    // Verificar si el arreglo user tiene al menos un elemento
    if (user.length === 0) {
      return res.status(404).json({ msg: "Email no encontrado" });
    }
    const match = await bcrypt.compare(password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Contraseña incorrecta" });
    // JWT
    const userId = user[0].id;
    const name = user[0].name;
    const emails = user[0].email;
    const accessToken = jwt.sign(
      { userId, name, emails },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, emails },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await Users.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: { id: userId },
      }
    );

    res.cookie("resfreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email no encontrado" });
  }
};
