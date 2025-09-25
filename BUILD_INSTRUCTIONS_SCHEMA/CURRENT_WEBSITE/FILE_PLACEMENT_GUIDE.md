# File Placement Guide for AIBridgeGap.com
## Deploying HTML Site Alongside WordPress

---

## 🎯 Overview

This guide addresses the proper file placement strategy for deploying your custom HTML site alongside an existing WordPress installation on `aibridgegap.com`. The recommendations ensure no conflicts between systems while maintaining professional organization and accessibility.

---

## 📋 Key Questions & Answers

### 1. Root vs Subdirectories

**❌ Problem with Root Placement:**
- Placing `index.html` directly in `/public_html/` **WILL override** WordPress's `index.php`
- Your HTML files will conflict with WordPress core files
- Users visiting `aibridgegap.com` will see your HTML site instead of WordPress

**✅ Recommended Solution:**
- Create a dedicated subdirectory: `/public_html/demo/`
- Access your HTML site via: `https://aibridgegap.com/demo/`
- WordPress remains accessible at: `https://aibridgegap.com/`

### 2. CSS & JS Files Organization

**❌ Avoid Root Clutter:**
- Don't place `styles.css`, `script.js`, and `demo-scripts.js` in `/public_html/` root
- This creates organizational chaos and potential conflicts

**✅ Organized Structure:**
```
public_html/demo/
├── css/
│   └── styles.css
├── js/
│   ├── script.js
│   └── demo-scripts.js
└── [HTML files]
```

**HTML Reference Paths:**
```html
<link rel="stylesheet" href="css/styles.css">
<script src="js/script.js"></script>
<script src="js/demo-scripts.js"></script>
```

### 3. Images Directory

**✅ Recommended Location:**
- Place images in: `/public_html/demo/images/`
- Keeps everything organized within your subdirectory
- Avoids conflicts with WordPress's `/wp-content/uploads/` folder

**HTML Reference:**
```html
<img src="images/your-image.jpg" alt="Description">
```

### 4. WordPress Interaction Strategy

**✅ Coexistence Approach:**
- **WordPress**: Runs on main domain (`aibridgegap.com`)
- **HTML Site**: Accessible via subdirectory (`aibridgegap.com/demo/`)
- **No Integration Required**: Keep as separate standalone site
- **Direct Path Access**: Users can bookmark and share demo URLs

**Alternative Option:**
- **Subdomain**: `demo.aibridgegap.com` (requires DNS configuration)

### 5. File Permissions

**✅ Standard WordPress-Compatible Permissions:**
- **Files (HTML, CSS, JS, images)**: `644`
- **Directories**: `755`
- **Security**: Prevents unauthorized modifications while allowing proper access

**Setting Permissions via cPanel:**
1. Select files/folders in File Manager
2. Right-click → "Permissions"
3. Set numeric values: 644 for files, 755 for folders

### 6. Domain Behavior & URL Structure

**✅ Clean URL Architecture:**
- `https://aibridgegap.com/` → WordPress site
- `https://aibridgegap.com/demo/` → Your HTML demo site
- `https://aibridgegap.com/demo/services.html` → Services page
- `https://aibridgegap.com/demo/contact.html` → Contact page

---

## 🏗️ Recommended File Structure

### Complete Directory Layout
```
public_html/
├── [WordPress Core Files]
│   ├── index.php
│   ├── wp-config.php
│   ├── wp-content/
│   ├── wp-admin/
│   └── wp-includes/
│
├── demo/                           ← Your HTML Site
│   ├── index.html                  (Demo homepage)
│   ├── services.html               (Services page)
│   ├── about.html                  (About page)
│   ├── contact.html                (Contact page)
│   ├── demos.html                  (Demos page)
│   ├── blog.html                   (Blog page)
│   ├── privacy_policy.html         (Privacy page)
│   │
│   ├── css/
│   │   └── styles.css              (Main stylesheet)
│   │
│   ├── js/
│   │   ├── script.js               (Main JavaScript)
│   │   └── demo-scripts.js         (Demo functionality)
│   │
│   └── images/                     (Image assets)
│       ├── hero-image.jpg
│       ├── logo.png
│       └── [other graphics]
│
└── [Other WordPress directories]
```

---

## 🚀 Updated Deployment Instructions

### Step 1: Create Directory Structure
1. Login to cPanel File Manager
2. Navigate to `/public_html/`
3. Create new folder: `demo`
4. Inside `demo/`, create subfolders: `css`, `js`, `images`

### Step 2: Upload Files with New Structure
1. **HTML Files**: Upload to `/public_html/demo/`
2. **CSS File**: Upload `styles.css` to `/public_html/demo/css/`
3. **JavaScript Files**: Upload to `/public_html/demo/js/`
4. **Images**: Upload to `/public_html/demo/images/`

### Step 3: Update HTML File References
Ensure all your HTML files use the correct relative paths:
```html
<!-- CSS Reference -->
<link rel="stylesheet" href="css/styles.css">

<!-- JavaScript References -->
<script src="js/script.js"></script>
<script src="js/demo-scripts.js"></script>

<!-- Image References -->
<img src="images/hero-image.jpg" alt="Hero Image">
```

### Step 4: Set Permissions
- **Directories** (`demo`, `css`, `js`, `images`): `755`
- **All Files** (HTML, CSS, JS, images): `644`

### Step 5: Test Deployment
1. Visit: `https://aibridgegap.com/demo/`
2. Test all internal navigation
3. Verify CSS and JavaScript loading
4. Check image display
5. Test form functionality
6. Verify mobile responsiveness

---

## ✅ Benefits of This Approach

### 🔒 **Conflict Prevention**
- No interference with WordPress functionality
- Separate file systems prevent accidental overwrites
- Clean separation of concerns

### 📁 **Organization**
- Professional file structure
- Easy maintenance and updates
- Clear distinction between WordPress and custom content

### 🌐 **Accessibility**
- Direct URL access to demo site
- Bookmarkable links
- SEO-friendly URL structure

### 🔧 **Maintenance**
- Independent updates for each system
- WordPress updates won't affect HTML site
- Easy to backup and restore separately

---

## 🚨 What NOT To Do

### ❌ **Avoid These Common Mistakes:**

1. **Don't place HTML files in `/public_html/` root**
   - Will override WordPress index.php
   - Creates system conflicts

2. **Don't mix CSS/JS in WordPress directories**
   - `/wp-content/` is for WordPress plugins/themes only
   - May be overwritten during WordPress updates

3. **Don't use WordPress media folder for your images**
   - `/wp-content/uploads/` is managed by WordPress
   - Your images may be affected by WordPress media management

4. **Don't set incorrect permissions**
   - Avoid 777 (security risk)
   - Don't use 644 for directories (will break access)

---

## 🎯 Final Recommendations

### **Primary Approach (Recommended)**
- Use `/public_html/demo/` subdirectory structure
- Access via `https://aibridgegap.com/demo/`
- Maintains WordPress on main domain

### **Alternative Approach**
- Setup subdomain `demo.aibridgegap.com`
- Requires DNS configuration through your hosting provider
- More complex setup but cleaner separation

### **Future Considerations**
- Consider converting to WordPress custom theme if you want CMS functionality
- Monitor both sites independently for performance and security
- Keep separate backups for WordPress and HTML site

---

**📅 Created:** January 18, 2025  
**🔄 Last Updated:** January 18, 2025  
**📝 Status:** Ready for Implementation

---

*This guide ensures your AIBridgeGap.com HTML demo site coexists peacefully with WordPress while maintaining professional organization and optimal user experience.*