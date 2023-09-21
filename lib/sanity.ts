import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "pcuayx12";
const dataset = "production";
const apiVersion = "2021-10-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
