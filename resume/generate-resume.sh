#!/bin/bash
# Simple wrapper for resume generator

cd "$(dirname "$0")"
python3 scripts/generate.py
