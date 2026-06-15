# Repo System

## Recommended Topology

Use a layered system:

- `SPHERE-FRONTIER` (hub front door; legacy URL `K-Mentorship-Hub/K-Mentorship-Hub` redirects here) -> public home and docs
- `SPHERE-DIRECTION-TEST-DRIVE` -> 7-day direction test drive
- `SPHERE-I-SCIENCE` -> science-first work
- `SPHERE-II-ENTREPRENEURSHIP` -> venture and market-first work
- `SPHERE-III-TECHNOLOGY` -> tooling and system-first work

## What Goes In The Home Repo

- README
- public guidebook
- sphere explanation
- Discord blueprint
- contribution bridge
- metadata rules

## What Goes In Sphere Repos

- actual studies
- public cases
- technical tooling
- dashboards
- reusable templates
- contribution issues

## Do Not Encode Every Hybrid In Folder Names

Avoid:

- `S1-E1-T1`
- `S2-E3`
- `E2-T1-S1`

Use metadata instead.

## Required Metadata

- `primary_sphere`
- `secondary_spheres`
- `combo`
- `artifact_type`
- `delivery_layers`
- `validation_stage`
- `home_track`

## Example Decisions

### Scientific study with a demo app

- `primary_sphere: S`
- `secondary_spheres: [T]`
- `combo: S+T`
- `artifact_type: hypothesis`
- `delivery_layers: [GitHub, HuggingFace]`

### Technical startup or platform

- `primary_sphere: E`
- `secondary_spheres: [T]`
- `combo: E+T`
- `artifact_type: venture_case`
- `delivery_layers: [GitHub, Discord, GoogleSite]`

### Research dashboard

- `primary_sphere: T`
- `secondary_spheres: [S, E]`
- `combo: S+E+T`
- `artifact_type: dashboard`
- `delivery_layers: [GitHub, HuggingFace]`

## About MVPs

`MVP` does not belong only to `E`.

Use this rule:

- if the core question is venture, validation, positioning, or market -> `E`
- if the core artifact is a reusable system, engine, software platform, or hardware implementation -> often `T` with `E+T`
- if the product emerges from a science-facing question -> often `S+E` or `S+E+T`

An MVP is a delivery stage, not a sphere by itself.
