# Ricobot Project

## Overview
This project is a React-based image carousel component that allows users to navigate through a collection of images using buttons and keyboard arrow keys. The component dynamically renders images from a JSON data file and updates the active image index accordingly.

## Features
- **Thumbnail Navigation:** Users can click on image thumbnails to change the active image.
- **Keyboard Navigation:** Users can navigate between images using the left and right arrow keys.
- **Responsive Design:** The component is styled to be fully responsive across different screen sizes.

## Technologies Used
- **React**: Component-based UI development
- **TypeScript**: Strongly typed JavaScript for improved maintainability
- **Tailwind CSS**: Utility-first styling for responsive design
- **Vite**: Fast development and build tool

## Project Structure
```
├── src
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   ├── ContentWrapper
│   │   │   ├── ContentWrapper.tsx
│   │   ├── ImageCards
│   │   │   ├── ImageCards.tsx
│   ├── data
│   │   ├── data.json
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── public
│   ├── assets
├── package.json
├── postcss.config.js
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── README.md
```

## Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/chrisransom521/Sony_Assessment.git
   cd Sony_Assessment
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run the Development Server**
   ```sh
   npm run dev
   ```

## Usage
- Place image data in `data/data.json` following this format:
  ```json
  {
    "slides": [ 
        {
            "thumbnail": "/assets/image1.png",
            "thumbnailAlt": "Description of Image 1",
            "background": "/assets/Image1-background.png",
            "backgroundAlt": "Description of Image 1 background",
            "cutout": "/assets/Image1-foreground-cutout.png",
            "cutoutAlt": "Description of Image 1 foreground cutout",
            "headline": "Headline of Image 1",
            "title": "Title of Image 1",
            "overline": "Overline of Image 1",
            "paragraph": "Paragraph of Image 1",
            "button": "Button text of Image 1",
            "buttonLink": "https://button@link.com"
        },
        {
            "thumbnail": "/assets/image2.png",
            "thumbnailAlt": "Description of Image 2",
            "background": "/assets/Image2-background.png",
            "backgroundAlt": "Description of Image 2 background",
            "cutout": "/assets/Image2-foreground-cutout.png",
            "cutoutAlt": "Description of Image 2 foreground cutout",
            "headline": "Headline of Image 2",
            "title": "Title of Image 2",
            "overline": "Overline of Image 2",
            "paragraph": "Paragraph of Image 2",
            "button": "Button text of Image 2",
            "buttonLink": "https://button@link.com"
        }
    ]
  }
  ```
- Navigate using buttons or arrow keys.
- Modify the `ContentWrapper` component to display additional details about each image.

## Deployment
To build for production:
```sh
npm run build
```
Deploy the contents of the `dist` folder to your preferred hosting service.
