#!/bin/bash

# GitHub Push Script
# This script helps you push your code to GitHub

echo "=========================================="
echo "GitHub Push Helper"
echo "=========================================="
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository"
    exit 1
fi

echo "Current remote:"
git remote -v
echo ""

echo "Choose an option:"
echo "1) Push to a NEW repository (create one on GitHub first)"
echo "2) Push to a FORKED repository"
echo "3) Show instructions only"
echo ""

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        read -p "Enter your GitHub username: " username
        read -p "Enter your new repository name: " reponame
        
        echo ""
        echo "Removing old remote..."
        git remote remove origin
        
        echo "Adding new remote..."
        git remote add origin "https://github.com/$username/$reponame.git"
        
        echo "Pushing to GitHub..."
        git push -u origin main
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ Successfully pushed to GitHub!"
            echo "🔗 View at: https://github.com/$username/$reponame"
        else
            echo ""
            echo "❌ Push failed. You may need to:"
            echo "1. Create the repository on GitHub first"
            echo "2. Use a Personal Access Token for authentication"
            echo "3. Set up SSH keys"
        fi
        ;;
        
    2)
        echo ""
        read -p "Enter your GitHub username: " username
        
        echo ""
        echo "Updating remote URL..."
        git remote set-url origin "https://github.com/$username/codehunt.git"
        
        echo "Pushing to GitHub..."
        git push -u origin main
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ Successfully pushed to your fork!"
            echo "🔗 View at: https://github.com/$username/codehunt"
        else
            echo ""
            echo "❌ Push failed. Make sure you've forked the repository first."
        fi
        ;;
        
    3)
        echo ""
        echo "📖 Instructions:"
        echo ""
        echo "Option 1: Push to Your Own New Repository"
        echo "1. Go to https://github.com/new"
        echo "2. Create a new repository (don't initialize with README)"
        echo "3. Run these commands:"
        echo ""
        echo "   git remote remove origin"
        echo "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
        echo "   git push -u origin main"
        echo ""
        echo "Option 2: Fork and Push"
        echo "1. Go to https://github.com/siddhant385/codehunt"
        echo "2. Click 'Fork' button"
        echo "3. Run these commands:"
        echo ""
        echo "   git remote set-url origin https://github.com/YOUR_USERNAME/codehunt.git"
        echo "   git push -u origin main"
        echo ""
        echo "For more details, see GITHUB_PUSH_INSTRUCTIONS.md"
        ;;
        
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac
