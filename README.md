# Personal Website

## Live Demo

🌐 **Live Website**: [https://szu-yun-ko.github.io](https://szu-yun-ko.github.io)

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── subpages/       # Individual project/event pages
│   └── *.tsx           # Main page components
├── styles/             # Global styles
└── main.tsx           # Application entry point
```

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

3. Deploy the `dist/` directory to your hosting service

## Customization

- Update personal information in the respective component files
- Modify colors and styling in `tailwind.config.js`
- Add new project pages in `src/components/subpages/`
- Update routing in `src/App.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).
