import { z } from "zod";

export const addGroupChatSchema = z.object({
  authorId: z.number({ message: "Author is required" }),
  name: z.string({ message: "Group name is required" }).min(4).max(191, { message: "Group name is too long" }),
  image: z.string().max(255).optional(),
});

export const addMemberIntoGroupchatSchema = z.object({
  userId: z.number({ message: "User ID is required" }),
})

export const addManyMemberIntoGroupchatSchema = z.object({
  userId: z.array(z.number({message: "User Ids in array should be number!"})),
})

export const updateGroupChatSchema = z.object({
  authorId: z.number({ message: "Author is required" }),
  name: z.string({ message: "Group name is required" }).min(4).max(191, { message: "Group name is too long" }),
  image: z.string({message: "Image field is required!"}).max(255, {message: "Image value contain most 255 character!"}).or(z.null()),
});

export const addGroupchatMessageSchema = z.object({
  groupId: z.number({message: "Group ID is required"}),
  authorId: z.number({message: "Author ID is required"}),
  content: z.string({message: "Message content is required!"}),
  image: z.string().optional(),
})

export const updateGroupchatMessageSchema = z.object({
  content: z.string({message: "Message content is required!"}),
})