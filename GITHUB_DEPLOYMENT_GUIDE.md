# GitHub Pages Deployment Guide - AIBridgeGap.com

## 🚀 Quick Setup Summary

✅ **COMPLETED**: Your website files are now in the GitHub repository `vigilant-engine`  
✅ **COMPLETED**: All production files have been committed and pushed to GitHub  
🔄 **NEXT STEP**: Enable GitHub Pages (see instructions below)

---

## 📍 IMPORTANT: Your Working Directory

**ALWAYS work from this directory when making website changes:**

```bash
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"
```

This is your git repository root where all your website files are located.

---

## 🔧 Step 1: Enable GitHub Pages

### Manual Setup (Do this ONCE):

1. **Go to your GitHub repository**: https://github.com/AIBridgeGap/vigilant-engine

2. **Access Settings**:
   - Click on the "Settings" tab (top menu)

3. **Navigate to Pages**:
   - Scroll down in the left sidebar and click "Pages"

4. **Configure Source**:
   - Under "Source", select "Deploy from a branch"
   - Branch: Select "main"
   - Folder: Select "/ (root)"
   - Click "Save"

5. **Wait for Deployment**:
   - GitHub will show a green checkmark when ready
   - Your site will be available at: `https://aibridgegap.github.io/vigilant-engine/`

---

## 📝 Step 2: How to Update Your Website

### Every time you make website changes, follow these exact steps:

#### Step A: Navigate to the Correct Directory
```bash
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"
```

#### Step B: Verify You're in the Right Place
```bash
pwd
# Should show: /Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build

ls -la *.html
# Should show: index.html, about.html, services.html, etc.
```

#### Step C: Check Current Git Status
```bash
git status
```

#### Step D: Add Your Changes
```bash
# If you modified existing files:
git add .

# If you want to add specific files only:
git add index.html services.html styles.css
```

#### Step E: Commit Your Changes
```bash
git commit -m "Update website: [describe what you changed]"
```

**Examples of good commit messages:**
- `git commit -m "Update homepage hero section with new content"`
- `git commit -m "Fix contact form validation and styling"`
- `git commit -m "Add new service offering to services page"`

#### Step F: Push to GitHub
```bash
git push origin main
```

#### Step G: Verify Deployment
- Wait 1-2 minutes for GitHub Pages to update
- Check your live site: `https://aibridgegap.github.io/vigilant-engine/`

---

## 🔄 Complete Update Workflow (Copy & Paste)

Here's the complete sequence you can copy and paste:

```bash
# Navigate to website directory
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"

# Check status
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update website: [describe your changes here]"

# Push to GitHub
git push origin main
```

---

## 📂 File Structure Reference

Your website files in the repository root:
```
Website_build/                          <- YOU ARE HERE (git root)
├── index.html                          <- Homepage
├── about.html                          <- About page
├── services.html                       <- Services page
├── contact.html                        <- Contact page
├── demos.html                          <- Demos page
├── blog.html                           <- Blog page
├── privacy_policy.html                 <- Privacy policy
├── styles.css                          <- Main stylesheet
├── script.js                           <- Main JavaScript
├── demo-scripts.js                     <- Demo functionality
├── images/                             <- Image assets
└── BUILD_INSTRUCTIONS_SCHEMA/          <- Development files (not deployed)
```

---

## ⚠️ Important Notes

### DO:
- ✅ Always work from the git repository root directory
- ✅ Make changes to the files in the root directory
- ✅ Test changes locally before pushing
- ✅ Use descriptive commit messages
- ✅ Push regularly to keep GitHub up to date

### DON'T:
- ❌ Edit files in the `DEPLOYMENT_READY` subdirectory
- ❌ Forget to commit and push your changes
- ❌ Work from the wrong directory
- ❌ Push without testing your changes first

---

## 🌐 Website URLs

### Current Setup:
- **Primary Site (cPanel)**: https://aibridgegap.com
- **GitHub Pages Site**: https://aibridgegap.github.io/vigilant-engine/ (after setup)

### Future Options:
- You can configure a custom domain for GitHub Pages if desired
- You can choose to switch completely to GitHub Pages hosting

---

## 🆘 Troubleshooting

### "Not a git repository" error:
```bash
# Make sure you're in the right directory:
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"
```

### "Permission denied" or SSH key issues:
```bash
# Check your git remote:
git remote -v
# Should show: git@github.com:AIBridgeGap/vigilant-engine.git
```

### Changes not appearing on GitHub Pages:
- Wait 2-3 minutes for GitHub's deployment
- Check the "Actions" tab in your GitHub repository for deployment status
- Verify your changes were actually pushed: `git log --oneline -5`

### Files not updating:
```bash
# Check what files changed:
git status

# Make sure you added them:
git add .

# Verify they're committed:
git log --oneline -1
```

---

## 🎯 Quick Commands Reference

| Task | Command |
|------|---------|
| Navigate to git repo | `cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"` |
| Check git status | `git status` |
| Add all changes | `git add .` |
| Add specific file | `git add filename.html` |
| Commit changes | `git commit -m "Your message here"` |
| Push to GitHub | `git push origin main` |
| View recent commits | `git log --oneline -5` |
| Check current directory | `pwd` |
| List website files | `ls -la *.html *.css *.js` |

---

**🎉 You're all set! Your website is now managed through GitHub and ready for automated deployment.**