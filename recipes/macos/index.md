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

## Make hidden apps show up as transparent in the Dock

```sh
defaults write com.apple.Dock showhidden -bool TRUE && killall Dock
```

## Show hidden files and folders in Finder

```sh
defaults write com.apple.finder "AppleShowAllFiles" -bool "true" && killall Finder
```

## Allow TouchID to be used for 'sudo' requests

```sh
cd /etc/pam.d
sudo cp sudo_local.template sudo_local
sudo vim sudo_local

# uncomment this line in the file:
#   auth       sufficient     pam_tid.so
# then save the file
```
