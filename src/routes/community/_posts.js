// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is progress bar?',
		slug: 'about',
		html:`
			<p>Progress Bar is a progress and task management system for FRC Team 1540. Created by Elo, Application Software Manger, Progress Bar aims to:</p>
			<ul>
				<li>Create 'progress bars' for every department per robot</li>
				<li>incluing checkpoints along it so people knowo what their goals are, and deadlines so people know how much time they have</li>
				<li>Allow managers to sign in in order to add checkpoint</li>
				<li>Allow multi and cross-department taskflow lines, so everyone knows when robots get handed over to other departments</li>
				<li>Display the website on a screen in Houston, The Lego Lab, and/or The Fab Lab, for everyone to see all the time(kind of like CLUCK but cooler)</li>
			</ul>
		`
	},
	{
		title: 'How can I get involved?',
		slug: "how-can-i-get-involved",
		html:`
			<p>We'd love to have more people collaborate! If you're a member of Application Software and have at least a frontend 1 certification, you can make a pull request on the Progress Bar <a href="https://github.com/organizations/flamingchickens1540/">Github</a> repo. I also recommend contacting an App Software manager, just to let them know what you'll be up to, as they will have to approve your merge. If you have any questions about how Github works, or want to join App Software, Slack me @Elo.</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
