# check-files.ps1
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Prospira-Edu File Checker" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$rootDir = Split-Path -Parent $PSScriptRoot
Write-Host "Project Root: $rootDir" -ForegroundColor Yellow
Write-Host ""

# Define expected files
$rootFiles = @(
    "index.html",
    "package.json",
    "vite.config.ts",
    "tsconfig.json",
    "postcss.config.js"
)

$srcFiles = @{
    "App.tsx" = "React root component"
    "main.tsx" = "React entry point"
    "index.css" = "Global styles with Tailwind"
    "vite-env.d.ts" = "TypeScript environment types"
}

$subDirs = @{
    "src/constants" = @{
        "theme.ts" = "Theme constants"
        "index.ts" = "Constants exports"
    }
    "src/data" = @{
        "index.ts" = "Data exports"
        "pathways.ts" = "Pathways data"
        "values.ts" = "Values data"
        "testimonials.ts" = "Testimonials data"
        "quiz.ts" = "Quiz questions"
        "workshops.ts" = "Workshops data"
        "blog.ts" = "Blog posts"
        "parents.ts" = "Parents data"
    }
    "src/hooks" = @{
        "index.ts" = "Hooks exports"
        "useScroll.ts" = "Scroll hook"
        "useMediaQuery.ts" = "Media query hook"
    }
    "src/utils" = @{
        "helpers.ts" = "Helper functions"
        "index.ts" = "Utils exports"
    }
    "src/components/common" = @{
        "index.ts" = "Common exports"
        "Stars.tsx" = "Stars component"
        "Badge.tsx" = "Badge component"
        "SectionLabel.tsx" = "SectionLabel component"
        "Button.tsx" = "Button component"
        "Card.tsx" = "Card component"
        "Input.tsx" = "Input component"
    }
    "src/components/layout" = @{
        "index.ts" = "Layout exports"
        "Navbar.tsx" = "Navigation bar"
        "Footer.tsx" = "Footer component"
        "FloatingChat.tsx" = "Floating chat widget"
    }
    "src/components/home" = @{
        "index.ts" = "Home exports"
        "Hero.tsx" = "Hero section"
        "PathwaysSection.tsx" = "Pathways section"
        "ValuesSection.tsx" = "Values section"
        "TestimonialsSection.tsx" = "Testimonials section"
        "FinalCTA.tsx" = "Final CTA section"
    }
    "src/pages" = @{
        "index.ts" = "Pages exports"
        "HomePage.tsx" = "Home page"
        "ServicesPage.tsx" = "Services page"
        "PortalPage.tsx" = "Portal page"
        "ParentsPage.tsx" = "Parents page"
        "BlogPage.tsx" = "Blog page"
    }
}

$totalFiles = 0
$existingFiles = 0
$missingFiles = @()
$emptyFiles = @()

# Function to check if file has content
function Test-FileContent {
    param($filePath)
    try {
        $content = Get-Content $filePath -Raw -ErrorAction Stop
        return $content.Trim().Length -gt 0
    } catch {
        return $false
    }
}

# Check root files
Write-Host "Root Directory Files:" -ForegroundColor Yellow
foreach ($file in $rootFiles) {
    $filePath = Join-Path $rootDir $file
    $totalFiles++
    if (Test-Path $filePath) {
        $existingFiles++
        $lines = (Get-Content $filePath).Count
        Write-Host "  [OK] $file ($lines lines)" -ForegroundColor Green
    } else {
        $missingFiles += $file
        Write-Host "  [MISSING] $file" -ForegroundColor Red
    }
}
Write-Host ""

# Check src files
Write-Host "src/ Directory Files:" -ForegroundColor Yellow
$srcDir = Join-Path $rootDir "src"
if (Test-Path $srcDir) {
    foreach ($key in $srcFiles.Keys) {
        $filePath = Join-Path $srcDir $key
        $totalFiles++
        if (Test-Path $filePath) {
            $existingFiles++
            $lines = (Get-Content $filePath).Count
            $hasContent = Test-FileContent $filePath
            if (-not $hasContent) {
                $emptyFiles += "src/$key"
            }
            Write-Host "  [OK] $key ($lines lines) - $($srcFiles[$key])" -ForegroundColor Green
        } else {
            $missingFiles += "src/$key"
            Write-Host "  [MISSING] $key - $($srcFiles[$key])" -ForegroundColor Red
        }
    }
} else {
    Write-Host "  [ERROR] src directory not found!" -ForegroundColor Red
    $missingFiles += "src directory"
}
Write-Host ""

# Check subdirectories
foreach ($subDir in $subDirs.Keys) {
    $dirPath = Join-Path $rootDir $subDir
    $files = $subDirs[$subDir]
    
    Write-Host "$subDir/ Directory Files:" -ForegroundColor Yellow
    
    if (Test-Path $dirPath) {
        foreach ($key in $files.Keys) {
            $filePath = Join-Path $dirPath $key
            $totalFiles++
            if (Test-Path $filePath) {
                $existingFiles++
                $lines = (Get-Content $filePath).Count
                $hasContent = Test-FileContent $filePath
                if (-not $hasContent) {
                    $emptyFiles += "$subDir/$key"
                }
                Write-Host "  [OK] $key ($lines lines) - $($files[$key])" -ForegroundColor Green
            } else {
                $missingFiles += "$subDir/$key"
                Write-Host "  [MISSING] $key - $($files[$key])" -ForegroundColor Red
            }
        }
    } else {
        Write-Host "  [ERROR] Directory not found!" -ForegroundColor Red
        foreach ($key in $files.Keys) {
            $missingFiles += "$subDir/$key"
            Write-Host "  [MISSING] $key - $($files[$key])" -ForegroundColor Red
        }
    }
    Write-Host ""
}

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Total files checked: $totalFiles"
Write-Host "Existing files: $existingFiles" -ForegroundColor Green
Write-Host "Missing files: $($missingFiles.Count)" -ForegroundColor Red
if ($emptyFiles.Count -gt 0) {
    Write-Host "Empty files: $($emptyFiles.Count)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Empty Files:" -ForegroundColor Yellow
    foreach ($file in $emptyFiles) {
        Write-Host "  - $file" -ForegroundColor Yellow
    }
}

if ($missingFiles.Count -gt 0) {
    Write-Host ""
    Write-Host "Missing Files:" -ForegroundColor Red
    foreach ($file in $missingFiles) {
        Write-Host "  - $file" -ForegroundColor Red
    }
}

$completion = [math]::Round(($existingFiles / $totalFiles) * 100)
Write-Host ""
Write-Host "Project Completion: $completion%" -ForegroundColor Cyan

if ($completion -eq 100) {
    Write-Host ""
    Write-Host "All files are present! Your project structure is complete." -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Some files are missing. Please create the missing files." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Check Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan