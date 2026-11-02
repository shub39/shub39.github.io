---
title: Android Dev Summit 2026
published: 2026-11-01
description: Making a note of all the new and exciting things 
tags: [ Android, Jetpack Compose, Kotlin ]
category: Summary
image: cover.png
draft: false
---

# [The Keynote](https://youtu.be/8Lmv7LGgL4E) 

- Android CLI is great for cheaper models
- Android Prototype lets you run apps quickly in a separate lightweight process
- New Studio feature to migrate XML to Compose
- New set of libraries to manage app state. Making it easier for agents
- A2UI lets agents create their own UI
- New Android MCP
- GoogleBooks
- First Android XR Device. XReal Aura with a live demo of the product.

# [The latest in Android dev tools](https://youtu.be/w-auFZP5gJo)

![New Devtools](new_devtools.png)

- A lot of new android CLI features
- Rent remote devices for testing from cli 😢
- Run apps directly on Linux using prototype 🤯
- Agents tab in studio caught up with the rest of the world

# [Integrate your app with Android Intelligence](https://youtu.be/UsqDEfyOH2E)

### Android MCP 
**Sample App** - [Jetpacker](https://goo.gle/jetpacker)

![Android MCP](android_mcp.png)

- Allows Gemini to execute tasks in your apps. Like app intents in iOS
- Expose app data as context to Gemini
- New skill available with `android skills add appfunctions`
- Shipping this requires registering your MCP in Play Console??
- This is an early access feature, you need to apply for access through the QR code at the end of 
the video

### Connected Talks
- Unlock Agentic capabilities with MLKit Gen AI
- Extend your app to Gemini and Search with the Connected Apps Platform

# [Inside Gemini Nano and Gemma 4](https://youtu.be/ekS4_gV6Ojc)

### What the new Gemma models are capable of On Device

![](gemma4_capabilities.png)

- Offline models only available on some devices. On others, it uses a cloud fallback
- Every Model has its own architecture optimized for its use case
- **Per Layer Embeddings(PLE)** way to optimize model memory requirement. Storing in Flash not RAM
- **Multi Token Prediction(MTP)** Uses a draft model to speed up inference upto 3x and 50% wait time
reduction. It speculates the output of the main model and shares the KV cache with it. Fascinating 
concepts, I will suggest you to look these up
- Exposed in Android through **AI Core**
- Cool demo of the offline capabilities in the video at [24:10](https://youtu.be/ekS4_gV6Ojc?list=PLQZJH-fZcZcc&t=1450)

![](gemini_nano.png)

