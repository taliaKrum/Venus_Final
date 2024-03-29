# Venus_Final

Creative Embedded Systems Module 5 - Final Project - Website: https://taliakrum.github.io/Venus_Final/

Project Specs: The final project is a chance for you to synthesize the topics we have covered so far in class (and the topics we will soon cover).

Project Hardware:
* ESP32 TTGO T-display 
* Power source (laptop)
* Micro Servo (x2) 
* Breadboard 
* Nylon conductive tape 
* Flower pot 

My Project: 

High Level Description - 
* I wanted to build a venus fly trap sculpture that would imitate the movements and behavior of the actual plant. Similarly to a real venus fly trap, if a user touches the inside of the "mouth", the plant will close. I also created a website that mirrors the sculpture- whenever the physical plant closes, an animation is triggered on the website.

Hardware Setup - 
* I used a laser cutter to cut out the venus fly trap shapes and lid of the flower pot
  * <img width="1081" alt="Screen Shot 2022-05-07 at 7 03 19 PM" src="https://user-images.githubusercontent.com/69936719/167274731-89110923-b9cb-4201-9a49-24c9d7c9877b.png">
  * <img width="296" alt="Screen Shot 2022-05-07 at 7 03 40 PM" src="https://user-images.githubusercontent.com/69936719/167274734-b489a57a-46e8-40e6-bc9b-0522c09d3085.png">
  * <img width="590" alt="Screen Shot 2022-05-07 at 7 03 59 PM" src="https://user-images.githubusercontent.com/69936719/167274735-5b231f4a-6f0b-49ac-bcf2-2113573d1026.png">
* I 3D printed structures for the stepper motors to get the correct motion 
  * https://learn.adafruit.com/animatronic-cosplay-wings/3d-printing
  * ![IMG_4356](https://user-images.githubusercontent.com/69936719/167274907-17af2178-13de-4dd9-8428-4e0062d13b12.jpeg)
  * ![IMG_4352](https://user-images.githubusercontent.com/69936719/167274913-35b7245d-0f04-4327-a354-7f9bf2ad53c6.jpeg)
* After all the pieces were ready, I placed the ESP32 and breadboard inside the flower pot, strung the wires through the holes in the top and used hot glue to assemble the plant.
  * ![IMG_4449](https://user-images.githubusercontent.com/69936719/167274991-7c29c151-30f5-4b79-80ea-b13b4611c6d4.jpeg)
  * ![IMG_4453](https://user-images.githubusercontent.com/69936719/167275046-541cde08-68a3-4bea-b843-4a22f78ea601.jpeg)

Software Setup-
* I worked with PlatformIO to write the programs for this assignment
* The files for the website (server.py, static folder, templates folder) as well as the program for the ESP32 (main.cpp) can be found in the src folder in this repository
* The servo motors were connected to the same pin so they could work simultaneously
* the conductive tape/wires are connected to touch sensor pins 
* Make sure to build main.cpp and upload it to an ESP32 and start up the website with python3 server.py
* Website:
<img width="1298" alt="Screen Shot 2022-05-07 at 7 29 22 PM" src="https://user-images.githubusercontent.com/69936719/167275231-a0ace6ac-5e4f-46e1-a2df-bc0fbec91634.png">

