
# Production

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configure](#configure)

## Installation  

Download and import the Nodesource GPG key
```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

```
Create deb repository
```bash
NODE_MAJOR=18
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

```bash
sudo apt-get update
sudo apt-get install nodejs -y
```



## Usage
backend url is src/services/conf.jsx

clone project from git repository

```bash
sudo apt update
sudo apt install nginx curl
cd /var/www/
git clone https://github.com/tursunov4/new.git
```
install node modules

```bash
npm install
```

build project

```bash
npm run build
```



## Configure

nginx configure

create configuration for front
```bash
cd /etc/nginx/sites-available/
nano front
```

paste this configuration to /etc/nginx/sites-available/front

```bash
server {
        
        server_name your_domain www.your_domain;

        location / {
                root /var/www/new/build;
                index index.html index.htm index.nginx-debian.html;
                try_files $uri $uri/ =404;
        }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/front /etc/nginx/sites-enabled/
```


restart nginx

```bash
systemctl restart nginx
```
