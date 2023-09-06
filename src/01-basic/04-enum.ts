// ---------- Enums

// Default values
enum ActivityType {
    Standing,       // = 0
    Walking,        // = 1
    Running         // = 2
}

const activity = ActivityType.Walking;
console.log(activity);                  // 1

const activityReverse = ActivityType[1];
console.log(activityReverse);           // "Walking"

// Custom values in enums
enum SocialMedia {
    Meta  = 'META',
    Inst = 'INSTAGRAM',
    Tg = 'TELEGRAM'
}
const social = SocialMedia.Tg;
console.log(social);                    // "TELEGRAM"