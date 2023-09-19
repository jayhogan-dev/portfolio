import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "aj1vwaqb";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
