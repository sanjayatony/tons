import { config, fields, collection } from "@keystatic/core";

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "src/content/posts/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				publishedDate: fields.date({ label: "Published date" }),
				tags: fields.array({ label: "Tags" }),
				content: fields.document({
					label: "Content",
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: "src/assets/images/posts",
						publicPath: "../../assets/images/posts/",
					},
				}),
			},
		}),
	},
});
