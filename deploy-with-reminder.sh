#!/bin/bash

# AIBridgeGap Website Deployment Script with cPanel Reminder
# Usage: ./deploy-with-reminder.sh "Your commit message"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 AIBridgeGap Website Deployment Starting...${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ Error: Not in website directory. Please run from the git repository root.${NC}"
    exit 1
fi

# Get commit message from argument or prompt
if [ -z "$1" ]; then
    echo -e "${YELLOW}📝 Enter commit message:${NC}"
    read -r COMMIT_MESSAGE
else
    COMMIT_MESSAGE="$1"
fi

# Show files that will be committed
echo -e "${BLUE}📋 Files to be committed:${NC}"
git status --porcelain

echo ""
echo -e "${BLUE}🔄 Step 1: Committing and pushing to GitHub...${NC}"

# Git operations
git add .
git commit -m "$COMMIT_MESSAGE"

if [ $? -eq 0 ]; then
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
        
        # Get list of changed files
        CHANGED_FILES=$(git diff-tree --no-commit-id --name-only -r HEAD | grep -E '\.(html|css|js|png|jpg|jpeg|gif)$')
        
        echo ""
        echo -e "${YELLOW}📁 Files that need to be uploaded to cPanel:${NC}"
        echo "$CHANGED_FILES"
        
        echo ""
        echo -e "${BLUE}🔄 Step 2: GitHub Pages will update automatically in 1-2 minutes${NC}"
        echo -e "${BLUE}   Check: https://aibridgegap.github.io/vigilant-engine/${NC}"
        
        echo ""
        echo -e "${RED}🚨 REMINDER: Upload the above files to cPanel!${NC}"
        echo -e "${YELLOW}   cPanel URL: https://p3plzcpnl509358.prod.phx3.secureserver.net:2083/cpsess4386043908/frontend/jupiter/filemanager/index.html${NC}"
        
        # macOS notification
        osascript -e "display notification \"Files pushed to GitHub! Now upload to cPanel.\" with title \"Website Deployment\" subtitle \"Don't forget cPanel upload!\" sound name \"Ping\""
        
        # Optional: Open cPanel automatically (uncomment if desired)
        # open "https://p3plzcpnl509358.prod.phx3.secureserver.net:2083/cpsess4386043908/frontend/jupiter/filemanager/index.html"
        
        echo ""
        echo -e "${GREEN}🎉 GitHub deployment complete! Don't forget cPanel upload.${NC}"
        
    else
        echo -e "${RED}❌ Failed to push to GitHub${NC}"
        exit 1
    fi
else
    echo -e "${RED}❌ Failed to commit changes${NC}"
    exit 1
fi