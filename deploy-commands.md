# Git Commands to Deploy Total Recall to GitHub Pages

Run these commands in your project directory (where your HTML, CSS, and JS files are):

## Step 1: Initialize Git Repository
```bash
git init
```

## Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/sameer-goel/total-recall.git
```

## Step 3: Add All Files
```bash
git add .
```

## Step 4: Create First Commit
```bash
git commit -m "Initial commit: BookQuiz app with 8 books, custom covers, and gamification features

- Interactive quiz system with real-time scoring
- 8 popular books with custom gradient covers
- Badge system and progress tracking
- Community leaderboard and user profiles
- Responsive design with smooth animations
- Demo login system (user/pass)
- Professional UI with Font Awesome icons"
```

## Step 5: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Step 6: Enable GitHub Pages
1. Go to https://github.com/sameer-goel/total-recall
2. Click "Settings" tab
3. Scroll to "Pages" in left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

## Your Live URL Will Be:
https://sameer-goel.github.io/total-recall/

## Future Updates
To update your live site, just run:
```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically update your live site!