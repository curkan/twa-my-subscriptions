FROM node:20-alpine as build-stage

RUN npm install -g pnpm
WORKDIR /app
RUN corepack enable && \
    corepack prepare pnpm@9.5.0 --activate

COPY package.json pnpm-lock.yaml ./
# RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
#     pnpm install --frozen-lockfile

#COPY . .
# RUN pnpm build

EXPOSE 4000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=4000
RUN pnpm install
# CMD [ "pnpm", "dev" ]
