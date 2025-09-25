# AIBridgeGap Website Code

This package contains the source code for the AIBridgeGap website, which was built using Next.js and Tailwind CSS. This documentation will help you understand the structure and components of the website as you rebuild it in WordPress.

## File Structure

- **src/app/** - Contains all the page components and layouts
  - **page.tsx** - Home page
  - **about/page.tsx** - About page
  - **services/page.tsx** - Services page
  - **blog/page.tsx** - Blog page
  - **contact/page.tsx** - Contact page
  - **layout.tsx** - Main layout component (includes header and footer)
  - **globals.css** - Global CSS styles

- **package.json** - Project dependencies and scripts
- **tailwind.config.js** - Tailwind CSS configuration
- **postcss.config.js** - PostCSS configuration for Tailwind
- **next.config.js** - Next.js configuration
- **.eslintrc.js** - ESLint configuration

## Page Components

### Home Page (page.tsx)
The home page includes:
- Hero section with main value proposition
- Services overview
- Benefits section
- Testimonials
- Call-to-action

### Services Page (services/page.tsx)
Details the AI consulting services offered:
- Process automation
- AI prompt engineering
- Internal AI training
- App/automation development
- AI infrastructure strategy

### About Page (about/page.tsx)
Information about the company approach and expertise.

### Blog Page (blog/page.tsx)
Structure for blog posts and articles.

### Contact Page (contact/page.tsx)
Contact form and FAQ section.

## Styling

The website uses Tailwind CSS for styling with a color scheme focused on:
- Primary colors: Indigo and purple tones
- Secondary/accent colors: Soft blues and teals
- Neutral tones: Clean whites and subtle grays

## WordPress Implementation Tips

When rebuilding in WordPress:

1. **Theme Selection**: Choose a minimal, customizable theme like Astra, GeneratePress, or Kadence that allows for custom CSS.

2. **Page Structure**: Create WordPress pages that match the structure of the Next.js pages.

3. **Styling**: 
   - You can use the Tailwind classes as reference for your CSS
   - Consider using a plugin like Tailwind CSS for WordPress or manually add the styles

4. **Components**: 
   - Use WordPress blocks or a page builder like Elementor to recreate the components
   - For complex components, consider using custom HTML blocks

5. **Header/Footer**: 
   - Use the WordPress theme customizer or a header/footer builder
   - Reference the layout.tsx file for the structure

6. **Forms**: 
   - Use a form plugin like Contact Form 7 or WPForms for the contact page
   - Ensure form styling matches the original design

7. **Blog**: 
   - WordPress has built-in blog functionality
   - Style the blog archive and single post templates to match the original design

This code package serves as a reference to help you understand the structure, design, and content of the AIBridgeGap website as you rebuild it in WordPress.
