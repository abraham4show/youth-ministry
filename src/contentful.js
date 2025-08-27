import { createClient } from "contentful";

// Create the client
const client = createClient({
  space: "d7zatfwuw1on",
  accessToken: "9Sf0N_dwm-AEmWAyMCh3wOCVKqx3qIyASg3G7XvnxEM",
  environment: "master",
});

// Export as default
export { client };
