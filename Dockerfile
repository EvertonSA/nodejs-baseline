# ---- Base Node ----
FROM alpine:3.10 AS base
# install node for node
RUN apk add --no-cache nodejs-current tini yarn
# set working directory
WORKDIR /opt/app
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package.json .

# ---- Dependencies ----
FROM base AS dependencies
# install node packages
#RUN npm set progress=false && npm config set depth 0
RUN yarn install --only=production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN yarn install

# ---- Test ----
# run lint and tests
FROM dependencies AS test
COPY . .
RUN  yarn lint && yarn test

# ---- Run App ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /opt/app/prod_node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD
CMD ["node", "."]