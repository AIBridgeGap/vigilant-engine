# Static Asset Placement Strategy for cPanel WordPress Host

## Decision: **Subfolder Approach** ✅

**Rationale:**
- **Safety**: Won't interfere with WordPress core functionality
- **Predictability**: Clean URL structure (`/custom/`)
- **Rollback**: Easy to remove entire directory without touching WP
- **Organization**: Keeps custom assets isolated from WP files

---

## 1. Root vs Subfolder Analysis

### If Placed in Root (/public_html):
- ❌ **index.html WILL overshadow WordPress index.php**
- ❌ **Side effects**: Home page becomes static HTML instead of WordPress
- ❌ **Risk**: WordPress routing may intercept other static files
- ❌ **Harder rollback**: Mixed with WP core files

### Recommended Subfolder (/public_html/custom/):
- ✅ **No WP interference**: WordPress stays at root
- ✅ **Clean URLs**: `https://aibridgegap.com/custom/`
- ✅ **Easy maintenance**: Self-contained directory
- ✅ **Safe rollback**: Delete one folder

---

## 2. Final Directory Structure

```bash
/home/<cpanel_user>/public_html/
├── index.php              # WordPress (unchanged)
├── wp-admin/              # WordPress (unchanged)
├── wp-content/            # WordPress (unchanged)
├── wp-includes/           # WordPress (unchanged)
└── custom/                # NEW: Your static assets
    ├── index.html
    ├── about.html
    ├── contact.html
    ├── assets/
    │   ├── css/
    │   │   └── styles.css
    │   ├── js/
    │   │   ├── script.js
    │   │   └── demo-scripts.js
    │   └── images/
    │       └── [your image files]
    └── .htaccess          # Optional: Prevent WP interference
```

---

## 3. Public URLs

| File | Local Path | Public URL |
|------|------------|------------|
| HTML Pages | `/public_html/custom/index.html` | `https://aibridgegap.com/custom/` |
| | `/public_html/custom/about.html` | `https://aibridgegap.com/custom/about.html` |
| | `/public_html/custom/contact.html` | `https://aibridgegap.com/custom/contact.html` |
| CSS | `/public_html/custom/assets/css/styles.css` | `https://aibridgegap.com/custom/assets/css/styles.css` |
| JavaScript | `/public_html/custom/assets/js/script.js` | `https://aibridgegap.com/custom/assets/js/script.js` |
| Images | `/public_html/custom/assets/images/logo.png` | `https://aibridgegap.com/custom/assets/images/logo.png` |

---

## 4. HTML Reference Examples

For files inside `/public_html/custom/`:

```html
<!-- In index.html, about.html, contact.html -->
<!DOCTYPE html>
<html>
<head>
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <!-- Images -->
    <img src="assets/images/logo.png" alt="Logo">
    
    <!-- JavaScript -->
    <script src="assets/js/script.js"></script>
    <script src="assets/js/demo-scripts.js"></script>
</body>
</html>
```

---

## 5. Setup Commands

```bash
# Create directory structure
mkdir -p /home/<cpanel_user>/public_html/custom/assets/{css,js,images}

# Set directory permissions
find /home/<cpanel_user>/public_html/custom -type d -exec chmod 755 {} \;

# Copy your files (adjust source paths as needed)
cp index.html about.html contact.html /home/<cpanel_user>/public_html/custom/
cp styles.css /home/<cpanel_user>/public_html/custom/assets/css/
cp script.js demo-scripts.js /home/<cpanel_user>/public_html/custom/assets/js/
cp images/* /home/<cpanel_user>/public_html/custom/assets/images/

# Set file permissions
find /home/<cpanel_user>/public_html/custom -type f -exec chmod 644 {} \;
```

---

## 6. Permissions Confirmation

| Type | Permission | Reason |
|------|------------|---------|
| **Directories** | `755` | Read/execute for web server |
| **HTML/CSS/JS** | `644` | Read-only for web server |
| **Images** | `644` | Read-only for web server |

**Exception**: WordPress `wp-content/uploads/` stays `755` for directories (WP needs write access).

---

## 7. .htaccess for /custom/ Directory

**Not strictly required** but recommended to prevent WordPress from trying to handle these routes:

```apache
# /public_html/custom/.htaccess
# Prevent WordPress from intercepting static files
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # Serve static files directly (no WP processing)
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]
    
    # Optional: Default to index.html for directory access
    DirectoryIndex index.html
</IfModule>
```

---

## 8. Subdomain Alternative (Optional)

For `demo.aibridgegap.com` → `/public_html/custom/`:

**cPanel Steps:**
1. **Subdomains** → Create `demo`
2. **Document Root**: `/public_html/custom`
3. **DNS**: Auto-created by cPanel

**Manual DNS** (if needed):
```
Type: CNAME
Name: demo
Value: aibridgegap.com
TTL: 3600
```

---

## 9. Rollback Plan

### Backup Commands:
```bash
# Full backup before changes
tar -czf ~/backup_public_html_$(date +%Y%m%d_%H%M%S).tar.gz -C /home/<cpanel_user> public_html/

# Quick custom folder backup
tar -czf ~/backup_custom_$(date +%Y%m%d_%H%M%S).tar.gz -C /home/<cpanel_user>/public_html custom/
```

### Restore Commands:
```bash
# Remove custom directory (safest rollback)
rm -rf /home/<cpanel_user>/public_html/custom/

# Full restore (if needed)
cd /home/<cpanel_user>
tar -xzf ~/backup_public_html_YYYYMMDD_HHMMSS.tar.gz
```

### Post-Restore Checks:
1. ✅ **WordPress home page**: `https://aibridgegap.com/`
2. ✅ **WordPress admin**: `https://aibridgegap.com/wp-admin/`
3. ✅ **Custom URLs return 404**: `https://aibridgegap.com/custom/`

---

## Summary

**Deploy to**: `/public_html/custom/` with organized `assets/` subdirectories  
**Access via**: `https://aibridgegap.com/custom/`  
**WordPress**: Completely unaffected  
**Rollback**: Delete `/custom/` directory  
**Permissions**: 755 dirs, 644 files  

This approach provides maximum safety while keeping your static assets organized and accessible.

---

## Implementation Checklist

- [ ] Create backup of current site
- [ ] Create `/custom/` directory structure
- [ ] Upload static files to appropriate locations
- [ ] Set correct file/directory permissions
- [ ] Create optional `.htaccess` in `/custom/`
- [ ] Test all public URLs
- [ ] Verify WordPress functionality unchanged
- [ ] Document any customizations made

---

**Last Updated**: September 18, 2025  
**Domain**: aibridgegap.com  
**Hosting**: GoDaddy cPanel (Deluxe)  
**Strategy**: Subfolder isolation for maximum safety