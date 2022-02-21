export const formatedDataAPI = (data: any) => {
  let created_at = new Date(data.created_at)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(",", "");

  created_at = "Joined " + created_at;

  const name = data.name ? data.name : data.login;
  const login = data.login ? `@${data.login}` : "Not Available";
  const bio = data.bio ? data.bio : "This profile has no bio";

  const location = data.location ? data.location : "Not Available";

  const twitter_username = data.twitter_username
    ? data.twitter_username
    : "Not Available";

  let blog = data.blog ? data.blog : "Not Available";
  blog = blog.length > 20 ? "click here" : blog;

  const websiteLink = data.blog ? data.blog : "#";

  const company = data.company ? data.company : "Not Available";

  return {
    ...data,
    created_at,
    name,
    login,
    bio,
    location,
    twitter_username,
    blog,
    company,
    websiteLink: websiteLink,
  };
};
