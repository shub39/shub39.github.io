---
title: Rush Crossed 1k Stars on GitHub
published: 2026-10-10
description: A risky app that I pushed through anyways — and what changed since
tags: [ Android, Jetpack Compose, Kotlin, Rush ]
category: Projects
image: https://raw.githubusercontent.com/shub39/Rush/refs/heads/master/fastlane/metadata/android/en-US/images/featureGraphic.png
draft: false
---

::github{repo="shub39/Rush"}

> [!NOTE]
> A few months ago, Rush crossed 1,000 stars on GitHub. I'm really happy about it — and since then, I've made a lot of changes.

<iframe
width="100%"
height="468"
src="https://www.youtube.com/embed/sHxqxL8mrKo&t=18s"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>

---

## What's new since the last update

:::tip
I learned a lot about building apps and tried to apply those lessons to Rush. As you can see, I changed a lot of UI components to better accommodate Material 3 Expressive guidelines.
:::

Some of those components were a bit outdated, so this was a much-needed refresh.

The desktop version of Rush now runs on hot reload, and it adapts much better to expanded screens. The settings open in a separate pane on the same screen, and when you resize to a more mobile form factor, it resizes automatically. This is the beauty of Navigation 3 — adaptive, dynamic navigation.

When you navigate to "look and feel," it opens on its own pane. You can customize your lyrics view, open it as a sidebar, and see all customization effects in real time. On small screens, it opens with a preview you can use to view your changes. When sharing, it opens in a view with all customized options.

## Architecture

After all those changes, this is the current architecture:

- **Android app module** — builds the Android app
- **Desktop app module** — builds the desktop app
- **Shared core module** — core data classes, interfaces, and logic that stays the same across platforms
- **Shared logic** — implementations needed on all platforms
- **Shared UI** — Compose Multiplatform for shared UI across Android and desktop
- **Android libs** — Android-specific libraries for romanization and the audio visualizer (not available in JVM)

:::important
This structure is so good that adding a feature is easy: make a module out of it and replace the previous one. It also made exploring Swift UI easier — since the logic is shared, I can clone Rush in Swift UI and just focus on the UI layer.
:::

Of course, the iOS app module is still there, but it won't work fully because iOS doesn't expose APIs to know which music you're currently listening to. So I can only share the logic.

## Lyrics APIs — a cat and mouse game

:::warning
The lyrics APIs have been a constant challenge.
:::

LRC lib is good but doesn't provide metadata like album art or artist info. Genius has accurate lyrics and rich metadata, but doesn't provide lyrics through a simple API. I was scraping from Genius, but they switched to Cloudflare and changed their HTML structure, so my parsers kept failing.

Then I found a self-hosted front-end for Genius. It worked for a while, but then bot detection kicked in. Right now, I'm using a private token from the creator of Fast Lyrics — it works for Play Store, but Genius lyrics aren't working for GitHub releases and F-Droid. Genius actually sells API tokens, and I emailed them, but no response after two weeks.

## Telemetry and user behavior

:::caution
I added telemetry to the Play Store versions — I know it's hypocritical, but telemetry has been so useful for growth.
:::

It's been eye-opening: the features I spent the most time tweaking are barely used. 99.9% of users just open the app to view lyrics. They don't even go as far as the lyrics backgrounds.

So in recent updates, I've been focusing on making that core flow much easier and more seamless — making sure there are no bugs on that cool feature flow.

## Two years in

It's been 2 years since I started building this. I got to know so many cool people through Rush — developers, contributors, translators. This app opened up a lot of opportunities, and I'm just so grateful that I started building it. I'm thankful to my past self that I didn't just sit around doing nothing about my issues, but actually wanted to build something cool.

Thanks a lot to all the contributors, translators, libraries, and inspirations. If you have an idea, just start building — it's even easier with AI. You never know what can happen when you finish things that you start.
