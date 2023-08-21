# Next.js Shopify Integration

This project demonstrates how to integrate a Shopify store into a Next.js application using the Shopify Storefront API.

## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

- Node.js installed
- Shopify store with API credentials (see [Shopify Setup](https://shopify.dev/docs/api/storefront/2023-07/))

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/nextjs-shopify-integration.git

2. Navigate to the project directory:

   ```bash
   cd nextjs-shopify-integration

3. Install dependencies:

   ```bash
   npm install
4. Create an .env.local file in the root directory and add the following environment variables

   ```bash
     SHOPIFY_STORE_DOMAIN=YOUR_SHOPFY_STORE_DOMAIN
     SHOPIFY_STOREFRONT_ACCESS_TOKEN=YOUR_STORE_STOREFRONT_ACCESS_TOKEN

### Shopify Setup

1. Create a Shopify store if you don't have one: Shopify Website

2. Create a Shopify app in your store admin (Apps and sales channels > Develop apps > Create app) and obtain the Storefront API access token.

3. Replace the placeholders in your .env.local file with your Shopify store details.

### Usage

Start the Next.js development server:

```bash
   npm run dev
