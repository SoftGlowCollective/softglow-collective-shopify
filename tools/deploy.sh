#!/usr/bin/env bash
# Simple deploy wrapper for Shopify CLI
# Usage: SHOPIFY_STORE=your-store.myshopify.com ./tools/deploy.sh

set -e

if [ -z "$SHOPIFY_STORE" ]; then
  echo "Please set SHOPIFY_STORE environment variable (e.g. export SHOPIFY_STORE=your-store.myshopify.com)"
  exit 1
fi

echo "Logging into $SHOPIFY_STORE..."
shopify login --store "$SHOPIFY_STORE"

echo "Pushing theme..."
shopify theme push --unpublished --store "$SHOPIFY_STORE"

echo "Done."
