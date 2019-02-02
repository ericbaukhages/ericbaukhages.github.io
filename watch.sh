#!/bin/bash

find . -name "*.scss" | entr ./build.sh
