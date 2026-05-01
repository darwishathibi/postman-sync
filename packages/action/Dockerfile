# postman-sync-action — Phase 5 wires this to the published CLI.
# Phase 1 placeholder: ensures the file shape is in place.
FROM node:20-alpine

# Phase 5 will replace this line with: RUN npm i -g @postman-sync/cli@<pinned>
RUN echo "Phase 1 placeholder — CLI install stubbed until Phase 5"

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]