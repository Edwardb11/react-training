#Node 
FROM node:lts-alpine as build-stage

#Crear carpeta
RUN mkdir app

#Crear contenedor de trabajo o directorio principal
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install 

# Primer punto copio todo y con el segundo lo llevo a mi directorio de trabajo
COPY . .

RUN npm build 


FROM nginix:1.21.6-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginix/html
EXPOSE 80

CMD [ "nginix","-g", "daemon off;" ]