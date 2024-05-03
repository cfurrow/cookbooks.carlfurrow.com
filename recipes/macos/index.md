---
logo: apple
---
# macOS


## Show app-switcher on all monitors

```sh
defaults write com.apple.Dock appswitcher-all-displays -bool true; killall Dock

# To go back to the default way, and undo the above changes:
# defaults delete com.apple.Dock appswitcher-all-displays; killall Dock
```
