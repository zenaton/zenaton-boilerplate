#!/bin/sh

set -e

# Start zenaton agent
zenaton start
zenaton listen --env=.env --boot=boot.js

tail -f /dev/null