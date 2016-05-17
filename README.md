# prereqs: 
VS2015 Update 2, chutzpah test adapter installed.

# Repro steps: 

1. Pull code
2. Npm install in directory with package.json
3. Open the solution with visual studio
4. Open the test explorer window
5. Run "gulp build" from the directory with package.json
6. Check the test explorer window, see if anything interesting is happening
7. Run "gulp build" a couple more times for posterity.

You should start seeing failures or longer runs of clean for "gulp build" at this point. Additionally, if you run "handle" on the dist folder, you'll see significant file handles taken out on folders.
