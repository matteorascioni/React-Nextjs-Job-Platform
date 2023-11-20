# Usa un'immagine Node.js come base
FROM node:18-alpine

# Imposta il working directory all'interno del container
WORKDIR /usr/src/app/

# Copia il package.json e il file yarn.lock nella directory del container
COPY package.json yarn.lock /usr/src/app/

# Installa le dipendenze del progetto utilizzando Yarn
RUN yarn install

# Copia il resto del codice nell'immagine del container
COPY . /usr/src/app/ 

# Esponi la porta su cui Next.js sta in ascolto (assicurati che il Next.js utilizzi questa porta)
EXPOSE 3000

# Avvia l'applicazione Next.js in modalità sviluppo
CMD ["yarn", "dev"]
