// O v4 do UUID gera

import { v4 } from "uuid";
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "./types";

export function generateId(): string {
  return v4();
}


const expiresIn = "1min";
export const generateToken (input: AuthenticationData): String => {
  const token = jwt.sign(
    {
      id: input.id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
  
}
