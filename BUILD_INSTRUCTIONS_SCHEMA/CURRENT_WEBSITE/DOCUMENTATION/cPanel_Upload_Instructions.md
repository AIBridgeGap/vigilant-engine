# AIBridgeGap.com cPanel Upload & Deployment Instructions

## 📋 Overview
This guide provides step-by-step instructions for uploading and deploying the AIBridgeGap.com website to your GoDaddy Web Hosting Deluxe account using cPanel.

## 🎯 Pre-Upload Checklist

### Files to Upload
Ensure you have all the following files ready for upload:

**Core HTML Files:**
- [ ] `index.html` (Homepage)
- [ ] `services.html` (Services page)
- [ ] `about.html` (About page)
- [ ] `contact.html` (Contact page)
- [ ] `demos.html` (Demo gallery)
- [ ] `blog.html` (Resources/Blog page)

**CSS & JavaScript Files:**
- [ ] `styles.css` (Main stylesheet)
- [ ] `script.js` (Main JavaScript functionality)
- [ ] `demo-scripts.js` (Demo functionality)

**Required Directories to Create:**
- [ ] `images/` (for all website images)
- [ ] `blog/` (for individual blog post files)
- [ ] `resources/` (for downloadable resources)

**Additional Files (Optional but Recommended):**
- [ ] `favicon.ico` (Website icon)
- [ ] `robots.txt` (SEO configuration)
- [ ] `.htaccess` (URL rewriting and redirects)
- [ ] `sitemap.xml` (Search engine sitemap)

## 🔐 Step 1: Access cPanel

1. **Log into your GoDaddy account:**
   - Go to [godaddy.com](https://godaddy.com)
   - Sign in with your account credentials

2. **Navigate to cPanel:**
   - Go to "My Products"
   - Find your Web Hosting account
   - Click "Manage" next to your hosting plan
   - Click "cPanel Admin" button

3. **Alternative cPanel Access:**
   - Direct URL: `https://aibridgegap.com/cpanel`
   - Use your cPanel username and password: 

   UN: fije58kp0od7
   PW: vOhT82$5QtJs

## 📁 Step 2: Prepare Your File Structure

Before uploading, organize your files in this structure:

```
aibridgegap-website/
├── index.html
├── services.html
├── about.html
├── contact.html
├── demos.html
├── blog.html
├── styles.css
├── script.js
├── demo-scripts.js
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── .htaccess
├── images/
│   ├── hero-main.jpg
│   ├── value-proposition.jpg
│   ├── company-story.jpg
│   ├── team-founder.jpg
│   ├── team-technical.jpg
│   ├── team-training.jpg
│   ├── demo-customer-support.jpg
│   ├── demo-invoice-processing.jpg
│   ├── demo-lead-qualification.jpg
│   ├── demo-report-generation.jpg
│   ├── demo-email-marketing.jpg
│   ├── demo-inventory.jpg
│   ├── blog-featured-ai-implementation.jpg
│   ├── blog-ai-beginners.jpg
│   ├── blog-case-study-restaurant.jpg
│   ├── blog-roi-measurement.jpg
│   ├── blog-ai-tools-comparison.jpg
│   ├── blog-first-automation.jpg
│   ├── blog-healthcare-ai.jpg
│   ├── blog-team-training.jpg
│   ├── blog-ecommerce-case.jpg
│   ├── blog-chatbot-comparison.jpg
│   ├── cert-microsoft.png
│   ├── cert-google.png
│   ├── cert-zapier.png
│   └── cert-hubspot.png
├── blog/
│   ├── complete-guide-ai-implementation.html
│   ├── ai-for-absolute-beginners.html
│   ├── restaurant-chain-automation.html
│   ├── measuring-ai-roi.html
│   ├── top-ai-tools-2024.html
│   ├── choosing-first-automation.html
│   ├── ai-in-healthcare-practices.html
│   ├── training-team-ai-adoption.html
│   ├── ecommerce-personalization-success.html
│   └── chatbot-platforms-comparison.html
└── resources/
    ├── ai-readiness-assessment.html
    ├── implementation-templates.html
    └── roi-calculator.html
```

## ⬆️ Step 3: Upload Files Using File Manager

1. **Open File Manager:**
   - In cPanel, find "Files" section
   - Click on "File Manager"
   - Select "Document Root for:" and choose your domain
   - Click "Go"

2. **Navigate to public_html:**
   - You should see the `public_html` folder
   - Double-click to enter this folder
   - This is where your website files will be uploaded

3. **Clear Existing Files (if any):**
   - Select any existing files (like default GoDaddy pages)
   - Click "Delete" to remove them
   - Confirm deletion

4. **Upload HTML Files:**
   - Click "Upload" button at the top
   - Select all your HTML files (`index.html`, `services.html`, etc.)
   - Wait for upload to complete
   - Click "Back to /public_html/domain.com"

5. **Upload CSS and JavaScript Files:**
   - Upload `styles.css`, `script.js`, and `demo-scripts.js`
   - Place them in the root directory (same level as HTML files)

6. **Create and Upload Images Directory:**
   - Click "New Folder"
   - Name it "images"
   - Enter the images folder
   - Upload all image files to this directory

7. **Create Additional Directories:**
   - Return to public_html root
   - Create "blog" folder and upload blog post HTML files
   - Create "resources" folder and upload resource pages

## 🔧 Step 4: Configure Essential Files

### Create .htaccess File
1. **Create .htaccess in public_html root:**
   - Click "New File"
   - Name it `.htaccess`
   - Add this content:

```apache
# AIBridgeGap.com .htaccess Configuration

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Enable browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# Redirect www to non-www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.aibridgegap\.com [NC]
RewriteRule ^(.*)$ https://aibridgegap.com/$1 [R=301,L]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Custom error pages
ErrorDocument 404 /404.html
ErrorDocument 500 /500.html

# SEO-friendly URLs (if needed)
RewriteRule ^services/?$ services.html [L]
RewriteRule ^about/?$ about.html [L]
RewriteRule ^contact/?$ contact.html [L]
RewriteRule ^demos/?$ demos.html [L]
RewriteRule ^blog/?$ blog.html [L]
```

### Create robots.txt File
1. **Create robots.txt in public_html root:**
   - Click "New File"
   - Name it `robots.txt`
   - Add this content:

```
User-agent: *
Allow: /

Sitemap: https://aibridgegap.com/sitemap.xml

# Block admin areas
Disallow: /cpanel/
Disallow: /tmp/
Disallow: /_private/
```

### Create sitemap.xml File
1. **Create sitemap.xml in public_html root:**
   - Click "New File"
   - Name it `sitemap.xml`
   - Add this content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://aibridgegap.com/</loc>
    <lastmod>2024-12-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://aibridgegap.com/services.html</loc>
    <lastmod>2024-12-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://aibridgegap.com/about.html</loc>
    <lastmod>2024-12-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://aibridgegap.com/contact.html</loc>
    <lastmod>2024-12-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://aibridgegap.com/demos.html</loc>
    <lastmod>2024-12-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://aibridgegap.com/blog.html</loc>
    <lastmod>2024-12-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

## 📧 Step 5: Configure Contact Form

Since the HTML form needs server-side processing, you have several options:

### Option A: Use Formspree (Recommended - Easy Setup)
1. **Sign up at [formspree.io](https://formspree.io)**
2. **Update contact.html form action:**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. **Add hidden field for form name:**
   ```html
   <input type="hidden" name="_subject" value="New consultation request from AIBridgeGap.com">
   ```

### Option B: Create PHP Contact Form
1. **Create contact-handler.php in public_html:**
   ```php
   <?php
   if ($_POST) {
       $name = $_POST['firstName'] . ' ' . $_POST['lastName'];
       $email = $_POST['email'];
       $company = $_POST['company'];
       $message = $_POST['challenges'];
       
       $to = 'hello@aibridgegap.com';
       $subject = 'New Consultation Request';
       
       $body = "Name: $name\n";
       $body .= "Email: $email\n";
       $body .= "Company: $company\n";
       $body .= "Message: $message\n";
       
       $headers = "From: $email\r\n";
       
       if (mail($to, $subject, $body, $headers)) {
           header('Location: thank-you.html');
       } else {
           header('Location: contact.html?error=1');
       }
   }
   ?>
   ```

2. **Update contact.html form action:**
   ```html
   <form action="contact-handler.php" method="POST">
   ```

## 🔐 Step 6: Set File Permissions

1. **Set Correct Permissions:**
   - Select all HTML, CSS, and JS files
   - Right-click and choose "Permissions"
   - Set to 644 (or check: Owner Read/Write, Group Read, Other Read)
   - For directories, set to 755

2. **Secure Sensitive Files:**
   - If using PHP files, set permissions to 644
   - Ensure .htaccess is set to 644

## ✅ Step 7: Test Your Website

1. **Basic Functionality Test:**
   - Visit `https://aibridgegap.com`
   - Navigate through all pages
   - Test mobile responsiveness
   - Check all links work

2. **Form Testing:**
   - Submit contact form with test data
   - Verify form submissions are received
   - Test form validation

3. **Performance Testing:**
   - Check page load speeds using [PageSpeed Insights](https://pagespeed.web.dev/)
   - Test on different devices and browsers

## 🚀 Step 8: SSL Certificate Configuration

1. **Enable SSL in cPanel:**
   - Look for "SSL/TLS" in cPanel
   - Click "Let's Encrypt SSL"
   - Add your domain and www.domain
   - Install certificate

2. **Force HTTPS:**
   - The .htaccess file already includes HTTPS redirect rules
   - Test by visiting http:// version - should redirect to https://

## 📊 Step 9: Set Up Analytics & Tracking

### Google Analytics Setup
1. **Create Google Analytics account**
2. **Add tracking code to all HTML files before `</head>`:**
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Google Search Console Setup
1. **Add property at [search.google.com/search-console](https://search.google.com/search-console)**
2. **Verify domain ownership**
3. **Submit sitemap: `https://aibridgegap.com/sitemap.xml`**

## 🔧 Step 10: Final Optimizations

### Image Optimization
1. **Compress all images:**
   - Use tools like TinyPNG or ImageOptim
   - Aim for under 100KB per image
   - Use WebP format where possible

2. **Create Missing Images:**
   You'll need to create or source the following images:
   - Hero images (1200x600px recommended)
   - Team photos (400x400px)
   - Demo screenshots (600x400px)
   - Blog post featured images (800x400px)
   - Certification logos (100x100px)

### Content Updates
1. **Replace placeholder content:**
   - Update contact information
   - Add real testimonials
   - Include actual case studies
   - Update team member information

2. **SEO Optimization:**
   - Add unique meta descriptions to each page
   - Include relevant keywords naturally
   - Ensure all images have alt tags

## 📋 Post-Launch Checklist

### Week 1: Immediate Actions
- [ ] Test all forms and functionality
- [ ] Monitor error logs in cPanel
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics goals
- [ ] Check mobile responsiveness on real devices
- [ ] Test page load speeds and optimize if needed

### Week 2-4: Optimization
- [ ] Monitor contact form submissions
- [ ] Analyze user behavior with Analytics
- [ ] A/B test different call-to-action buttons
- [ ] Optimize images further based on performance data
- [ ] Update content based on user feedback

### Ongoing Maintenance
- [ ] Weekly: Check for broken links
- [ ] Monthly: Update blog content
- [ ] Monthly: Review Analytics and adjust content
- [ ] Quarterly: Update testimonials and case studies
- [ ] Quarterly: Review and update service descriptions

## 🆘 Troubleshooting Common Issues

### Website Not Loading
1. **Check DNS settings:**
   - Ensure domain points to correct nameservers
   - Wait 24-48 hours for DNS propagation

2. **Verify file upload:**
   - Ensure index.html is in public_html root
   - Check file permissions (644 for files, 755 for directories)

### Contact Form Not Working
1. **Check form action URL**
2. **Verify PHP mail function is enabled (for PHP forms)**
3. **Check error logs in cPanel**
4. **Test with simple form first**

### Images Not Loading
1. **Check image file paths in HTML**
2. **Ensure images are in correct directory**
3. **Verify file permissions**
4. **Check for typos in image names**

### Slow Loading Website
1. **Enable compression in .htaccess**
2. **Optimize image sizes**
3. **Minify CSS and JavaScript**
4. **Enable browser caching**

## 📞 Support Resources

### GoDaddy Support
- **Phone:** Available 24/7
- **Live Chat:** Available through GoDaddy account
- **Knowledge Base:** [godaddy.com/help](https://godaddy.com/help)

### Technical Support
- **cPanel Documentation:** [cpanel.net/docs](https://cpanel.net/docs)
- **Web Development Help:** [developer.mozilla.org](https://developer.mozilla.org)

## 🎉 Congratulations!

Your AIBridgeGap.com website is now live! Remember to:
- Monitor analytics regularly
- Keep content fresh and updated
- Respond promptly to contact form submissions
- Continuously optimize based on user feedback and data

For any additional questions or custom modifications, consider consulting with a web developer familiar with your business needs.

---

**Last Updated:** December 28, 2024  
**Version:** 1.0  
**Created for:** AIBridgeGap.com Professional Website Deployment