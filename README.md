# Project Name

Brief description or introduction of your project. Mention its purpose and what problem it solves.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation
Provide instructions on how to install and set up your project. Include any prerequisites, dependencies, or system requirements.

# Install dependencies
npm install

## Usage

## Features
This boilerplate contains a nuber of useful features for developing your project.

LazyImage: Lazy image component leverages the next image component but also adds in an intrinisc image layer helping prevent the document flow from shifting during the page load/render

Scss/Css vars: in the _config.scss file you will see a variable named: "$css-variables". This variable helps create resuable css vars for the entire project.
To create a new css variable simply add a new var to the scss map like so:
```
	$css-variables: (
		...
		site-color: (
			xsmall: #f0f0,
			medium: #f00,
			large: #ff0
		)
	);
```
This will generate you a new css var called "--project-site-color"

# License
This project is licensed under the MIT License.