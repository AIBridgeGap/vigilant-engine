# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

AIBridgeGap.com is a professional AI consulting business website built using vanilla HTML5, CSS3, and JavaScript. The project consists of both static HTML files and a Next.js reference implementation. The website is designed for deployment on GoDaddy Web Hosting with cPanel.

## Architecture

### Static Website Structure
The main website is built with vanilla web technologies for optimal performance and hosting compatibility:

- **HTML Files**: Standard semantic HTML5 structure
  - `index.html` - Homepage with hero, services preview, testimonials
  - `services.html` - Detailed service offerings and packages  
  - `about.html` - Company story, team, mission & values
  - `contact.html` - Contact forms and consultation booking
  - `demos.html` - Interactive AI automation demonstrations
  - `blog.html` - Resources, articles, and thought leadership

- **CSS Architecture**: Custom CSS framework using CSS custom properties
  - `styles.css` - Main stylesheet with comprehensive responsive design
  - Modular component-based styling
  - CSS Grid and Flexbox layouts
  - Mobile-first responsive approach

- **JavaScript**: Vanilla JavaScript for performance
  - `script.js` - Core functionality and interactions
  - `demo-scripts.js` - Interactive demo functionality
  - No external dependencies for fast loading

### Reference Implementation
The `BUILD_INSTRUCTIONS_SHEMA/aibridgegap_code_package/` directory contains a Next.js reference:
- Built with Next.js 15.2.4, React 19, TypeScript 5
- Tailwind CSS for styling reference
- Used as design reference for WordPress rebuild

## Key Development Commands

### Static Website Development
Since this is a vanilla HTML/CSS/JS project, development is straightforward:

```bash
# Serve locally for development (using any local server)
python3 -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000

# Open in browser
open http://localhost:8000
```

### Next.js Reference (in aibridgegap_code_package/)
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

# Lint code
npm run lint
```

## Deployment Workflow

### cPanel/GoDaddy Deployment
The website is designed for deployment to GoDaddy Web Hosting using cPanel:

1. **File Upload**: All HTML, CSS, JS files go to `public_html/`
2. **Directory Structure**:
   ```
   public_html/
   ├── index.html (and other HTML files)
   ├── styles.css
   ├── script.js
   ├── demo-scripts.js
   ├── images/
   ├── blog/
   └── resources/
   ```

3. **Configuration Files**:
   - `.htaccess` for redirects, compression, caching
   - `robots.txt` for SEO
   - `sitemap.xml` for search engines

### Contact Form Integration
Choose one of these approaches:
- **Formspree** (recommended): Update form action to `https://formspree.io/f/YOUR_FORM_ID`
- **PHP Backend**: Custom PHP script for form processing

## Design System

### Color Palette
The website uses a professional blue-focused color scheme:
- Primary Blue: `#2563eb`
- Primary Blue Dark: `#1d4ed8`
- Accent Cyan: `#06b6d4`
- Dark Navy: `#1e293b` (text)
- Medium Gray: `#64748b` (body text)
- Light Gray: `#f1f5f9` (backgrounds)

### Typography
- Font: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Responsive scaling with CSS custom properties

### Spacing System
- Consistent scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem
- CSS custom properties: `--spacing-xs` through `--spacing-3xl`

## Interactive Features

### AI Demos
The website includes 6 interactive demo simulations:
- Customer support automation
- Invoice processing with OCR
- Lead qualification scoring
- Automated report generation  
- Email marketing optimization
- Predictive inventory management

### Form Handling
- Real-time validation
- Smooth user experience
- Error handling and success states
- Integration ready for backend services

### Mobile Navigation
- Responsive hamburger menu
- Smooth animations
- Touch-friendly interface

## Performance Optimizations

### Core Web Vitals
- Target LCP: <2.5 seconds
- Target FID: <100 milliseconds  
- Target CLS: <0.1

### Optimization Features
- Lazy loading images
- Compressed assets
- Browser caching headers
- Critical CSS prioritization
- Minified JavaScript

## SEO Implementation

### Technical SEO
- Semantic HTML5 markup
- Proper heading hierarchy (H1-H6)
- Meta descriptions and title tags
- Open Graph and Twitter Card support
- Schema markup ready
- XML sitemap
- Robots.txt configuration

### Content Strategy
- Business-first AI consulting focus
- Long-tail keyword targeting
- Regular blog content structure
- Local SEO preparation

## Security Features

### Headers and Protection
- X-Content-Type-Options
- X-Frame-Options  
- X-XSS-Protection
- HTTPS enforcement
- Input validation and sanitization

## Testing Guidelines

### Cross-Browser Testing
Test on modern browsers: Chrome, Firefox, Safari, Edge

### Device Testing  
- Mobile: 320px-767px
- Tablet: 768px-1023px
- Desktop: 1024px+

### Performance Testing
- PageSpeed Insights
- Core Web Vitals monitoring
- Load time optimization

## Content Management

### Blog Content
Blog posts are individual HTML files in the `blog/` directory:
- Complete guide to AI implementation
- AI for absolute beginners
- Measuring AI ROI
- Industry-specific case studies

### Image Management
Images stored in `images/` directory:
- Hero images (1200x600px)
- Team photos (400x400px)  
- Demo screenshots (600x400px)
- Blog featured images (800x400px)
- Certification logos (100x100px)

## Business Context

### Target Audience
Small to medium businesses seeking AI implementation without technical teams

### Service Offerings
- Process automation
- AI training and implementation
- Custom AI solutions
- AI strategy consulting

### Competitive Advantage
- No-code/low-code approach
- Business-first methodology
- Proven ROI track record
- Comprehensive training and support

## Maintenance Tasks

### Weekly
- Monitor contact form submissions
- Check website functionality
- Review error logs
- Monitor performance metrics

### Monthly  
- Update blog content
- Analyze Google Analytics
- Check for broken links
- Review service descriptions

### Quarterly
- SEO audit and optimization
- Update case studies
- Security audit
- Content refresh

## Analytics Setup

### Google Analytics
Integration ready with tracking code placement before `</head>` tag

### Conversion Tracking
- Contact form submissions (primary goal)
- Newsletter signups
- Demo interactions
- Page engagement metrics

This project represents a complete professional website solution optimized for AI consulting business needs with production-ready deployment capabilities.

<citations>
<document>
<document_type>RULE</document_type>
<document_id>LcTkrZpdvi0ySPVPQZtg6k</document_id>
</document>
</citations>
