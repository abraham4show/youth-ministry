import { createClient } from "contentful-management";

export const managementClient = createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN,
});

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
        author: { "en-US": postData.author },
        content: { "en-US": postData.content },
        bulletPoints: { "en-US": postData.bulletPoints },
        closingMessage: { "en-US": postData.closingMessage },
        hashtags: { "en-US": postData.hashtags },
        // Likes: { "en-US": postData.Likes },
      },
    });
    const publishedEntry = await entry.publish();
    return publishedEntry;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}
