---
id: overview
title: Overview
---

> This project is still in early development and not yet stable - this documentation is subject to change

NFive is a managed .NET plugin platform for [FiveM](https://fivem.net/).

It allows server administrators to easy install and update plugins, as well as providing a modular, agnostic, stable  platform to develop plugins and add in-game functionality.

## Motivation

NFive was developed out of the need for an open source C# framework for FiveM. A few options exist for Lua, but for those wishing to develop C# resources that take advantage of higher level language features there were no maintained solutions.

Inspired by other programming languages and environments, NFive tries to take advantage of modern programming conventions such as version control, dependency injection, continuous integration, plugin managers, semantic versioning, nested dependencies and modular interfaces.

## Concepts

NFive was developed with the aim of simplifying complex server management and providing users with a modern development experience.

FiveM its self provides the bare minimum in terms of managed .NET functionality, so this project aims to be an opinionated, conversion over configuration, modular environment.

Creating a single FiveM resource is simple, but creating complex ones able to share state and functionality quickly becomes cumbersome. As users demand more and more detailed servers and mod systems become larger there is a need for easier and more unified management, and more plugin interoperability.

## Functionality

NFive provides no in-game functionality on its own and is purely a management system and plugin development API. This allows NFive to remain agnostic and usable with any type of FiveM mod or game mode, with functionality added via [NFive plugins](https://hub.nfive.io/).
