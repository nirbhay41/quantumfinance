import { defineConfig } from "tinacms";
import { teamFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "1a1936b1-3a9c-44eb-888a-2896c5ef55c3",
  token: "331da2c57e4b6246a16a8bf5a894f9116c412a9c",
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            description: "Heading of the page",
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            description: "Url of the page",
          },
          {
            type: "boolean",
            name: "enable_prefooter_cta",
            label: "enable_prefooter_cta",
            description: "Enable the prefooter cta section",
          },
          {
            type: "boolean",
            name: "enable_prefooter_default_content",
            label: "enable_prefooter_default_content",
            description: "Show the prefooter default content",
          },
          {
            type: "string",
            name: "prefooter_button_cta",
            label: "prefooter_button_cta",
            description: "prefooter_button_cta",
          },
          {
            type: "string",
            name: "prefooter_button_link",
            label: "prefooter_button_link",
            description: "Link on the button",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            description: "Description",
          },
          {
            type: "string",
            name: "prefooter_cta_text",
            label: "prefooter_cta_text",
            description: "prefooter_cta_text",
          },
          {
            type: "boolean",
            name: "include_footer",
            label: "include_footer",
            description: "Include footer",
          },
          {
            type: "string",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            ui: {
              component: 'textarea'
            }
          },
        ],
      },
    ],
  },
});
