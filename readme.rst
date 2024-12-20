##############################
  Check Changelog hook
##############################

Pre-commit hook that checks if the changlog was edited

*****************
 Getting Started
*****************

...code: yaml
  repos:
  - repo: local
    hooks:
      - id: check-changelog
        name: Check if CHANGELOG.rst is updated
        entry: check-changelog
        language: system
        files: ^CHANGELOG\.rst$

...code: yaml
  repos:
  - repo: https://github.com/malteheringOrgatex/check-changelog
    hooks:
      - id: check-changelog
        name: Check if CHANGELOG.rst is updated
        entry: check-changelog
        language: node
        files: ^CHANGELOG\.rst$
