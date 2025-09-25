# cPanel Deployment Instructions for AIBridgeGap Website

## 🎯 **Objective**
Connect cPanel hosting to GitHub repository `AIBridgeGap/vigilant-engine` for automated deployment of the AIBridgeGap website.

## 📊 **Current Status**
- ✅ GitHub Repository: `git@github.com:AIBridgeGap/vigilant-engine.git`
- ✅ Mac SSH Key: Configured and working
- ✅ Website files: Successfully pushed to GitHub
- ⏳ cPanel Integration: Needs setup

## 🔑 **SSH Key Architecture**
- **Mac SSH Key**: For development and pushing changes from your development machine
- **cPanel SSH Key**: For server-side deployment and pulling updates automatically
- **Both Required**: Different purposes, both essential for complete workflow

## 📋 **Step-by-Step cPanel Setup**

### **Step 1: Retrieve cPanel Public SSH Key**

1. **Access cPanel Terminal** or SSH into your server:
   ```bash
   ssh fije58kp0od7@aibridgegap.com
   ```

2. **Get your public key**:
   ```bash
   cat ~/.ssh/id_rsa.pub
   ```

3. **Copy the entire output** - it should look like:
   ```
   ssh-rsa AAAAB3NzaC1yc2EAAA... [long string] ...== user@hostname
   ```

### **Step 2: Add cPanel SSH Key as GitHub Deploy Key**

1. **Navigate to Deploy Keys**:
   - Go to: `https://github.com/AIBridgeGap/vigilant-engine/settings/keys`
   - Click **"Add deploy key"**

2. **Configure Deploy Key**:
   - **Title**: `cPanel Deploy Key - aibridgegap.com`
   - **Key**: Paste the public key from Step 1
   - **✅ Check "Allow write access"** (Important for pushing!)
   - Click **"Add key"**

### **Step 3: Test SSH Connection from cPanel**

```bash
# In cPanel Terminal, test GitHub connection:
ssh -T git@github.com

# Expected output:
# Hi AIBridgeGap! You've successfully authenticated, but GitHub does not provide shell access.
```

⚠️ **If this fails**: The SSH key isn't properly configured in GitHub or there's a connection issue.

### **Step 4: cPanel Git Configuration**

#### **Option A: Using cPanel Git™ Version Control Interface**

1. **Navigate to**: cPanel → Git™ Version Control
2. **Create Repository**:
   - **Clone URL**: `git@github.com:AIBridgeGap/vigilant-engine.git`
   - **Repository Path**: `/home/fije58kp0od7/public_html` (or staging directory)
   - **Repository Name**: `vigilant-engine`
   - **Branch**: `main`

#### **Option B: Manual Git Clone (Recommended for Control)**

```bash
# SSH into your cPanel server
ssh fije58kp0od7@aibridgegap.com

# Navigate to your home directory
cd /home/fije58kp0od7

# Clone the repository
git clone git@github.com:AIBridgeGap/vigilant-engine.git

# Navigate into the cloned repository
cd vigilant-engine

# Verify the repository is properly connected
git remote -v
git status
```

### **Step 5: Website File Deployment**

Since your website files are in the `BUILD_INSTRUCTIONS_SHEMA` directory, you have several deployment options:

#### **Option 1: Direct Copy Deployment**
```bash
# Copy website files to public_html
cp -r /home/fije58kp0od7/vigilant-engine/BUILD_INSTRUCTIONS_SHEMA/* /home/fije58kp0od7/public_html/

# Verify files are copied
ls -la /home/fije58kp0od7/public_html/
```

#### **Option 2: Symbolic Link Deployment**
```bash
# Create symbolic links (keeps git connection)
cd /home/fije58kp0od7/public_html

# Backup existing files if any
mkdir -p ../backup_$(date +%Y%m%d)
mv * ../backup_$(date +%Y%m%d)/ 2>/dev/null || true

# Link website files
ln -s /home/fije58kp0od7/vigilant-engine/BUILD_INSTRUCTIONS_SHEMA/* .
```

#### **Option 3: Staging Directory Setup**
```bash
# Create a staging area
mkdir -p /home/fije58kp0od7/staging

# Clone to staging
git clone git@github.com:AIBridgeGap/vigilant-engine.git /home/fije58kp0od7/staging/website

# Create deployment script
cat > /home/fije58kp0od7/deploy.sh <<'EOF'
#!/bin/bash
cd /home/fije58kp0od7/staging/website
git pull origin main
cp -r BUILD_INSTRUCTIONS_SHEMA/* /home/fije58kp0od7/public_html/
echo "Deployment completed: $(date)"
EOF

chmod +x /home/fije58kp0od7/deploy.sh
```

### **Step 6: Test the Deployment Pipeline**

#### **6.1: Test Pull from GitHub**
```bash
# In your repository directory on cPanel
cd /home/fije58kp0od7/vigilant-engine
git pull origin main

# Should show: "Already up to date" or pull new changes
```

#### **6.2: Test Push to GitHub (Optional but Recommended)**
```bash
# Create a test file to verify write access
cd /home/fije58kp0od7/vigilant-engine
echo "# cPanel Deployment Test - $(date)" > cPanel_deployment_test.md
git add cPanel_deployment_test.md
git commit -m "test: verify cPanel can push to GitHub"
git push origin main
```

#### **6.3: Test End-to-End Workflow**
1. **From your Mac**: Make a change and push
   ```bash
   # On your Mac in the Website_build directory
   echo "# Test from Mac - $(date)" > mac_test.md
   git add mac_test.md
   git commit -m "test: verify Mac to GitHub to cPanel workflow"
   git push origin main
   ```

2. **From cPanel**: Pull the changes
   ```bash
   # On cPanel server
   cd /home/fije58kp0od7/vigilant-engine
   git pull origin main
   
   # Deploy to website (if using manual deployment)
   cp -r BUILD_INSTRUCTIONS_SHEMA/* /home/fije58kp0od7/public_html/
   ```

## 🔧 **Configuration Details**

### **Important Paths**
- **cPanel Username**: `fije58kp0od7`
- **Domain**: `aibridgegap.com`
- **Repository URL**: `git@github.com:AIBridgeGap/vigilant-engine.git`
- **Server Home**: `/home/fije58kp0od7/`
- **Website Root**: `/home/fije58kp0od7/public_html/`
- **Website Files Source**: `BUILD_INSTRUCTIONS_SHEMA/` directory in repo

### **SSH Key Locations**
- **cPanel Private Key**: `/home/fije58kp0od7/.ssh/id_rsa`
- **cPanel Public Key**: `/home/fije58kp0od7/.ssh/id_rsa.pub`

## 🚨 **Troubleshooting**

### **SSH Authentication Failed**
```bash
# Debug SSH connection
ssh -vT git@github.com

# Check SSH key permissions
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 700 ~/.ssh/
```

### **Repository Not Found**
- Verify the repository URL: `git@github.com:AIBridgeGap/vigilant-engine.git`
- Ensure deploy key is added to the correct repository
- Check that deploy key has appropriate permissions

### **Permission Denied (publickey)**
- Deploy key not properly added to GitHub
- SSH key not loaded in cPanel
- Wrong repository or organization

### **Git Commands Fail**
```bash
# Set git user (if needed)
git config user.name "cPanel Deploy"
git config user.email "deploy@aibridgegap.com"

# Check repository status
git remote -v
git status
git log --oneline -5
```

## 🔄 **Automated Deployment Options**

### **Option 1: Cron Job for Auto-Pull**
```bash
# Add to crontab for automatic updates every 15 minutes
# crontab -e
*/15 * * * * cd /home/fije58kp0od7/vigilant-engine && git pull origin main && cp -r BUILD_INSTRUCTIONS_SHEMA/* /home/fije58kp0od7/public_html/
```

### **Option 2: GitHub Webhooks** (Advanced)
- Set up webhook in GitHub repository settings
- Point to a PHP script on your server that pulls changes
- More immediate deployment but requires additional setup

## 📝 **Security Considerations**

### **Deploy Key Benefits**
- Repository-scoped (only affects this repo)
- Can be easily revoked if compromised
- Separate from personal GitHub accounts

### **Write Access Justification**
- **Enabled**: Allows cPanel to push deployment confirmations, logs, or emergency fixes
- **Use Cases**: Automated backups, deployment logs, hotfixes
- **Alternative**: Use read-only if you only need one-way deployment

### **File Permissions**
```bash
# Ensure proper permissions for web files
find /home/fije58kp0od7/public_html -type f -exec chmod 644 {} \;
find /home/fije58kp0od7/public_html -type d -exec chmod 755 {} \;
```

## ✅ **Verification Checklist**

- [ ] cPanel SSH key generated and accessible
- [ ] Deploy key added to GitHub with write access
- [ ] SSH connection to GitHub successful from cPanel
- [ ] Repository cloned to cPanel server
- [ ] Website files deployed to public_html
- [ ] Pull from GitHub works
- [ ] Push to GitHub works (if write access enabled)
- [ ] End-to-end workflow tested (Mac → GitHub → cPanel)
- [ ] Website accessible at aibridgegap.com

## 🎉 **Success Indicators**

When everything is working correctly:

1. **SSH Test**: `ssh -T git@github.com` returns authentication success
2. **Git Operations**: `git pull` and `git push` work without password prompts
3. **Website Live**: Changes pushed from Mac appear on aibridgegap.com after cPanel pull
4. **Deployment Logs**: Clean output with no authentication errors

## 📞 **Next Steps After Setup**

1. **Establish deployment routine**: Decide on manual vs automated deployments
2. **Set up monitoring**: Track deployment success/failures
3. **Backup strategy**: Regular backups of both code and live site
4. **Documentation**: Update team on deployment procedures

---

**Created**: September 4, 2025  
**Repository**: AIBridgeGap/vigilant-engine  
**Author**: AIBridgeGap Development Team
