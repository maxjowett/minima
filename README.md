# minima

![Minima screenshot](/screenshots/demo.png?raw=true)

A minimal status bar for macOS, that __displays the _active and available_ workspaces.__ Minima aims to follow macOS style guidelines as much as possible.

## Getting started

Minima requires [Übersicht](https://github.com/felixhageloh/uebersicht). In order to to utilize minima's full capabilities, it is intended to integrate with [yabai](https://github.com/koekeishiya/yabai) and [skhd](https://github.com/koekeishiya/skhd), however using it without either works fine as well.

The following snippet assumes your Übersicht widgets folder is located in the default location:

```
git clone https://github.com/maxjowett/minima "$HOME/Library/Application Support/Übersicht/widgets/minima"
```

## FAQ

- **I've installed Übersicht and cloned minima into the widgets folder - errors are displayed on my desktop - what should I do?**
  - The most common solution here is to give the appropriate permissions to the two shell scripts that come bundled with minima.

```
cd $HOME/Library/Application Support/Übersicht/widgets/minima/scripts
chmod +x left.sh
chmod +x right.sh
```

- **When switching workspaces, minima updates the active workspace to slowly. Why?**
  - I would highly recommend you leverage the power of yabai signals, this will avoid us unnecessarily executing shell scripts on a set interval. Instead consider implementing the following in your `yabairc`:

```
yabai -m signal --add event=space_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"minima-left-jsx\"'"
```

:point_up_2: Taking this approach we can avoid redundant shell script executions in favor of only refreshing the workspaces portion of the status bar when needed.

- **How do I hide the default macOS status bar?**
  - `System Preferences > General > Automatically hide and show the menu bar`
## Feedback

:construction: Minima is very much a work in progress!

Don't hesitate to open an issue, however note that there are features I'm beginning to tackle that I'd like to implement soon, namely:

- [ ] Finer/more granular control of user specific preferences
  - [ ] Date and time formats
  - [ ] Toggle use of icons
- [ ] Integrate with other music applications
- [ ] Dual display support
