import { users, type User, type InsertUser } from "@shared/schema";
import { pets, type Pet } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getPetsByUserId(userId: number): Promise<Pet[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private pets: Map<number, Pet>;
  private currentUserId: number;
  private currentPetId: number;

  constructor() {
    this.users = new Map();
    this.pets = new Map();
    this.currentUserId = 1;
    this.currentPetId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getPetsByUserId(userId: number): Promise<Pet[]> {
    return Array.from(this.pets.values()).filter(
      (pet) => pet.userId === userId,
    );
  }
}

export const storage = new MemStorage();