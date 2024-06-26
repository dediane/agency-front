FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]


# FROM node:alpine AS deps

# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm ci



# FROM node:alpine AS builder

# WORKDIR /app
# COPY . .
# COPY --from=deps /app/node-modules ./node_modules
# RUN npm run build && npm install --production --ignore-scripts --prefer-offline



# FROM node:alpine AS runner

# WORKDIR /app
# ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -i 1001

# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# USER nextjs

# EXPOSE 3000

# ENV NEXT_TELEMETRY_DISABLED 1

# CMD ["npm", "run", "start"]

