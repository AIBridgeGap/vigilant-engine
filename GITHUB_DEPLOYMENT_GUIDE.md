# GitHub Pages Deployment Guide - AIBridgeGap.com

## 🚀 Quick Setup Summary

✅ **COMPLETED**: Your website files are now in the GitHub repository `vigilant-engine`  
✅ **COMPLETED**: All production files have been committed and pushed to GitHub  
✅ **COMPLETED**: GitHub Pages is configured and live  
✅ **COMPLETED**: Automated reminder system with macOS notifications is set up  
🎯 **CURRENT STATUS**: Dual deployment system ready (GitHub Pages + cPanel)

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

## 🔔 Automated Reminder System

### **NEW: macOS Notification Integration**

Your setup now includes an automated reminder system with macOS notifications to ensure you never forget the cPanel upload step!

#### **Features:**
- 🔔 **Instant macOS notification**: Popup reminder after every git push
- 📋 **Smart file tracking**: Lists only files that actually changed
- 🔗 **Direct cPanel link**: Click-ready URL for immediate upload
- 🎨 **Colored terminal output**: Professional, easy-to-read deployment status
- ⚡ **Single command deployment**: Replaces 3 separate git commands

#### **What the Notification Shows:**
- **Title**: "Website Deployment"
- **Message**: "Files pushed to GitHub! Now upload to cPanel."
- **Subtitle**: "Don't forget cPanel upload!"
- **Sound**: Ping notification sound

---

## 🔄 Complete Update Workflow Options

### **Option 1: Manual Workflow (Original)**
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

# 🚨 REMEMBER: Manually upload changed files to cPanel!
```

### **Option 2: Automated Reminder Script (RECOMMENDED)**
```bash
# Navigate to website directory (if not already there)
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"

# One-command deployment with automatic reminders
./deploy-with-reminder.sh "Update website: [describe your changes here]"
```

#### **What Option 2 Does Automatically:**
1. ✅ **Executes `git add .`** - Stages all your changes
2. ✅ **Executes `git commit -m "Your message"`** - Commits with your description
3. ✅ **Executes `git push origin main`** - Pushes to GitHub (updates GitHub Pages)
4. 🔔 **Shows macOS notification** - Reminds you about cPanel
5. 📋 **Lists changed files** - Shows exactly what to upload to cPanel
6. 🔗 **Displays cPanel URL** - Ready to click and upload
7. 🎯 **Professional output** - Color-coded terminal feedback

#### **Example Usage:**
```bash
# Instead of 3 separate commands, use just 1:
./deploy-with-reminder.sh "Fix navigation menu bug"
./deploy-with-reminder.sh "Add new testimonials section"
./deploy-with-reminder.sh "Update contact form styling"
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

🎆 **Dual Deployment Strategy**

Your current setup uses a **dual deployment strategy** for maximum flexibility and reliability:

### **Two-Site Architecture:**

#### **1. Production Site (Primary)**
- **URL**: https://aibridgegap.com
- **Hosting**: cPanel/Traditional Web Hosting
- **Purpose**: Your main business website that customers see
- **Updates**: Manual upload via cPanel File Manager
- **Benefits**: Full control, custom configurations, established SEO

#### **2. Development/Backup Site**
- **URL**: https://aibridgegap.github.io/vigilant-engine/
- **Hosting**: GitHub Pages (Free)
- **Purpose**: Testing environment & backup site
- **Updates**: Automatic via `git push` (1-2 minute deployment)
- **Benefits**: Version control, automatic backups, free hosting

### **Deployment Flow:**
```
1. Make changes to local files
         ↓
2. Push to GitHub (automatic GitHub Pages update)
         ↓
3. Test on GitHub Pages site
         ↓
4. Upload to cPanel (manual step for main site)
         ↓
5. Both sites updated and in sync
```

### **Strategic Benefits:**
- ✅ **Risk Management**: Main site failure? GitHub Pages serves as backup
- ✅ **Testing Environment**: Preview changes before updating main site
- ✅ **Version Control**: Complete change history in GitHub
- ✅ **Cost Effective**: Free backup hosting via GitHub Pages
- ✅ **SEO Protection**: Keep established domain authority on main site

---

## 🌎 Website URLs

### **Current Active Sites:**
| Site | URL | Status | Purpose |
|------|-----|--------|----------|
| **Primary** | https://aibridgegap.com | 🟢 Live | Main business site |
| **GitHub Pages** | https://aibridgegap.github.io/vigilant-engine/ | 🟢 Live | Testing/Backup |

### **Update Timing:**
- **GitHub Pages**: Updates automatically 1-2 minutes after `git push`
- **Primary Site**: Updates when you manually upload via cPanel

### **Future Options:**
- **Custom Domain on GitHub Pages**: Point aibridgegap.com to GitHub Pages
- **Single Site Strategy**: Consolidate to one platform
- **Subdomain Strategy**: Use staging.aibridgegap.com for GitHub Pages

---

## 🆘 Troubleshooting

### **Git Repository Issues:**

#### "Not a git repository" error:
```bash
# Make sure you're in the right directory:
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"
```

#### "Permission denied" or SSH key issues:
```bash
# Check your git remote:
git remote -v
# Should show: git@github.com:AIBridgeGap/vigilant-engine.git
```

### **Deployment Issues:**

#### Changes not appearing on GitHub Pages:
- Wait 2-3 minutes for GitHub's deployment
- Check the "Actions" tab in your GitHub repository for deployment status
- Verify your changes were actually pushed: `git log --oneline -5`

#### Files not updating:
```bash
# Check what files changed:
git status

# Make sure you added them:
git add .

# Verify they're committed:
git log --oneline -1
```

### **Automated Reminder Script Issues:**

#### Script won't run ("Permission denied"):
```bash
# Make sure script is executable:
chmod +x deploy-with-reminder.sh
```

#### No macOS notification appearing:
```bash
# Test macOS notifications:
osascript -e "display notification \"Test notification\" with title \"Test\" sound name \"Ping\""

# If this doesn't work, check System Preferences > Notifications > Terminal
```

#### Script exists but command not found:
```bash
# Make sure you're in the right directory:
pwd
# Should show: /Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build

# Check if script exists:
ls -la deploy-with-reminder.sh
```

#### Script runs but doesn't show changed files:
This is normal if:
- No files were actually changed since last commit
- You're committing non-web files (the script filters for .html, .css, .js, images)

### **cPanel Upload Issues:**

#### Can't access cPanel:
- **URL**: https://p3plzcpnl509358.prod.phx3.secureserver.net:2083/cpsess4386043908/frontend/jupiter/filemanager/index.html
- **Username**: fije58kp0od7
- **Password**: juLU@JltTY4k
- If link doesn't work, go to your hosting provider's main cPanel login

#### Files upload but don't appear on site:
- Check file permissions (should be 644 for files, 755 for directories)
- Clear browser cache
- Wait 2-3 minutes for server updates

---

## 🎯 Quick Commands Reference

### **Essential Commands:**
| Task | Command |
|------|---------|
| **Navigate to git repo** | `cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"` |
| **Deploy with reminders (RECOMMENDED)** | `./deploy-with-reminder.sh "Your commit message"` |
| **Check git status** | `git status` |
| **Check current directory** | `pwd` |
| **List website files** | `ls -la *.html *.css *.js` |

### **Manual Git Commands:**
| Task | Command |
|------|---------|
| **Add all changes** | `git add .` |
| **Add specific file** | `git add filename.html` |
| **Commit changes** | `git commit -m "Your message here"` |
| **Push to GitHub** | `git push origin main` |
| **View recent commits** | `git log --oneline -5` |
| **View changed files in last commit** | `git diff-tree --no-commit-id --name-only -r HEAD` |

### **Site URLs:**
| Site | URL | Purpose |
|------|----- |----------|
| **Primary Site** | https://aibridgegap.com | Main business website |
| **GitHub Pages** | https://aibridgegap.github.io/vigilant-engine/ | Testing & backup |
| **cPanel File Manager** | https://p3plzcpnl509358.prod.phx3.secureserver.net:2083/cpsess4386043908/frontend/jupiter/filemanager/index.html | Upload files |
| **GitHub Repository** | https://github.com/AIBridgeGap/vigilant-engine | Code management |

### **Troubleshooting Commands:**
| Issue | Command |
|-------|----------|
| **Test macOS notifications** | `osascript -e "display notification \"Test\" with title \"Test\" sound name \"Ping\""` |
| **Make script executable** | `chmod +x deploy-with-reminder.sh` |
| **Check script exists** | `ls -la deploy-with-reminder.sh` |
| **Check git remote** | `git remote -v` |

---

## 🎉 Summary

**Your AIBridgeGap website now has a professional dual-deployment system:**

✅ **GitHub Pages**: Automatic deployment for testing & backup  
✅ **cPanel Hosting**: Your main production website  
✅ **Automated Reminders**: macOS notifications ensure you never forget uploads  
✅ **Version Control**: Complete change history and rollback capability  
✅ **Professional Workflow**: Single-command deployment with smart file tracking  

**Ready to deploy!** Use `./deploy-with-reminder.sh "Your update description"` for your next website change.
