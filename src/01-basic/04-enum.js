// ---------- Enums
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["Standing"] = 0] = "Standing";
    ActivityType[ActivityType["Walking"] = 1] = "Walking";
    ActivityType[ActivityType["Running"] = 2] = "Running"; // = 2
})(ActivityType || (ActivityType = {}));
var activity = ActivityType.Walking;
console.log(activity); // 1
var activityReverse = ActivityType[1];
console.log(activityReverse); // "Walking"
// Custom values in enums
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["Meta"] = "META";
    SocialMedia["Inst"] = "INSTAGRAM";
    SocialMedia["Tg"] = "TELEGRAM";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.Tg;
console.log(social); // "TELEGRAM"
