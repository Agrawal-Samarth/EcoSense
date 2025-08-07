# EcoSense 🌱

A modern, interactive website for understanding and calculating ecological footprints. Built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Interactive Carbon Footprint Calculator** - Calculate your environmental impact
- **Educational Content** - Learn about ecological footprints and sustainability
- **SDG Integration** - Explore all 17 Sustainable Development Goals
- **School Initiatives** - Showcase environmental projects and student blogs
- **Responsive Design** - Works perfectly on all devices
- **Beautiful Animations** - Smooth transitions and interactions

## 🚀 Live Demo

Visit the live website: [EcoSense](https://IND-GAMINGBEAST.github.io/EcoSense)

**Note**: This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   # This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
   git clone https://github.com/IND-GAMINGBEAST/EcoSense.git
   cd EcoSense
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### GitHub Pages

1. **Update the homepage URL** in `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/ecosense"
   }
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "gh-pages" branch as source
   - Save the settings

### Other Platforms

The project can also be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **Firebase**: `firebase deploy`

## 📁 Project Structure

```
ecosense/
├── public/
│   ├── images/
│   │   ├── sdg/          # SDG goal images
│   │   ├── celebrities/  # Celebrity photos
│   │   └── teachers/     # Teacher photos
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── SchoolCorner.jsx
│   │   └── Credits.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🎨 Customization

### Adding Images

1. **SDG Images**: Place SDG goal images in `public/images/sdg/` as `sdg1.png`, `sdg2.png`, etc.
2. **Celebrity Photos**: Add celebrity photos in `public/images/celebrities/`
3. **Teacher Photos**: Add teacher photos in `public/images/teachers/`

### Updating Content

- **Home Page**: Edit `src/pages/Home.jsx`
- **About Page**: Edit `src/pages/About.jsx`
- **School Corner**: Edit `src/pages/SchoolCorner.jsx`
- **Credits**: Edit `src/pages/Credits.jsx`

## 📊 Calculator Logic

The carbon footprint calculator uses scientifically-based emission factors:

- **Transport**: Based on average vehicle emissions
- **Diet**: Based on food production emissions
- **Energy**: Based on household electricity consumption
- **Digital**: Based on device usage patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Data Sources**: IPCC, WWF, UN, Global Carbon Project
- **Images**: Unsplash, Pexels
- **Icons**: Lucide React
- **Inspiration**: Climate Reality Project, 350.org

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ for environmental education**
