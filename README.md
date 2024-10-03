# soft-artel-tt
### Note while this project can be run with node, using bun is recommended as that will work out of the box

## Verdict:
None yet...

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
bun run app.ts
```
### Node:
```bash
node --experimental-strip-types app.ts
```