// Q1.Find the Smaller Angle
// PrepBuddy has an analog clock which consists of two hands 
// one for hour and another for minute. She wants to calculate 
// the shorter angle formed between hour and minute hand at any given time.
// Note: You have to complete Minimal_Angle function. No need to take any input.
var Minimal_Angle = (h, m) => 
{
    const minuteAngle = m * 6;
    const hourAngle = (h * 30) + (m * 0.5);
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);   
};