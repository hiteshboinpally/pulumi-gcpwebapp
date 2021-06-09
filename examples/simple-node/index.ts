import * as pulumi from "@pulumi/pulumi";
import * as gcpwebapp from "@pulumi/gcpwebapp";
import * as random from "@pulumi/random"

const config = new pulumi.Config();
const project = config.require("project");
const regionId = config.require("regionId");
const currUser = config.require("gcpUserEmail");

const name = "simple-node-web-app";

// const randomString = new random.RandomString(name, {
//     upper: false,
//     number: false,
//     special: false,
//     length: 8,
// });

const webapp = new gcpwebapp.AppEngineWebApp(name, {
    frontendDirectory: "./app/frontend",
    backendDirectory: "./app/backend",
    websiteIndexPage: "index.html",
    websiteErrorPage: "error.html",
    project: project,
    regionId: regionId,
    bucketAdminMembers: [pulumi.interpolate`user:${currUser}`],
    appEngineRuntime: "nodejs14",
    appEngineEntrypoint: { shell: "node ./server.js" },
});

// Export the bucket frontend url
export const bucketEndpoint = webapp.websiteUrl;
// Export the server/api url
export const appEngineEndpoint = webapp.serverUrl;
