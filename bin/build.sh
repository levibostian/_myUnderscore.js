#!/bin/bash

npm run clean && npx tsc -b . && find dist -type f -name '*.test.*' -delete && cp package*.json dist/ && cp ../../LICENSE dist/ && cp ../../README.md dist/