import * as contentful from "contentful";
import { createClient } from "contentful-management";

// Delivery client (for reading published content)
export const deliveryClient = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
});

// Management client (for creating/updating content)
export const managementClient = createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN,
});

// ✅ Single function – no duplicates
export async function createMotivationalPost(postData) {
  try {
    const space = await managementClient.getSpace(
      import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    );
    const environment = await space.getEnvironment("master");

    const entry = await environment.createEntry("motivationalPost", {
      fields: {
        title: { "en-US": postData.title },
        date: { "en-US": postData.date },
        author: { "en-US": postData.author || "Ebun's Diary" },
        content: { "en-US": postData.content },
        bulletPoints: { "en-US": postData.bulletPoints || [] },
        closingMessage: { "en-US": postData.closingMessage || "" },
        hashtags: { "en-US": postData.hashtags || [] },
        Likes: { "en-US": postData.Likes ?? 0 }, // Capital L, default 0
      },
    });

    const publishedEntry = await entry.publish();
    return publishedEntry;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

export async function getAllMotivationalPosts() {
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
}

// For backward compatibility (optional)
export const client = deliveryClient; // reuse the delivery client

export default client;
