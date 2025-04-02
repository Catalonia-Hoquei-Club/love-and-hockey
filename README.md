# Love & Hockey

Love & Hockey is a web application for an event/tournament that showcases teams and special guests in an interactive and engaging way. The site is built using Next.js, Tailwind CSS, and Framer Motion to provide a modern, mobile-friendly experience.

You can visit the site at:  
[https://love-and-hockey.cataloniahc.com/](https://love-and-hockey.cataloniahc.com/)

## Features

- **Responsive Design:** Adapts to mobile devices, displaying 4 circular elements per row.
- **Animations:** Utilizes Framer Motion for entry animations and interactive hover effects on team and guest icons.
- **Dynamic Modals:** Clicking on any circle opens a modal with detailed information, which conditionally shows content based on whether the team/guest details have been revealed.
- **Optimized Images:** Uses Next.js's `Image` component for improved performance.
- **SEO & Open Graph:** Meta tags for Open Graph (og:title, og:image, etc.) are configured to enhance SEO and social media sharing.
- **404 Redirection:** Unknown routes redirect automatically to the home page.

## Technologies Used

- [Next.js](https://nextjs.org/) – A React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/) – A utility-first CSS framework for rapid UI development.
- [Framer Motion](https://www.framer.com/motion/) – A powerful animation library for React.
- [Heroicons](https://heroicons.com/) – (Optional) Icon set for UI elements such as the modal close button.

## Installation and Usage

### Requirements

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/love-and-hockey.git
cd love-and-hockey
```
2.	Install dependencies:

```bash
npm install
# or
yarn install
```


Running in Development

Start the development server with:

```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:3000.

Building and Running in Production

To build the project:

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

### Contributing

Contributions are welcome! Please fork the repository and submit your pull requests with any improvements or fixes.

### License

This project is licensed under the MIT License.

### Contact

For any questions or suggestions, feel free to reach out via email at your-email@example.com.

⸻

Enjoy building with Love & Hockey!
