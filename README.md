# AIBridgeGap.com Website Repository

[![Website](https://img.shields.io/website?url=https%3A%2F%2Faibridgegap.com)](https://aibridgegap.com)
[![GitHub last commit](https://img.shields.io/github/last-commit/AIBridgeGap/vigilant-engine)](https://github.com/AIBridgeGap/vigilant-engine)
[![License](https://img.shields.io/badge/license-Private-red.svg)](LICENSE)

## 🎯 Project Overview

**AIBridgeGap.com** is a professional AI consulting business website designed to help small-to-medium businesses implement AI solutions without requiring technical teams. This repository contains the complete website source code, built with vanilla HTML5, CSS3, and JavaScript for optimal performance and hosting compatibility.

### 🌐 Live Website
**Production URL**: [https://aibridgegap.com](https://aibridgegap.com)

## 🏗️ Architecture

### Static Website Structure
The main website leverages vanilla web technologies for maximum performance:

- **HTML Files**: Semantic HTML5 structure
  - `index.html` - Homepage with hero section, services preview, testimonials
  - `services.html` - Detailed service offerings and packages  
  - `about.html` - Company story, team, mission & values
  - `contact.html` - Contact forms and consultation booking
  - `demos.html` - Interactive AI automation demonstrations
  - `blog.html` - Resources, articles, and thought leadership

- **CSS Architecture**: Custom CSS framework using CSS custom properties
  - `styles.css` - Main stylesheet with responsive design
  - Modular component-based styling
  - CSS Grid and Flexbox layouts
  - Mobile-first responsive approach

- **JavaScript**: Vanilla JavaScript for performance
  - `script.js` - Core functionality and interactions
  - `demo-scripts.js` - Interactive demo functionality
  - No external dependencies for fast loading

### Reference Implementation
The `BUILD_INSTRUCTIONS_SHEMA/aibridgegap_code_package/` directory contains a Next.js reference implementation built with:
- Next.js 15.2.4
- React 19
- TypeScript 5
- Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Git
- Python 3 (for local server) or any web server
- SSH access to cPanel (for deployment)

### Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/AIBridgeGap/vigilant-engine.git
cd vigilant-engine
```

2. **Start local development server**
```bash
# Using Python (recommended)
python3 -m http.server 8000 -d BUILD_INSTRUCTIONS_SHEMA/

# Alternative options
npx serve BUILD_INSTRUCTIONS_SHEMA/
# or
php -S localhost:8000 -t BUILD_INSTRUCTIONS_SHEMA/
```

3. **Open in browser**
```bash
open http://localhost:8000
```

### Next.js Reference Setup (Optional)

```bash
cd BUILD_INSTRUCTIONS_SHEMA/aibridgegap_code_package/

# Install dependencies
npm install

# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 🔄 Development Workflow

This project follows a structured development workflow integrating:
- **Local Development**: Warp Terminal on macOS
- **Version Control**: GitHub (`AIBridgeGap/vigilant-engine`)
- **Production Hosting**: GoDaddy cPanel

### Standard Development Process

1. **Start Development Session**
```bash
# Navigate to project
cd "/path/to/Website_build"

# Pull latest changes
git pull origin main

# Create feature branch (recommended)
git checkout -b feature/your-feature-name
```

2. **Make Changes**
```bash
# Edit files
vim BUILD_INSTRUCTIONS_SHEMA/index.html

# Test locally
python3 -m http.server 8000 -d BUILD_INSTRUCTIONS_SHEMA/
```

3. **Commit and Push**
```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new homepage section"

# Push to GitHub
git push origin feature/your-feature-name
```

4. **Deploy to Production**
```bash
# SSH into cPanel
ssh fije58kp0od7@aibridgegap.com

# Pull changes and deploy
cd vigilant-engine
git pull origin main
cp -r BUILD_INSTRUCTIONS_SHEMA/* /home/fije58kp0od7/public_html/
```

For detailed workflow documentation, see [AIBridgeGap_Development_Workflow.md](AIBridgeGap_Development_Workflow.md).

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb`
- **Primary Blue Dark**: `#1d4ed8`
- **Accent Cyan**: `#06b6d4`
- **Dark Navy**: `#1e293b` (text)
- **Medium Gray**: `#64748b` (body text)
- **Light Gray**: `#f1f5f9` (backgrounds)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive scaling**: CSS custom properties

### Spacing System
- Consistent scale: 0.5rem → 6rem
- CSS custom properties: `--spacing-xs` through `--spacing-3xl`

## ✨ Key Features

### Interactive AI Demos
Six fully functional demo simulations:
- Customer support automation
- Invoice processing with OCR
- Lead qualification scoring
- Automated report generation
- Email marketing optimization
- Predictive inventory management

### Performance Optimizations
- **Core Web Vitals Targets**:
  - LCP: <2.5 seconds
  - FID: <100 milliseconds
  - CLS: <0.1
- Lazy loading images
- Browser caching
- Minified assets

### SEO Implementation
- Semantic HTML5 markup
- Proper heading hierarchy
- Meta descriptions and title tags
- Open Graph support
- Schema markup ready
- XML sitemap included

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Devices**: iOS Safari, Chrome Mobile
- **Responsive Breakpoints**:
  - Mobile: 320px-767px
  - Tablet: 768px-1023px
  - Desktop: 1024px+

## 🛡️ Security Features

- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- HTTPS enforcement
- Input validation and sanitization

## 📊 Performance Metrics

### Success Targets
- **Development Efficiency**: Code to deployment < 5 minutes
- **Website Performance**: Page load < 3 seconds
- **Uptime**: > 99.9%
- **Mobile Responsiveness**: 100%

## 🔧 Deployment

### Production Environment
- **Hosting**: GoDaddy Web Hosting
- **Management**: cPanel interface
- **Domain**: aibridgegap.com
- **SSL**: Enabled

### Deployment Process
1. Local development and testing
2. Commit to GitHub
3. SSH to cPanel server
4. Pull changes from repository
5. Deploy to `public_html/`
6. Verify live website

### Environment Structure
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   LOCAL (Mac)   │    │     GITHUB      │    │  PRODUCTION     │
│  Warp Terminal  │◄──►│  vigilant-engine│◄──►│     cPanel      │
│   Development   │    │   Repository    │    │  aibridgegap.com│
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📝 Documentation

- **[WARP.md](WARP.md)** - Comprehensive project guidance
- **[AIBridgeGap_Development_Workflow.md](AIBridgeGap_Development_Workflow.md)** - Detailed development workflows
- **[cPanel_Deployment_Instructions.md](cPanel_Deployment_Instructions.md)** - Deployment procedures

## 🤝 Contributing

This is a private business repository. For authorized contributors:

1. Follow the established development workflow
2. Use conventional commit messages (feat:, fix:, docs:)
3. Test all changes locally before pushing
4. Document any new features or processes
5. Maintain the existing code style and structure

### Commit Convention
```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, no code change
refactor: code restructuring
test: add or modify tests
chore: maintenance tasks
```

## 📞 Support

### Technical Documentation
- **Project Guidance**: WARP.md
- **Deployment Instructions**: cPanel_Deployment_Instructions.md
- **GitHub Repository**: https://github.com/AIBridgeGap/vigilant-engine

### Resources
- **cPanel Support**: Available 24/7 through GoDaddy
- **GitHub Docs**: https://docs.github.com
- **Git Reference**: https://git-scm.com/docs

## 📄 License

This project is private and proprietary to AIBridgeGap. All rights reserved.

## 🏢 About AIBridgeGap

AIBridgeGap specializes in helping small-to-medium businesses implement AI solutions through:
- Process automation consulting
- AI training and implementation
- Custom AI solution development
- Strategic AI consulting

**Mission**: Democratize AI implementation for businesses without technical teams.

---

**Repository**: `AIBridgeGap/vigilant-engine`  
**Last Updated**: September 4, 2025  
**Maintained By**: AIBridgeGap Development Team
