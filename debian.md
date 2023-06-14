# some commands
These commands are pasted here, im just too lazy to type it all out, note that these guys are not in order.
```
sudo apt update
sudo apt -y upgrade
sudo apt install fail2ban

adduser prodrunner
usermod -aG prodrunner

(ssh setup)

su - <username>

mkdir .ssh
chmod 700 .ssh

cd .ssh
touch authorized_keys
chmod 600 authorized_keys

nvim /etc/ssh/sshd_config
Port 666 (something that reduces changes of attack)
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
ChallengeResponseAuthentication no




sudo systemctl reload sshd
sudo ufw status verbose (idt debian has ufw by default)
sudo ufw allow 666/tcp

sudo ufw allow https
sudo ufw enable
sudo ufw status verbose

sudo apt install -y nginix
sudo apt install certbot (i could be wrong about this, i remembered using snap for this idk why)

https://wiki.archlinux.org/title/Certbot#Installation
sudo ufw allow 'Nginx HTTPS'
sudo ufw delete allow https
sudo systemctl enable nginx
sudo systemctl start nginx

sudo apt install yarn nodejs npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

sudo npm i -g pm2
pm2 startup [systemd]

pm2 save
pm2 resurrect

[I have been asked about this, but basically i make a bash script that automatically starts the docker images and get them to start pm2 internally]









sudo nvim pendragonscode.xyz
server {
  listen 80;                                # IPv4 Port Number
  listen [::]:80;                           # IPv6 Port Number

  server_name example.com www.example.com;  # Domain name(s) to serve

  root /var/www/html;                       # Web document root directory. This is where static content is served.

  index index.htm index.html;               # Default document(s) to serve

  location / {                              # Path to document/response mapping
    try_files $uri $uri/ =404;              # Try requested URI an a file, 
                                            # then as a dir, else return 404
  }

  # custom error pages
  error_page 404 /404.html;
  location = /404.html {
    root /var/www/html;
    internal;
  }

  # custom error pages
  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
    root /var/www/html;
    internal;
  }

sudo ln -s /etc/nginx/sites-available/pendragonscode.xyz /etc/nginx/sites-enabled/pendragonscode.xyz
ngnix -t

sudo systemctl reload nginx
sudo nvim /etc/nginx/snippets/well-known-location.conf
sudo certbot register --email <your-email> --no-eff-email --agree-tos

I also have a bash script for this, so i will keep this minimal



https://gist.github.com/journeymanavi/dc7df599dd7618a12528c553ea47b1b1#set-up-server-security
awesome









```
