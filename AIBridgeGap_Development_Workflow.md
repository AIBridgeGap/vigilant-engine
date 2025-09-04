# AIBridgeGap Development Workflow: Warp Terminal + cPanel + GitHub

## 🎯 **Project Overview**

This document outlines the complete development workflow for the AIBridgeGap website project, integrating your local development environment (Warp Terminal), version control (GitHub), and production hosting (cPanel/GoDaddy).

## 🏗️ **Architecture Overview**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   LOCAL (Mac)   │    │     GITHUB      │    │  PRODUCTION     │
│  Warp Terminal  │◄──►│  vigilant-engine│◄──►│     cPanel      │
│   Development   │    │   Repository    │    │  aibridgegap.com│
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### **Components:**
- **Local (Mac)**: Development environment with Warp Terminal
- **GitHub**: Version control and code repository (`AIBridgeGap/vigilant-engine`)
- **Production**: Live website hosting on GoDaddy via cPanel

## 🔄 **Development Workflow Types**

### **Type 1: Feature Development** (Most Common)
Local Development → GitHub → Manual Deploy to cPanel

### **Type 2: Hotfixes** (Emergency)
Direct cPanel Edit → Push to GitHub → Pull to Local

### **Type 3: Content Updates** (Frequent)
Local Content Changes → GitHub → Auto-Deploy (if configured)

## 📋 **Step-by-Step Development Workflows**

## 🚀 **Workflow 1: Standard Feature Development**

### **Step 1: Start Development Session (Local - Warp Terminal)**

```bash
# Navigate to your project directory
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"

# Check current status
git status

# Pull latest changes from production
git pull origin main

# Create a feature branch (best practice)
git checkout -b feature/new-homepage-section

# OR work directly on main (simpler but less safe)
# git checkout main
```

### **Step 2: Make Your Changes**

```bash
# Edit files using your preferred editor
# Example: Update homepage content
vim BUILD_INSTRUCTIONS_SHEMA/index.html

# OR edit in VS Code
code BUILD_INSTRUCTIONS_SHEMA/index.html

# Test changes locally (if you have a local server)
python3 -m http.server 8000 -d BUILD_INSTRUCTIONS_SHEMA/
# View at: http://localhost:8000
```

### **Step 3: Commit Changes Locally**

```bash
# Check what files changed
git status

# Add specific files
git add BUILD_INSTRUCTIONS_SHEMA/index.html

# OR add all changes
git add .

# Commit with descriptive message
git commit -m "feat: update homepage hero section with new CTA button"

# View commit history
git log --oneline -5
```

### **Step 4: Push to GitHub**

```bash
# Push feature branch to GitHub
git push -u origin feature/new-homepage-section

# OR if working on main
git push origin main
```

### **Step 5: Deploy to Production (cPanel)**

**Option A: Manual Deployment (Recommended for Important Changes)**

```bash
# SSH into cPanel
ssh fije58kp0od7@aibridgegap.com

# Navigate to your repository
cd vigilant-engine

# Pull latest changes
git pull origin main

# Deploy website files
cp -r BUILD_INSTRUCTIONS_SHEMA/* /home/fije58kp0od7/public_html/

# Verify deployment
ls -la /home/fije58kp0od7/public_html/

# Check website is live
curl -I https://aibridgegap.com

# Exit cPanel SSH
exit
```

**Option B: Automated Deployment (Advanced)**

Set up a deployment script that runs via cron or webhook.

### **Step 6: Verify and Clean Up**

```bash
# Back on local machine - merge feature branch (if used)
git checkout main
git merge feature/new-homepage-section

# Delete feature branch
git branch -d feature/new-homepage-section
git push origin --delete feature/new-homepage-section

# Verify website is live
open https://aibridgegap.com
```

---

## 🚨 **Workflow 2: Emergency Hotfix**

When you need to fix something directly on the live server:

### **Step 1: Fix on cPanel**

```bash
# SSH into cPanel
ssh fije58kp0od7@aibridgegap.com

# Navigate to live website files
cd /home/fije58kp0od7/public_html/

# Make emergency fix (example: fix broken link)
vim index.html

# Test fix
curl -I https://aibridgegap.com
```

### **Step 2: Commit from cPanel to GitHub**

```bash
# Navigate to git repository
cd /home/fije58kp0od7/vigilant-engine

# Copy the fixed files back to repo
cp /home/fije58kp0od7/public_html/index.html BUILD_INSTRUCTIONS_SHEMA/

# Commit the fix
git add BUILD_INSTRUCTIONS_SHEMA/index.html
git commit -m "hotfix: repair broken contact form link"

# Push to GitHub
git push origin main

# Exit cPanel
exit
```

### **Step 3: Sync Local Environment**

```bash
# On your local machine, pull the hotfix
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"

git pull origin main

# Verify you have the hotfix
git log --oneline -3
```

---

## 📝 **Workflow 3: README and Documentation Updates**

For creating or updating project documentation, especially README.md files:

### **Step 1: Create/Update README.md Locally**

```bash
# Navigate to project directory
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"

# Pull latest changes
git pull origin main

# Create or edit README.md
vim README.md
# OR use your preferred editor
code README.md

# Preview the README (optional)
# Use a markdown viewer or editor preview
```

### **Step 2: Test and Commit Documentation**

```bash
# Check what files changed
git status

# Add the README file
git add README.md

# Commit with documentation-specific message
git commit -m "docs: add comprehensive README.md with project overview"
# OR for updates
git commit -m "docs: update README with new setup instructions"

# Push to GitHub
git push origin main
```

### **Step 3: Verify on GitHub**

```bash
# Open repository to verify README displays correctly
open https://github.com/AIBridgeGap/vigilant-engine

# Check that:
# - README.md appears automatically on the repository homepage
# - All markdown formatting renders correctly
# - Links work properly
# - Badges display correctly
```

### **Why Terminal over GitHub Web Interface:**
- **Version Control**: Integrates with your established git workflow
- **Consistency**: Follows local development → GitHub → deployment pattern
- **Backup**: Automatically synced to Google Drive
- **Testing**: Can preview and validate locally before pushing
- **Batch Operations**: Can update multiple documentation files together

---

## 📄 **Workflow 4: Content Updates**

For frequent content changes (blog posts, testimonials, service updates):

### **Step 1: Batch Content Changes**

```bash
# Local development
cd "/path/to/Website_build"

# Update multiple content files
vim BUILD_INSTRUCTIONS_SHEMA/blog.html
vim BUILD_INSTRUCTIONS_SHEMA/services.html
vim BUILD_INSTRUCTIONS_SHEMA/about.html

# Test all changes locally
python3 -m http.server 8000 -d BUILD_INSTRUCTIONS_SHEMA/
```

### **Step 2: Commit Content Updates**

```bash
# Stage content changes
git add BUILD_INSTRUCTIONS_SHEMA/blog.html BUILD_INSTRUCTIONS_SHEMA/services.html BUILD_INSTRUCTIONS_SHEMA/about.html

# Commit with content-specific message
git commit -m "content: update Q4 services and add new blog posts"

# Push to GitHub
git push origin main
```

### **Step 3: Deploy Content**

```bash
# Quick deployment
ssh fije58kp0od7@aibridgegap.com "cd vigilant-engine && git pull origin main && cp -r BUILD_INSTRUCTIONS_SHEMA/* /home/fije58kp0od7/public_html/"
```

---

## ⚡ **Quick Reference Commands**

### **Local Development (Warp Terminal)**

```bash
# Project navigation
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"

# Git essentials
git status
git pull origin main
git add .
git commit -m "message"
git push origin main

# Local testing
python3 -m http.server 8000 -d BUILD_INSTRUCTIONS_SHEMA/

# Documentation updates
vim README.md
git add README.md
git commit -m "docs: update README"
```

### **cPanel Operations**

```bash
# Connect
ssh fije58kp0od7@aibridgegap.com

# Repository operations
cd vigilant-engine
git pull origin main
git status
git push origin main

# Deployment
cp -r BUILD_INSTRUCTIONS_SHEMA/* /home/fije58kp0od7/public_html/

# Verification
ls -la /home/fije58kp0od7/public_html/
curl -I https://aibridgegap.com
```

### **GitHub Repository**

- **URL**: `https://github.com/AIBridgeGap/vigilant-engine`
- **SSH Clone**: `git@github.com:AIBridgeGap/vigilant-engine.git`
- **HTTPS Clone**: `https://github.com/AIBridgeGap/vigilant-engine.git`

---

## 🛡️ **Best Practices**

### **Development**
- ✅ **Always pull before starting work**: `git pull origin main`
- ✅ **Use descriptive commit messages**: Follow conventional commits (feat:, fix:, docs:)
- ✅ **Test locally before deploying**: Use local server to preview changes
- ✅ **Make small, focused commits**: Easier to track and revert if needed
- ✅ **Regular backups**: Your Google Drive serves as additional backup

### **Deployment**
- ✅ **Deploy during low traffic**: Avoid peak business hours
- ✅ **Test deployment first**: Use staging directory for major changes
- ✅ **Verify after deployment**: Always check live site after changes
- ✅ **Keep deployment logs**: Document what was deployed when
- ✅ **Backup before major changes**: Create backups of public_html

### **Collaboration**
- ✅ **Document changes**: Use WARP.md for project documentation
- ✅ **Consistent naming**: Use clear, consistent file and branch names
- ✅ **Version tags**: Tag major releases (v1.0, v1.1, etc.)

### **Security**
- ✅ **SSH key management**: Keep SSH keys secure and rotate periodically
- ✅ **File permissions**: Ensure proper permissions (644 for files, 755 for directories)
- ✅ **No secrets in code**: Never commit passwords, API keys, or sensitive data
- ✅ **Regular updates**: Keep dependencies and platforms updated

---

## ⛔ **What NOT to Do**

### **Local Development - DON'T**
- ❌ **Never work directly on main without pulling first**
- ❌ **Don't commit without testing locally**
- ❌ **Don't commit large binary files** (use .gitignore for images)
- ❌ **Don't commit sensitive information** (passwords, API keys)
- ❌ **Don't make changes to multiple unrelated features in one commit**

### **cPanel - DON'T**
- ❌ **Never edit live files without backup**
- ❌ **Don't delete the vigilant-engine directory**
- ❌ **Don't modify .ssh/ directory permissions**
- ❌ **Don't run `rm -rf` commands without double-checking**
- ❌ **Don't make major changes during peak traffic**

### **GitHub - DON'T**
- ❌ **Never force push to main branch** (`git push --force`)
- ❌ **Don't delete the repository accidentally**
- ❌ **Don't commit IDE-specific files** (.vscode/, .idea/)
- ❌ **Don't expose SSH private keys**
- ❌ **Don't work on someone else's branch without permission**

### **General - DON'T**
- ❌ **Don't skip backups before major changes**
- ❌ **Don't work on production directly for non-emergency changes**
- ❌ **Don't ignore error messages**
- ❌ **Don't deploy untested code**
- ❌ **Don't work without version control**

---

## 🔧 **Troubleshooting Common Issues**

### **Git Issues**

**Problem**: `git push` fails with authentication error
```bash
# Solution: Check SSH key
ssh -T git@github.com

# If fails, verify SSH key is added to GitHub
cat ~/.ssh/id_rsa.pub
```

**Problem**: Merge conflicts
```bash
# Solution: Manual conflict resolution
git status
# Edit conflicted files
git add resolved_file.html
git commit -m "resolve: merge conflict in homepage"
```

**Problem**: Accidentally committed wrong files
```bash
# Solution: Undo last commit (keep changes)
git reset --soft HEAD~1

# OR undo and lose changes
git reset --hard HEAD~1
```

### **Deployment Issues**

**Problem**: Website not updating after deployment
```bash
# Solution: Clear browser cache and verify files
curl -I https://aibridgegap.com
ls -la /home/fije58kp0od7/public_html/

# Check file timestamps
stat /home/fije58kp0od7/public_html/index.html
```

**Problem**: SSH connection fails
```bash
# Solution: Verify connection and permissions
ssh -v fije58kp0od7@aibridgegap.com
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh/
```

**Problem**: Files copied but website shows old content
```bash
# Solution: Check for caching, verify file paths
# Clear any cPanel caching
# Verify correct file structure
find /home/fije58kp0od7/public_html/ -name "*.html" -ls
```

### **Local Development Issues**

**Problem**: Local server won't start
```bash
# Solution: Check port availability
lsof -i :8000

# Use different port
python3 -m http.server 8001 -d BUILD_INSTRUCTIONS_SHEMA/
```

**Problem**: Can't find project files
```bash
# Solution: Verify correct directory
pwd
ls -la

# Navigate to correct path
cd "/Users/robertohernandez-macmini-m1/Library/CloudStorage/GoogleDrive-aibridgegap@gmail.com/My Drive/AIBRIDGEGAP.com/WEBSITE/Website_build"
```

---

## 📊 **Monitoring and Maintenance**

### **Daily Tasks**
- [ ] Check website is accessible: `https://aibridgegap.com`
- [ ] Monitor any error emails from cPanel
- [ ] Review git commit history for any unauthorized changes

### **Weekly Tasks**
- [ ] Pull latest changes locally: `git pull origin main`
- [ ] Review website performance (loading speed, functionality)
- [ ] Check for any broken links or images
- [ ] Verify contact forms are working
- [ ] Review Google Analytics (if configured)

### **Monthly Tasks**
- [ ] Full website backup via cPanel
- [ ] Review and update website content
- [ ] Check for security updates on hosting platform
- [ ] Test deployment process end-to-end
- [ ] Review git repository for cleanup opportunities
- [ ] Update documentation (this file) if workflow changes

### **Quarterly Tasks**
- [ ] Comprehensive security audit
- [ ] Performance optimization review
- [ ] Backup strategy verification
- [ ] SSH key rotation (if security policy requires)
- [ ] Review and update development tools
- [ ] Team training updates (if applicable)

---

## 📈 **Performance Optimization**

### **Local Development Speed**
```bash
# Use git aliases for common commands
git config alias.s status
git config alias.p push
git config alias.co checkout

# Example: git s instead of git status
```

### **Deployment Speed**
```bash
# Create deployment alias
alias deploy-aibg="ssh fije58kp0od7@aibridgegap.com 'cd vigilant-engine && git pull origin main && cp -r BUILD_INSTRUCTIONS_SHEMA/* /home/fije58kp0od7/public_html/'"

# Usage: deploy-aibg
```

### **File Transfer Optimization**
```bash
# For large file uploads, use rsync instead of cp
rsync -av BUILD_INSTRUCTIONS_SHEMA/ /home/fije58kp0od7/public_html/
```

---

## 🎯 **Success Metrics**

### **Development Efficiency**
- Time from code change to live deployment: < 5 minutes
- Zero downtime deployments: 100%
- Successful rollbacks when needed: < 2 minutes

### **Code Quality**
- All changes version controlled: 100%
- Pre-deployment testing: 100%
- Descriptive commit messages: 100%

### **Website Performance**
- Page load time: < 3 seconds
- Uptime: > 99.9%
- Mobile responsiveness: 100%

---

## 📞 **Support and Resources**

### **Technical Documentation**
- **WARP.md**: Project-specific development guidance
- **cPanel_Deployment_Instructions.md**: Detailed deployment steps
- **GitHub Repository**: https://github.com/AIBridgeGap/vigilant-engine

### **Quick Help**
- **cPanel Support**: Available 24/7 through GoDaddy
- **GitHub Docs**: https://docs.github.com
- **Git Reference**: https://git-scm.com/docs

### **Emergency Contacts**
- **Hosting Issues**: GoDaddy support
- **DNS Issues**: Domain registrar support
- **Code Issues**: Repository maintainer

---

**Document Version**: 1.0  
**Last Updated**: September 4, 2025  
**Next Review**: December 4, 2025  
**Maintained By**: AIBridgeGap Development Team
