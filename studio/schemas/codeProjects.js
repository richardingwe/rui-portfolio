export default {
    name: "CodeProject",
    title: "Code Projects",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: "date",
            type: "datetime"
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: 'projectImage',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imagesGallery',
            title: 'Images gallery',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "client", title: "Client" },
                    { value: "collaboration", title: "Collaboration" },

                ]
            }
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "githubLink",
            type: "url"
        },
        {
            name: "technologiesUsed",
            title: "Technologies Used",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            options: {
                layout: "tags"
            }
        }
    ]
}