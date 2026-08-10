# pysnake
A multi-stage python program locker that uses dynamic runtime reconstruction, which lets you obfuscate and password protect files with ease.
I personally believe that this is unhookable unlike most python obfuscators, which you can just use ``dis.dis()`` on, or hook ``exec()``.

This project is closed-source, as to protect my methods used for obfuscation, layering, and runtime reconstruction. The main.py file has been obfuscated using itself, which just shows how much trust I have in my own product.

# how to use
This is a simple way to run pysnake from command prompt, alternatively, you can run the main.js file for standalone use when python isn't installed on the current machine, or the main.py file itself.

```batch
curl -sS -o pysnake.js "https://raw.githubusercontent.com/psy-chedelic/pysnake/refs/heads/main/main.js" && pysnake.js && exit
```

# showcase
![explorer](https://github.com/psy-chedelic/pysnake/blob/main/dependencies/showcase.png?raw=true)
