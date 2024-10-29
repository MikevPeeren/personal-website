import {
  Asset,
  ChainModifiers,
  createClient,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  UnresolvedLink,
} from "contentful";

export type { Asset, Entry };

type AssetOrLink =
  | Asset<ChainModifiers, string>
  | UnresolvedLink<"Asset">
  | {
      [x: string]:
        | Asset<ChainModifiers, string>
        | UnresolvedLink<"Asset">
        | undefined;
    };

export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    publicationDate: EntryFieldTypes.Date;
    slug: EntryFieldTypes.Text;
    featuredImage: EntryFieldTypes.AssetLink;
    category: EntryFieldTypes.Text;
    keywords: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
}

export const isResolvedAsset = (
  asset: AssetOrLink,
): asset is Asset<ChainModifiers, string> => {
  return (
    typeof asset === "object" &&
    asset !== null &&
    "fields" in asset &&
    typeof (asset as Asset<ChainModifiers, string>).fields === "object"
  );
};

const createContentfulClient = () => {
  if (typeof window !== "undefined") {
    throw new Error(
      "Contentful client should only be created on the server side",
    );
  }

  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    throw new Error("Contentful environment variables are not set properly");
  }

  return createClient({
    space: spaceId,
    accessToken: accessToken,
  });
};

let clientInstance: ReturnType<typeof createClient> | null = null;

const getClient = () => {
  if (!clientInstance) {
    clientInstance = createContentfulClient();
  }
  return clientInstance;
};

export const getEntries = async (): Promise<Entry<BlogPostSkeleton>[]> => {
  const client = getClient();
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    order: ["-sys.createdAt"],
  });

  return entries.items.sort(
    (a, b) =>
      new Date(b.fields.publicationDate).getTime() -
      new Date(a.fields.publicationDate).getTime(),
  );
};

export const getEntry = async (
  slug: string,
): Promise<Entry<BlogPostSkeleton> | undefined> => {
  const client = getClient();
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });
  return entries.items[0];
};

export async function getLatestBlogPosts(
  limit: number = 3,
): Promise<Entry<BlogPostSkeleton>[]> {
  const client = getClient();
  const response = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    order: ["-fields.publicationDate"],
    limit: limit,
  });

  return response.items;
}

export default getClient;
