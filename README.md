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

## Project Structure

love-and-hockey/
├── README.md
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.js
├── public
│   ├── default_image.png
│   ├── favicon.ico
│   └── logo.svg
├── src
│   ├── components
│   │   └── Modal.tsx
│   ├── data
│   │   ├── icons.data.ts
│   │   └── teams.data.ts
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── 404.tsx
│   │   └── index.tsx
│   ├── styles
│   │   └── globals.css
│   └── types
│       ├── icon.interface.ts
│       └── team.interface.ts
└── tsconfig.json

## Installation and Usage

### Requirements

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/love-and-hockey.git
   cd love-and-hockey

	2.	Install dependencies:

npm install
# or
yarn install



Running in Development

Start the development server with:

npm run dev
# or
yarn dev

The application will be available at http://localhost:3000.

Building and Running in Production

To build the project:

npm run build
# or
yarn build

Then start the production server:

npm start
# or
yarn start

SEO & Open Graph Configuration

Open Graph and other meta tags are set up in the src/pages/_document.tsx file. Customize the values for og:title, og:description, og:image, and og:url to fit your needs.

404 Redirection

A custom 404 page (src/pages/404.tsx) automatically redirects unknown routes to the home page.

Contributing

Contributions are welcome! Please fork the repository and submit your pull requests with any improvements or fixes.

License

This project is licensed under the MIT License.

Contact

For any questions or suggestions, feel free to reach out via email at your-email@example.com.

⸻

Enjoy building with Love & Hockey!

---

This README provides an overview of the project, its features, installation instructions, and other relevant information, without exposing any sensitive deployment details.
