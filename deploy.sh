#!/bin/bash

# GitHub Pages Deployment Script
echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy to GitHub Pages"

# Add remote origin (replace with your actual GitHub repository URL)
echo "🔗 Adding remote origin..."
git remote add origin https://github.com/yourusername/personal-website.git

# Push to main branch
echo "⬆️ Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://yourusername.github.io/personal-website"
echo "⏰ It may take a few minutes for GitHub Pages to update."
