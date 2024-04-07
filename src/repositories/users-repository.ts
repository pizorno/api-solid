import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
  findByEmail(user: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
