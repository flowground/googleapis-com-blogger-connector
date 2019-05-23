# ![LOGO](logo.png) Blogger **flow**ground Connector

## Description

A generated **flow**ground connector for the Blogger API (version v3).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/blogger/v3/swagger.json<br/>
Generated at: 2019-05-23T12:13:01+03:00

## API Description

API for access to the data within Blogger.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Retrieve a Blog by URL.

*Tags:* `blogs`

#### Input Parameters
* `url` - _required_ - The URL of the blog to retrieve.
* `view` - _optional_ - Access level with which to view the blog. Note that some fields require elevated access.
    Possible values: ADMIN, AUTHOR, READER.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one blog by ID.

*Tags:* `blogs`

#### Input Parameters
* `blogId` - _required_ - The ID of the blog to get.
* `maxPosts` - _optional_ - Maximum number of posts to pull back with the blog.
* `view` - _optional_ - Access level with which to view the blog. Note that some fields require elevated access.
    Possible values: ADMIN, AUTHOR, READER.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves the comments for a blog, across all posts, possibly filtered.

*Tags:* `comments`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to fetch comments from.
* `endDate` - _optional_ - Latest date of comment to fetch, a date-time with RFC 3339 formatting.
* `fetchBodies` - _optional_ - Whether the body content of the comments is included.
* `maxResults` - _optional_ - Maximum number of comments to include in the result.
* `pageToken` - _optional_ - Continuation token if request is paged.
* `startDate` - _optional_ - Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
* `status` - _optional_

### Retrieves the pages for a blog, optionally including non-LIVE statuses.

*Tags:* `pages`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to fetch Pages from.
* `fetchBodies` - _optional_ - Whether to retrieve the Page bodies.
* `maxResults` - _optional_ - Maximum number of Pages to fetch.
* `pageToken` - _optional_ - Continuation token if the request is paged.
* `status` - _optional_
* `view` - _optional_ - Access level with which to view the returned result. Note that some fields require elevated access.
    Possible values: ADMIN, AUTHOR, READER.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Add a page.

*Tags:* `pages`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to add the page to.
* `isDraft` - _optional_ - Whether to create the page as a draft (default: false).
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Delete a page by ID.

*Tags:* `pages`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `pageId` - _required_ - The ID of the Page.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one blog page by ID.

*Tags:* `pages`

#### Input Parameters
* `blogId` - _required_ - ID of the blog containing the page.
* `pageId` - _required_ - The ID of the page to get.
* `view` - _optional_
    Possible values: ADMIN, AUTHOR, READER.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Update a page. This method supports patch semantics.

*Tags:* `pages`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `pageId` - _required_ - The ID of the Page.
* `publish` - _optional_ - Whether a publish action should be performed when the page is updated (default: false).
* `revert` - _optional_ - Whether a revert action should be performed when the page is updated (default: false).
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Update a page.

*Tags:* `pages`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `pageId` - _required_ - The ID of the Page.
* `publish` - _optional_ - Whether a publish action should be performed when the page is updated (default: false).
* `revert` - _optional_ - Whether a revert action should be performed when the page is updated (default: false).
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Publishes a draft page.

*Tags:* `pages`

#### Input Parameters
* `blogId` - _required_ - The ID of the blog.
* `pageId` - _required_ - The ID of the page.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Revert a published or scheduled page to draft state.

*Tags:* `pages`

#### Input Parameters
* `blogId` - _required_ - The ID of the blog.
* `pageId` - _required_ - The ID of the page.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieve pageview stats for a Blog.

*Tags:* `pageViews`

#### Input Parameters
* `blogId` - _required_ - The ID of the blog to get.
* `range` - _optional_
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of posts, possibly filtered.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to fetch posts from.
* `endDate` - _optional_ - Latest post date to fetch, a date-time with RFC 3339 formatting.
* `fetchBodies` - _optional_ - Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
* `fetchImages` - _optional_ - Whether image URL metadata for each post is included.
* `labels` - _optional_ - Comma-separated list of labels to search for.
* `maxResults` - _optional_ - Maximum number of posts to fetch.
* `orderBy` - _optional_ - Sort search results
    Possible values: published, updated.
* `pageToken` - _optional_ - Continuation token if the request is paged.
* `startDate` - _optional_ - Earliest post date to fetch, a date-time with RFC 3339 formatting.
* `status` - _optional_ - Statuses to include in the results.
* `view` - _optional_ - Access level with which to view the returned result. Note that some fields require escalated access.
    Possible values: ADMIN, AUTHOR, READER.

### Add a post.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to add the post to.
* `fetchBody` - _optional_ - Whether the body content of the post is included with the result (default: true).
* `fetchImages` - _optional_ - Whether image URL metadata for each post is included in the returned result (default: false).
* `isDraft` - _optional_ - Whether to create the post as a draft (default: false).
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieve a Post by Path.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to fetch the post from.
* `maxComments` - _optional_ - Maximum number of comments to pull back on a post.
* `path` - _required_ - Path of the Post to retrieve.
* `view` - _optional_ - Access level with which to view the returned result. Note that some fields require elevated access.
    Possible values: ADMIN, AUTHOR, READER.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Search for a post.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to fetch the post from.
* `fetchBodies` - _optional_ - Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
* `orderBy` - _optional_ - Sort search results
    Possible values: published, updated.
* `q` - _required_ - Query terms to search this blog for matching posts.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Delete a post by ID.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `postId` - _required_ - The ID of the Post.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Get a post by ID.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to fetch the post from.
* `fetchBody` - _optional_ - Whether the body content of the post is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
* `fetchImages` - _optional_ - Whether image URL metadata for each post is included (default: false).
* `maxComments` - _optional_ - Maximum number of comments to pull back on a post.
* `postId` - _required_ - The ID of the post
* `view` - _optional_ - Access level with which to view the returned result. Note that some fields require elevated access.
    Possible values: ADMIN, AUTHOR, READER.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Update a post. This method supports patch semantics.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `fetchBody` - _optional_ - Whether the body content of the post is included with the result (default: true).
* `fetchImages` - _optional_ - Whether image URL metadata for each post is included in the returned result (default: false).
* `maxComments` - _optional_ - Maximum number of comments to retrieve with the returned post.
* `postId` - _required_ - The ID of the Post.
* `publish` - _optional_ - Whether a publish action should be performed when the post is updated (default: false).
* `revert` - _optional_ - Whether a revert action should be performed when the post is updated (default: false).

### Update a post.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `fetchBody` - _optional_ - Whether the body content of the post is included with the result (default: true).
* `fetchImages` - _optional_ - Whether image URL metadata for each post is included in the returned result (default: false).
* `maxComments` - _optional_ - Maximum number of comments to retrieve with the returned post.
* `postId` - _required_ - The ID of the Post.
* `publish` - _optional_ - Whether a publish action should be performed when the post is updated (default: false).
* `revert` - _optional_ - Whether a revert action should be performed when the post is updated (default: false).

### Retrieves the comments for a post, possibly filtered.

*Tags:* `comments`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to fetch comments from.
* `endDate` - _optional_ - Latest date of comment to fetch, a date-time with RFC 3339 formatting.
* `fetchBodies` - _optional_ - Whether the body content of the comments is included.
* `maxResults` - _optional_ - Maximum number of comments to include in the result.
* `pageToken` - _optional_ - Continuation token if request is paged.
* `postId` - _required_ - ID of the post to fetch posts from.
* `startDate` - _optional_ - Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
* `status` - _optional_
* `view` - _optional_ - Access level with which to view the returned result. Note that some fields require elevated access.
    Possible values: ADMIN, AUTHOR, READER.

### Delete a comment by ID.

*Tags:* `comments`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `commentId` - _required_ - The ID of the comment to delete.
* `postId` - _required_ - The ID of the Post.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one comment by ID.

*Tags:* `comments`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to containing the comment.
* `commentId` - _required_ - The ID of the comment to get.
* `postId` - _required_ - ID of the post to fetch posts from.
* `view` - _optional_ - Access level for the requested comment (default: READER). Note that some comments will require elevated permissions, for example comments where the parent posts which is in a draft state, or comments that are pending moderation.
    Possible values: ADMIN, AUTHOR, READER.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Marks a comment as not spam.

*Tags:* `comments`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `commentId` - _required_ - The ID of the comment to mark as not spam.
* `postId` - _required_ - The ID of the Post.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Removes the content of a comment.

*Tags:* `comments`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `commentId` - _required_ - The ID of the comment to delete content from.
* `postId` - _required_ - The ID of the Post.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Marks a comment as spam.

*Tags:* `comments`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `commentId` - _required_ - The ID of the comment to mark as spam.
* `postId` - _required_ - The ID of the Post.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Publishes a draft post, optionally at the specific time of the given publishDate parameter.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `postId` - _required_ - The ID of the Post.
* `publishDate` - _optional_ - Optional date and time to schedule the publishing of the Blog. If no publishDate parameter is given, the post is either published at the a previously saved schedule date (if present), or the current time. If a future date is given, the post will be scheduled to be published.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Revert a published or scheduled post to draft state.

*Tags:* `posts`

#### Input Parameters
* `blogId` - _required_ - The ID of the Blog.
* `postId` - _required_ - The ID of the Post.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one user by ID.

*Tags:* `users`

#### Input Parameters
* `userId` - _required_ - The ID of the user to get.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of blogs, possibly filtered.

*Tags:* `blogs`

#### Input Parameters
* `fetchUserInfo` - _optional_ - Whether the response is a list of blogs with per-user information instead of just blogs.
* `role` - _optional_ - User access types for blogs to include in the results, e.g. AUTHOR will return blogs where the user has author level access. If no roles are specified, defaults to ADMIN and AUTHOR roles.
* `status` - _optional_ - Blog statuses to include in the result (default: Live blogs only). Note that ADMIN access is required to view deleted blogs.
* `userId` - _required_ - ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
* `view` - _optional_ - Access level with which to view the blogs. Note that some fields require elevated access.
    Possible values: ADMIN, AUTHOR, READER.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one blog and user info pair by blogId and userId.

*Tags:* `blogUserInfos`

#### Input Parameters
* `blogId` - _required_ - The ID of the blog to get.
* `maxPosts` - _optional_ - Maximum number of posts to pull back with the blog.
* `userId` - _required_ - ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user.

*Tags:* `postUserInfos`

#### Input Parameters
* `blogId` - _required_ - ID of the blog to fetch posts from.
* `endDate` - _optional_ - Latest post date to fetch, a date-time with RFC 3339 formatting.
* `fetchBodies` - _optional_ - Whether the body content of posts is included. Default is false.
* `labels` - _optional_ - Comma-separated list of labels to search for.
* `maxResults` - _optional_ - Maximum number of posts to fetch.
* `orderBy` - _optional_ - Sort order applied to search results. Default is published.
    Possible values: published, updated.
* `pageToken` - _optional_ - Continuation token if the request is paged.
* `startDate` - _optional_ - Earliest post date to fetch, a date-time with RFC 3339 formatting.
* `status` - _optional_
* `userId` - _required_ - ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
* `view` - _optional_ - Access level with which to view the returned result. Note that some fields require elevated access.
    Possible values: ADMIN, AUTHOR, READER.

### Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights, specific to the user.

*Tags:* `postUserInfos`

#### Input Parameters
* `blogId` - _required_ - The ID of the blog.
* `maxComments` - _optional_ - Maximum number of comments to pull back on a post.
* `postId` - _required_ - The ID of the post to get.
* `userId` - _required_ - ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-blogger-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
