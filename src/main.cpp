#include <Arduino.h>
#include <ESP32Servo.h>

int threshold = 40;
bool touch1detected = false;
bool touch2detected = false;
uint8_t touch1Val = 0;
uint8_t touch2Val = 0;

void gotTouch1(){
 touch1detected = true;
 touch1Val = touchRead(T2);
}

void gotTouch2(){
 touch2detected = true;
 touch2Val = touchRead(T9);
}

Servo myservo; // create servo object to control a servo 
int posVal = 0; // variable to store the servo position 
int servoPin = 15; // Servo motor pin

void setup() {
  myservo.setPeriodHertz(50); // standard 50 hz servo
  myservo.attach(servoPin, 500, 2500); // attaches the servo on servoPin to the servo object
  Serial.begin(115200);
  delay(1000); // give me time to bring up serial monitor
  Serial.println("ESP32 Touch Interrupt Test");
  touchAttachInterrupt(T2, gotTouch1, threshold);
  touchAttachInterrupt(T9, gotTouch2, threshold);
}

void loop() {
  if(touch1detected || touch2detected){
      //if touch sensor, then open close twice 
      //could do animation on website that fly goes into mouth 
      for (posVal = 130; posVal >= 60; posVal -= 1) { // goes from 180 degrees to 0 degrees
        myservo.write(posVal); // tell servo to go to position in variable 'pos'
        delay(15);                   // waits 15ms for the servo to reach the position
      }
      for (posVal = 60; posVal <= 130; posVal += 1) { // goes from 0 degrees to 180 degrees // in steps of 1 degree
        myservo.write(posVal); // tell servo to go to position in variable 'pos' 
        delay(15); // waits 15ms for the servo to reach the position
      }
      touch1detected = false;
      touch2detected = false;
  }

}