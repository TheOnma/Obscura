#!/bin/bash
set -euo pipefail

echo "Airdropping SOL..."
solana airdrop 2 || true

echo "Building..."
anchor build

echo "Deploying to Devnet..."
anchor deploy --provider.cluster devnet

echo "Program ID:"
anchor keys list | grep obscura_analytics || true
