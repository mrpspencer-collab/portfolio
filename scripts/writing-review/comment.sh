#!/usr/bin/env bash
# Usage: comment.sh <pr-number> <marker> <body-file>
# Creates or updates the one PR comment that carries <marker>, so each check
# keeps its own comment instead of editing another check's.
set -euo pipefail
pr="$1"; marker="<!-- $2 -->"; file="$3"
body="$(printf '%s\n%s\n' "$marker" "$(cat "$file")")"
id="$(gh api "repos/$GITHUB_REPOSITORY/issues/$pr/comments" --paginate \
  --jq ".[] | select(.body | startswith(\"$marker\")) | .id" | tail -1)"
if [ -n "$id" ]; then
  gh api -X PATCH "repos/$GITHUB_REPOSITORY/issues/comments/$id" -f body="$body" >/dev/null
else
  gh api "repos/$GITHUB_REPOSITORY/issues/$pr/comments" -f body="$body" >/dev/null
fi
