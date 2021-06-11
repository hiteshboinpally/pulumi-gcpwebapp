# Build and install the provider
make install_provider

# Regenerate SDKs
make generate

# Ensure the pulumi-provider-xyz script is on PATH
export PATH=$PATH:$PWD/bin

# Test Node.js SDK
make install_nodejs_sdk
cd examples/simple-node
yarn install
yarn link @pulumi/gcpwebapp
pulumi up
