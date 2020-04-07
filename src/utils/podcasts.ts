import { AuthorWithSocial } from "../types";

export const isAuthorPodcast = (a: AuthorWithSocial) => {
  for (const social of a.social) {
    if (social.url.includes("simplecast")) {
      return [true, social.url];
    }
  }
  return [false, ""];
};
