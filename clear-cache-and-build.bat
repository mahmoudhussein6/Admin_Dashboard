@echo off
echo ========================================
echo Angular Cache Clear and Rebuild Script
echo ========================================
echo.

echo Step 1: Clearing Angular build cache...
if exist .angular (
    rmdir /S /Q .angular
    echo   ✓ Cleared .angular directory
) else (
    echo   ℹ .angular directory not found
)

echo.
echo Step 2: Clearing node_modules cache...
if exist node_modules\.cache (
    rmdir /S /Q node_modules\.cache
    echo   ✓ Cleared node_modules\.cache directory
) else (
    echo   ℹ node_modules\.cache directory not found
)

echo.
echo Step 3: Clearing dist directory...
if exist dist (
    rmdir /S /Q dist
    echo   ✓ Cleared dist directory
) else (
    echo   ℹ dist directory not found
)

echo.
echo Step 4: Installing/verifying dependencies...
echo   This may take a few minutes...
call npm install @angular/platform-browser-dynamic @ngrx/store-devtools --save

echo.
echo Step 5: Building the project...
echo   This will take a few minutes...
call ng build --configuration production

echo.
echo ========================================
echo Build complete!
echo ========================================
echo.
echo If the build was successful, you can now run:
echo   ng serve
echo.
echo Then open http://localhost:4200 in your browser
echo.
pause
