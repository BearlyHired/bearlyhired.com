import { z } from 'zod';

// Example schema following CLAUDE.md guidelines
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;

// Example of parsing function for runtime boundaries
export const parseUser = (data: unknown): User => {
  return UserSchema.parse(data);
};