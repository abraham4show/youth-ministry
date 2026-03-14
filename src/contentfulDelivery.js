import { createClient } from "contentful";

export const deliveryClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
});

export const getAllMotivationalPosts = async () => {
  try {
    const response = await deliveryClient.getEntries({
      content_type: "motivationalPost",
      order: "-sys.createdAt",
    });

    return response.items;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
