# Bash program that updates the URLs in the app folder based on the currently
# selected stack's output

#!/bin/bash

FRONTEND_URL=$(pulumi stack output bucketEndpoint)
BACKEND_URL=$(pulumi stack output appEngineEndpoint)
SERVER_SED="s@(FRONTEND_URL = )\".*\"@\1\"${FRONTEND_URL}\"@"
APP_SED="s@(BACKEND_URL = )\".*\"@\1\"${BACKEND_URL}\"@"

sed -ri'.bak' "${SERVER_SED}" app/backend/server.js
rm app/backend/server.js.bak
sed -ri'.bak' "${APP_SED}" app/frontend/app.js
rm app/frontend/app.js.bak