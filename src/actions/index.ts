import { defineAction } from "astro:actions";
import { addLike, getLikes } from "./repository";
import type { LikesResponse } from "./model";

export const server = {
  addLike: defineAction<LikesResponse>({
    async handler() {
      return { likes: await addLike() };
    },
  }),
  getLikes: defineAction<LikesResponse>({
    async handler() {
      return { likes: await getLikes() };
    },
  }),
};
