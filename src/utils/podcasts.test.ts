import { isAuthorPodcast } from "./podcasts";

const rssLink = "https://feeds.simplecast.com/mROgeYHd";

const podcast = {
  social: [
    {
      url: rssLink,
    },
  ],
};

describe("isAuthorPodcast()", () => {
  test("when socials contains podcast rss should return flag and rss link", () => {
    // @ts-ignore
    expect(isAuthorPodcast(podcast)).toEqual([true, rssLink]);
  });
});
