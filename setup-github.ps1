# GitHub Pages Setup Script
# Replace 'YOUR_USERNAME' with your actual GitHub username

Write-Host "🚀 Setting up GitHub Pages deployment..." -ForegroundColor Green

# Get GitHub username
$username = Read-Host "Enter your GitHub username"

if (-not $username) {
    Write-Host "❌ Username is required!" -ForegroundColor Red
    exit 1
}

# Set up remote repository
$remoteUrl = "https://github.com/$username/pranab-portfolio.git"
Write-Host "📡 Adding remote repository: $remoteUrl" -ForegroundColor Yellow

git remote add origin $remoteUrl

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "🌐 Your portfolio will be available at: https://$username.github.io/pranab-portfolio/" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/$username/pranab-portfolio/settings/pages" -ForegroundColor White
Write-Host "2. Select 'Deploy from a branch'" -ForegroundColor White
Write-Host "3. Choose 'gh-pages' branch" -ForegroundColor White
Write-Host "4. Save the settings" -ForegroundColor White
Write-Host ""
Write-Host "🔧 To deploy manually, run: npm run deploy" -ForegroundColor Cyan 