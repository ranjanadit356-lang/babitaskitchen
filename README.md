# 🍽️ Babita's Kitchen

Authentic homemade desi delicacies delivered with love! A modern food ordering website built with React.

## 🌟 Features

- 🎨 **Beautiful UI/UX** with modern animations and gradients
- 🚀 **Loading Animation** with burst effect
- 📱 **Responsive Design** for all devices
- 🛒 **Shopping Cart** functionality
- 📦 **Product Grid** with categories
- 📝 **Order Form** for customer orders
- 🎯 **Hero Section** with animated product showcase
- ✨ **Smooth Animations** using Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bk2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
bk2/
├── public/
│   └── Images/           # Product images and logo
├── src/
│   ├── components/
│   │   ├── Header.js      # Navigation header
│   │   ├── Hero.js        # Hero section with animations
│   │   ├── ProductGrid.js # Product display grid
│   │   ├── Cart.js        # Shopping cart component
│   │   ├── OrderForm.js   # Order form component
│   │   ├── Footer.js      # Footer component
│   │   └── LoadingScreen.js # Loading animation
│   ├── data/
│   │   └── products.js   # Product data
│   ├── App.js            # Main app component
│   └── index.js          # App entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors
The app uses Google-inspired colors:
- Google Blue: `#4285F4`
- Google Red: `#EA4335`
- Google Yellow: `#FBBC04`
- Google Green: `#34A853`

### Images
Place your product images in the `public/Images/` folder:
- `logo.jpg` - Main logo
- Product images in supported formats (jpg, png, avif)

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🎯 Key Features Explained

### Loading Animation
- Beautiful burst effect when app loads
- Logo explodes into colorful particles
- Smooth transition to main content

### Hero Section
- Animated product showcase
- Mouse-interactive effects
- Gradient background with animations

### Shopping Cart
- Add/remove items
- Quantity management
- Real-time price calculation

## 🛠️ Available Scripts

```bash
npm start       # Start development server
npm build       # Build for production
npm test        # Run tests
npm run eject   # Eject from Create React App
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
{
  "homepage": "https://<username>.github.io/<repository-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Then run:
```bash
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons

## 📞 Contact

For any queries or support, please reach out to:
- Email: babitaskitchen@example.com
- Phone: +91 XXXXX XXXXX

---

Made with ❤️ for Babita's Kitchen
