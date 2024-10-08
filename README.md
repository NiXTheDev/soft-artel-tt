# soft-artel-tt
### Note: while this project can be run with node, using bun is recommended as that will work out of the box

## Verdict:
None yet...

## Test task description
### Task 1
https://docs.google.com/document/d/1faxxLHsQImAc9jz1nTTaabk6YGq2Dw7q9YqUPKZgyUA/edit?usp=sharing
* Note: i had asked if it was okay to change nestjs to express in the stack, the hiring manager said "yes, it's allowed":

![Screenshot](/assets/screenshot.png)
### Task 2
https://docs.google.com/document/d/1QO_gg5CjKdJH2-bP0uQxhcj0zTG3er-aWzDaw2niXdA/edit?usp=sharing

## Installing Bun:
### Windows:
```bash
powershell -c "irm bun.sh/install.ps1|iex"
```
Or, if node is already installed:
```bash
npm install -g bun
```
### Linux:
```bash
curl -fsSL https://bun.sh/install | bash
```
Or, if node is already installed:
```bash
npm install -g bun
```

## Installing Node:
### Windows:
```bash
# installs fnm (Fast Node Manager)
winget install Schniz.fnm
# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression
# download and install Node.js
fnm use --install-if-missing 22
# verifies the right Node.js version is in the environment
node -v # should print `v22.9.0`
# verifies the right npm version is in the environment
npm -v # should print `10.8.3`
```
Or download the installer/prebuilt binaries from [Here(Installer)](https://nodejs.org/en/download/prebuilt-installer) or [Here(Binaries)](https://nodejs.org/en/download/prebuilt-binaries)

### Linux:
```bash
# installs fnm (Fast Node Manager)
curl -fsSL https://fnm.vercel.app/install | bash
# activate fnm
source ~/.bashrc
# download and install Node.js
fnm use --install-if-missing 22
# verifies the right Node.js version is in the environment
node -v # should print `v22.9.0`
# verifies the right npm version is in the environment
npm -v # should print `10.8.3`
```
Or download prebuilt binaries from [Here](https://nodejs.org/en/download/prebuilt-binaries)

## To install dependencies:
### Bun:
```bash
bun install
```
### Node:
```bash
npm install
```

## To run:
### Bun:
```bash
bun run app-task1.ts
```
### Node:
```bash
node --experimental-strip-types app-task1.ts
```

* Note: app-task2_p*.ts doesn't require any external libraries to be run, and already include example usages inside

By default, the app starts listening on port 3000, however it also reads the .env file and if that .env file has `PORT` property defined, it will use whatever port is in there, instead of the default
The port that the app uses is also logged in the console as a link of a `http://localhost:{port}` kind

Example:
```bash
$ bun run app.ts #No .env file exists
> App listening at http://localhost:3000

$ bun run app.ts #This time .env has "PORT = 8080" in it
> App listening at http://localhost:8080
```