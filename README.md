# byu-faculty-directory

This is a simple Web Component using the BYU Web Community web component tools. It is meant to be used to display a directory listing for a faculty member.

## How to Use

Drupal - coming soon (see https://github.com/byuweb/faculty_directory_d8 )

Other - 

Reference the js and css files for the component via the CDN:
js: https://cdn.byu.edu/byu-faculty-directory/1.x.x/byu-faculty-directory.min.js
css: https://cdn.byu.edu/byu-faculty-directory/1.x.x/byu-faculty-directory.min.css

Then, place your content inside <byu-faculty-listing> tags. See the demo for more info (clone repo, open demo.html)

## How it Works

```html
<byu-faculty-listing id="id" faculty-image="img_src" faculty-profile-link="link_src">
	<h2 slot="listing-name">Name</h2>
	<span slot="listing-title">Title</span>
	<span slot="listing-office">Office Location</span>
	<span slot="listing-phone">Phone Number</span>
	<span slot="listing-email">Email Address</span>
	<span slot="listing-office-hours">Office Hours</span>
	<p slot="listing-research">Research</p>
	<p slot="listing-biography">Biography</p>
</byu-faculty-listing>
```

Each listing consists of three columns - one for a profile image, one for contact information, and one for research and biography. Clicking on the image or the title will take you to that faculty member's specific profile page.
Place the url to the profile image in a "faculty-image" attribute of the <byu-faculty-listing> tag.
Place the url to the faculty profile page in a "faculty-profile-link" attribute of the <byu-faculty-listing> tag.
The content should then be placed in an appropriate slot (see above).


# Spec URL

https://www.figma.com/file/FbyACEZ2W7UJKct4TZW1t8jL/New-Canvas-with-%232A-and-%233

# Getting Started

```
npm install
```

To run a local development server with a file watch, run

```
npm start
```

To assemble the final distribution bundle, run

```
npm run build
```

To run automatic unit tests, run

```
npm test
```