# Gargoyle Router utils

A little experiment with a Gargoyle router that I run at home and Protractor to learn for browser-based UI automation. Because this is just automating UI interactions with a Web application, if/when the app changes (ie. UI texts, internal HTML), automation could break, very easily.

https://www.gargoyle-router.com (my setup: 1.12.0 on TL-WR1043N)

## How to Build
This is a Node application, thus you need `node` and `npm`. In my Docker env, I have `node v10.19.0` and `npm 6.13.4`.

## How to Run Command
You will need;
- `$GARGOYLE_PASSWORD` to log in to your Gargoyle router

Once you have that in place, you can do;
```
$ npm run isolate
```
...to isolate WiFi clients, equivalent to you going to Gargoyle console > Connection > Basic > "Access Point SSID" section, and selecting "Enabled" in client isolation.
```
$ npm run mingle
```
...to allow WiFi clients to access each other, equivalent to you going to Gargoyle console > Connection > Basic > "Access Point SSID" section, and selecting "Disabled" in client isolation.
```
$ npm run kick-usb
```
...to re-Save USB storage settings (which sometimes seems to help mount/ftp access), equivalent to you going to System > USB Storage, and clicking "Save Changes" button.