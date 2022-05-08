
# Venus Fly Trap
Creative Embedded Systems Final Project 

# The Assignment
The goal is to synthesize different topics that we have covered in class throughout the semester and produce a final project.

# My Project
For this assignment, I took inspiration from venus fly traps. I wanted to create an interactive and kinetic sculpture that acted as the plant would if something touched one of its sensors. In other words, I wanted to extend the touch GPIOs so that if a user touched the sculpture, the "mouth" would open and close. Before starting this project I knew I wanted to learn from the way that I worked on past modules, and take a different approach. I felt like I always dove into the code first and was rushing to finish the physical structure, which usually left the final product sloppier than I expected. Therefore, this time I took more time to make prototypes, research different ways to imitate the venus fly trap's movement, and finally, use the laser cutter and 3D printers available in the design center. I used the laser cutter to cut the lid of the enclosure with openings for the touch GPIO and servo motor wires. I also cut the venus fly trap lobes. After looking at many videos and options for altering servo motor motion (i.e. eye-lid motion, linear actuators, jaw motion etc), I found files that could mimick wing flapping, which I could easily use for the opening and closing of my plant sculpture - <a href="url">https://learn.adafruit.com/animatronic-cosplay-wings/3d-printing</a>. I had some difficulty connecting the plant lobes to the motors/motor enclosures because the acrylic ended up being a bit heavy. In the end it worked out but if I had more time I would probably use a lighter material or laser cut a smaller shape. Additionally, initially I wanted to use the SPIFFS file system to serve the html, css and js files for the website and have the sculpture communicate over WiFi instead of a serial connection, however the URL wouldn't load. I settled for a serial connection, but if I had more time I would continue trying to work with a server. Finally, I used a flower pot for my enclosure because at the end of the day, I wanted this sculpture to look like a plant :).

### Initial Research:
* <a href="url">https://www.youtube.com/watch?v=Ftt9e8xnKE4</a>
* <a href="url">https://www.youtube.com/watch?v=mEAz-72ZjKE</a>
* <a href="url">https://learn.adafruit.com/animatronic-cosplay-wings/3d-printing</a>
* ![a_gate](https://user-images.githubusercontent.com/69936719/167279435-e4fb43fb-ba30-4f86-ad9f-920b8b1914c4.gif)
* ![2-engineersbui](https://user-images.githubusercontent.com/69936719/167279439-8ec8dfd9-8580-40d3-bb36-e9a18489cdb2.jpg)
* ![big_clapper 0](https://user-images.githubusercontent.com/69936719/167279492-4df82b6b-4b9d-4944-b104-fc9b5103d2bd.gif)
* ![origami-chomper](https://user-images.githubusercontent.com/69936719/167279501-208e08ff-6815-4c2f-9f49-c1190799d0db.jpeg)


# Hardware Setup 

Materials/Tools:
* ESP32 TTGO T-display
* Power source (laptop)
* Micro Servo (x2)
* Breadboard
* Nylon conductive tape
* Flower pot
* Laser Cutter
* 3D printer
* Hot glue gun 

### Servo Motors-
I used the following guidelines to connect the servo motors:
<img width="856" alt="Screen Shot 2022-05-07 at 10 49 00 PM" src="https://user-images.githubusercontent.com/69936719/167279591-03d23bba-1d40-4ff4-ac1b-f0441681e820.png">
* Both motors connected to the same GPIO pin so that they could function simultaneously

### Touch Sensors-
I followed this diagram to connect the touch sensors:
![154387126-6b4ac5a3-808d-4d0d-9656-89a11664acdc](https://user-images.githubusercontent.com/69936719/167279637-099d319f-8b7e-4609-be9d-653e2516d622.jpeg)
* For this project I used TOUCH2 and TOUCH9 (seen above) 
* The wires then led to nylon conductive tape that was taped to the inside of the plant lobes (similar to where the sensors are located on a venus fly trap)

### 3D Printing-
Instructions for 3D printing and assembling the servo motor attachments are found here: https://learn.adafruit.com/animatronic-cosplay-wings/3d-printing 

### Laser Cutting-
I created my own illustrator files for laser cutting the venus fly trap shapes that I wanted and the flower pot lid.
* <img width="400" alt="Screen Shot 2022-05-07 at 7 03 59 PM" src="https://user-images.githubusercontent.com/69936719/167279872-f3d201ec-f552-46d9-9c26-3c5ae85c1391.png"> <img width="296" alt="Screen Shot 2022-05-07 at 7 03 40 PM" src="https://user-images.githubusercontent.com/69936719/167279874-b0631e2b-9a43-4218-ad68-3d171acb28ae.png">
* <img width="590" alt="Screen Shot 2022-05-07 at 7 03 19 PM" src="https://user-images.githubusercontent.com/69936719/167279882-4361ed6a-9631-4581-be4b-ec04ab4e646e.png">


# Software Setup 

General Overview:
* Languages used: Javascript, CSS, HTML, Python, C++
* All files found in the src folder 
* Website consists of the server.py file and everything in the static and templates directories 
* The program for the ESP32 is main.cpp

### PlatformIO -
* I used PlatformIO for this assignment in order to keep my files in the same place and to be able to work with version control and branches
* I worked on Visual Studio Code

### Flask - 
* I created a website using Flask 
* In order to start up the website, type python3 server.py into terminal 
* I wanted to create a website that was very pleasing to the eye and could be an art piece. I also wanted the animations to be smoother and more satisfying than the ones I had in for the interactive devices project. I designed frames for the plant on Figma and used the setInterval() function to create a frame by frame animation. Whenever a user interacts with the sculpture the website responds as well. 
* <img width="1298" alt="167275231-a0ace6ac-5e4f-46e1-a2df-bc0fbec91634" src="https://user-images.githubusercontent.com/69936719/167280281-4d0e79b3-87f5-487a-99d1-8110d9a8e81f.png">
* <img width="300" src="https://user-images.githubusercontent.com/69936719/167280294-a73afd20-625f-46ec-ba3c-5ddfe712c299.png">


### Connecting Everything - 
* Connect your ESP32 to your computer (power source and serial connection) 
* Start up the website and click anywhere - a popup should appear, click the port for you ESP32

# Videos and Images

# Youtube Video!
