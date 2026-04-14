---
title: Building something with everything I know
published: 2026-02-10
description: A full fledged biometric attendance system for Raspberry Pi
tags: [Linux, Android, Kotlin, KMP, Raspberry Pi, IoT, Python]
category: Projects
image: https://raw.githubusercontent.com/shub39/RpiAttendance/master/screenshots/pic.jpg
draft: false
---

::github{repo="shub39/RpiAttendance"}

So I really overdid a college project. I built something that I can proudly show off as proof of my skills.

This was a college project I was handed down from my seniors who did no work on it (and still included it in their resume). I was tasked to make an
attendance system that used fingerprint data via an R307 fingerprint scanner connected to a Raspberry Pi. I was very interested in learning about 
linux and the things possible with it so I took this up eagerly. The only thing I knew about raspberry pi at that time was that *it is a small computer
that runs linux.*

I explored all the possibilities of this device. I was given a **Raspberry Pi 4 Model B with 8GB RAM and an 128GB SD Card.** I knew some python basics and
since python is the only best supported language for raspberry pi at that time, I decided to use it to make a minimal functional prototype of the project.
Very rough scripting and some poor architectural decisions (storing data in csv files 😖) were made but it was a demoable prototype. 

With that I was encouraged to present this on some college and inter college events and won some awards for it. People seemed really impressed with it
but having built this myself, I knew what it really was. *A hacked together collection of scripts that will break down in any real-world scenario*. I have
archived the scripts [here](https://github.com/shub39/biometric-attendance).

I was suggested by faculties to add a face recognition system as well with the fingerprint scanner. Being very dissatisfied with my current work I 
decided to rewrite the entire project from scratch. 

At first I decided to rewrite this in python but as I grew more familiar with python I started to hate it more and more. The dependency hellscape and no
Types caused annoying runtime crashes. The libraries I was using to Interface with the sensors were all python too. Deep down they were all wrappers
around C/C++ libraries and setting them up was a nightmare. The IDEs that can be used on raspberry pi are also very limited. Coming from VSCode and 
Pycharm, using thonny and geanny on the Pi was like torture. No automatic indentation and the `Inconsistent Tabs and Spaces` error became a trigger
word for me causing an instant crashout followed by depression.

Fortunately, besides this project I was also learning Kotlin and Jetpack Compose. The robust type system and syntax with a powerful yet heavy IDE made
me fall in love with Kotlin. As soon as I discovered Kotlin Multiplatform, I knew I had to use it for this project. Kotlin Multiplatform has an llvm backed 
compiler that generates native code, eliminating the need for a JVM. This made it perfect to compile a binary to run it on the raspberry pi. 

There was one problem that I overlooked. The sensor libraries were written in python and there were no KMP bindings I can use. I could have used the 
underlying C/C++ libraries directly but that would have been a lot of work (maybe I should do it someday). I decided to neatly wrap up all the Python 
code in a FastAPI server and communicate with it using HTTP requests. I painstakingly tested the API against every possible scenario and made sure to 
account for all edge cases that can arise in a production environment. The best thing about this approach is that it decouples sensor logic from the main 
app, making it easier to test, maintain and scale. 

The wonderful thing about a type system like kotlin and Rust is that you can write code in such a way that accounts for every possible type of error.
Ofcourse doing this is a significant time investment but the peace of mind it provides is absolutely worth it.

After taking care of the sensors I tackled the main server. Decided to use a Kotlin Native server running Ktor and setup a database using **ROOM**. Yes
The Android team has been hard at work porting all the androidx libraries to KMP and as a result you can use ROOM in Kotlin Native!! My first reaction 
to this information was pure ecstasy.

:::note[What's ROOM?]
ROOM is an Android database library that provides an abstraction layer over SQLite, making it easier to work with databases in Android apps.
:::

Setup a neat Ktor server with ROOM support to house the main application logic. Its job is to maintain the database and manage the sensors. I also 
discovered an RPC protocol that can be used with Ktor. With Krpc I decided to make a Compose Multiplatform client to interact with the server as an admin
The whole integration was super seamless and I was able to get the app up and running in no time.

The only problem that I faced with Kotlin Native was cross compiling the native binary for Arm64 from my x86_64 machine. I figured out a solution by
setting up a CI job that builds the binary in a preconfigured environment with the necessary toolchain and creates a github release.

To house all of the components together, I created a rought 3D design on Tinkercad with space to fix the Raspberry Pi and the sensors in a Box. The 
design looks... unfortunate but then, I am just starting to learn 3D modeling. Printed the model using my college's 3D printer after months on grueling
paperwork.

Now that this is complete, the only thing left is to deploy this in my college. Which is easier said than done because of college politics and unnecessary
bureaucracy. Suddenly a lot of people will be upset with me as soon as this is deployed. I want to avoid that. As good as I am with computers, I am 
equally as bad at dealing with people. Testing this in a production environment with real users is still a thing left to do. Also the face recognition
does not have liveliness detection yet which is a huge flaw that I am willingly ignoring for now. I'll add that soon.

This project taught me what building a real-world application looks like. The challenges of building something that integrates a lot of systems and works
across different platforms are immense. This was wayy more rewarding and fun than a simple ToDo app clone. In this age of cheap, mass produced software, 
the winning edge is building quality software. 

I have also made a youtube video demonstrating this project. Thanks for reading!

<iframe
  width="100%"
  height="468"
  src="https://www.youtube.com/embed/sc254TMSav4"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

