# Nuxt.js API Rate Limiter with Unkey

This Nuxt.js application implements a robust rate-limiting solution for API routes using the [Unkey Rate Limit API](https://www.unkey.com/docs/ratelimiting/introduction). By leveraging Unkey's powerful rate-limiting capabilities, this app ensures efficient control over API requests, preventing abuse and ensuring fair usage among clients. With minimal configuration, you can safeguard your API endpoints while maintaining optimal performance.

## Features and Benefits

1. **Seamless Integration**: Easily implement rate limiting in Nuxt.js with minimal setup.
2. **Dynamic Controls**: Configure limits based on user roles or API keys for tailored access.
3. **Enhanced Security**: Protect your APIs from abuse and ensure optimal performance.

## Use Cases

1. **E-commerce**: Prevent excessive requests during peak sales events.
2. **Public APIs**: Safeguard against abuse by limiting user requests.
3. **Internal Tools**: Manage resource consumption for internal applications effectively.

## Quickstart Guide

### Create a Unkey Root Key

1. Navigate to [Unkey Root Keys](https://app.unkey.com/settings/root-key) and click **"Create New Root Key"**.
2. Name your root key.
3. Select the following workspace permissions:
   - `create_key`
   - `read_key`
   - `encrypt_key`
   - `decrypt_key`
4. Click **"Create"** and save your root key securely.

### Create a Unkey ratelimit namespace

1. Go to [Unkey Ratelimits](https://app.unkey.com/ratelimits) and click **"Create New Namespace"**.
2. Enter a name for the namespace.
3. Click **"Create"**.

### Run the example locally

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:unrenamed/unkey-nuxt-ratelimit
   cd unkey-nuxt-ratelimit
   ```

2. Create a `.env` file in the root directory and populate it with the following environment variables:

   ```env
   UNKEY_ROOT_KEY=your-unkey-root-key
   UNKEY_NAMESPACE=your-unkey-namespace
   ```

   Ensure you replace `your-unkey-*` with your actual Unkey credentials.

3. Start the server:

   ```bash
   pnpm dev
   ```

   The server will start and listen on the `3000` port.

4. To test the API route, use the command:

   ```bash
   curl http://localhost:3000/api/hello-world -H "x-forwarded-for: <any IP address>"
   ```

   and repeatedly execute it to trigger a 429 Too Many Requests response when the rate limit is exceeded.
