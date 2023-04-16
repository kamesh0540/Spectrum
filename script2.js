var withdrawnTscoreP =0;
var anxiousTscoreP =0;
var somaticTscoreP =0;
var socialTscoreP=0;
var thoughtTscoreP=0;
var attentionTscoreP =0;
var ruleBreakingTscoreP =0;
var aggresiveTscoreP=0;
var internalizingTscoreP =0;
var externalizingTscoreP=0;
var totalTscoreP = 0;

let withdrawnMeanP = 1.97, withdrawnSDP = 2.51;
let anxiousMeanP = 3.33, anxiousSDP = 2.92;
let somaticMeanP = 1.22, somaticSDP = 1.78;
let socialMeanP = 2.97, socialSDP = 2.55;
let thoughtMeanP = 1.36, thoughtSDP = 1.51;
let attentionMeanP = 4.82, attentionSDP = 3.69;
let ruleBreakingMeanP = 2.19, ruleBreakingSDP = 2.39;
let aggressiveMeanP = 8.27, aggresiveSDP = 6.08;
let internalizingMeanP = 6.53, internalizingSDP = 5.92;
let extenernalizingMeanP = 10.46, extenernalizingSDP = 7.8;
let totalMeanP = 32.97, totalSDP = 22.48;


const quizData = [
  {
    question: "Does Your Child act to young For his / her age ?",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Drinks Alchohol without parents approval ?",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
   },
  {
    question: "Argues a Lot ?",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Fails to finish the they have started ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "There is very little they enjoy ?",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Bowel movements outside toilet.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Bragging,Boasting",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Can't concentrate ,can't pay attention for long.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Can't get mind off certain thoughts(obsession) : ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Can't sit still, restless or hyperactive.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Clings to adults or too dependent.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Complains of loneliness.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Confused or seems to be in a fog.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Cries a lot.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Cruel to animals.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Cruelty, meanness , or bullying to others.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Daydreams or gets lost in thoughts.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Deliberately harms self or attempts suicide.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Demands a lot of attention.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Destroys own things.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Destroys things belonging to family and others.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Disobedient at home.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Disobedient at school.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Doesn't eat well.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Doesn't get along with other kids.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Doesn't seem to feel guilty after misbehaving.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Easily jealous",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Breaks rules at home school or elsewhere.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question:
      "Fears certain animals ,situations or places other than school : ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Fears going to school.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Fears they might think or do something bad.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Feels they have to be perfect.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Feels or complains that no one loves them. ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Feels others are out to get them",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Feels wortheless or inferior.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Gets hurt a lot, accident prone.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Gets in many fights.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Gets teased a lot.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Hangs around with those who get into trouble.",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Hears sounds or voices that aren't around : ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Impulsive or acts without thinking : ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Would rather be alone than with others",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Lying or cheating ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Bites fingernails",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Nervous, highstrung, or tense ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Nervous Movements or twitching ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "NightMares",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Not Liked by other kids",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Constipated, doesnt move Bowels",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Too fearful or anxious",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Feels dizzy or lightheaded",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Feels too guilty ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Overeating ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Overtired  without good reason ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Overweight ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Physically attacks people",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Picks nose, skin, or other parts of body :",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Plays with own sex parts in public",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Plays with own sex parts too much",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Poor school work",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Poorly coordinated or clumsy",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Prefers being with older kids",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Prefers being with younger kids ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Refuses to talk",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Repeats certain acts over and over, compulsions:",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Runs away from home",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Screams a lot",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Secretive, keep things to self ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Sees things that aren’t there:",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Self-conscious or easily embarrassed",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Sets fires",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Sexual problems:  ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Showing off or clowning ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Too shy or timid",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Sleeps less than most kids ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Sleeps more than most kids during day and/or night: ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Inattentive or easily distracted ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Speech problem:  ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Stares blankly",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Steals at home ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Steals outside the home ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Stores up too many things they don’t need:",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Strange behavior: ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Strange ideas:  ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Stubborn, sullen, or irritable ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Sudden changes in mood or feelings ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Sulks a lot ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Suspicious ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Swearing or obscene language ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Talks about killing self ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Talks or walks in sleep:  ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Talks too much ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Teases a lot",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Temper tantrums or hot temper",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Thinks about sex too much",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Threatens people ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Thumb-sucking ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Smokes, chews, sniffs tobacco or uses e-cigs ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Trouble sleeping (describe):   ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Truancy, skips school   ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Underactive, slow moving, or lacks energy   ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Unhappy, sad, or depressed   ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Unusually loud   ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question:
      "Uses drugs for nonmedical purposes (don’tinclude alcohol or tobacco):",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Vandalism",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Wets self during the day",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Wets the bed",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Whining",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Wishes to be of a different gender",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question: "Withdrawn, doesn’t get involved with others",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Worries",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },

  {
    question:
      "Please write in any problems your child has that were not listed above : ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Aches or pains (not stomach or headaches)",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Headaches ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Nausea, feels sick ",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Problems with eyes",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Rashes or other skin problems",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Vomiting, throwing up",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Stomachaches",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Others (Any other aches or physical problems)",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  }
];

let withdrawnCountParent = 0;
let somaticCountParent = 0;
let anxiousCountParent = 0;
let socialCountParent = 0;
let thoughtCountParent = 0;
let attentionCountParent = 0;
let ruleBreakingCountParent = 0;
let aggresiveCountParent = 0;
let internalizingCountParent = 0;
let externalizingCountParent = 0;
let totalScoreParent = 0;

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_tex = document.getElementById("a_text");
const b_tex = document.getElementById("b_text");
const c_tex = document.getElementById("c_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;
let index = 1;
function loadQuiz() {
  deselectAnsweres();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = `${index}.  ${currentQuizData.question}`;
  a_tex.innerText = currentQuizData.a;
  b_tex.innerText = currentQuizData.b;
  c_tex.innerText = currentQuizData.c;
  index++;
}

loadQuiz();

function deselectAnsweres() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
}

function getselected() {
  let selectedAnswerEls = document.querySelectorAll(".answer");
  let answer = null;
  selectedAnswerEls.forEach((selectedAnswerEl) => {
    if (selectedAnswerEl.checked) {
      answer = selectedAnswerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getselected();

  if (
    currentQuiz === 4 ||
    currentQuiz === 41 ||
    currentQuiz === 63 ||
    currentQuiz === 67 ||
    currentQuiz === 73 ||
    currentQuiz === 100 ||
    currentQuiz === 101 ||
    currentQuiz === 109
  ) {
    if (answer === "b") {
      withdrawnCountParent += 1;
    } else if (answer === "c") {
      withdrawnCountParent += 2;
    }
  }

  if (
    currentQuiz === 13 ||
    currentQuiz === 28 ||
    currentQuiz === 29 ||
    currentQuiz === 30 ||
    currentQuiz === 31 ||
    currentQuiz === 32 ||
    currentQuiz === 34 ||
    currentQuiz === 44 ||
    currentQuiz === 49 ||
    currentQuiz === 51 ||
    currentQuiz === 69 ||
    currentQuiz === 89 ||
    currentQuiz === 110
  ) {
    if (answer === "b") {
      anxiousCountParent += 1;
    } else if (answer === "c") {
      anxiousCountParent += 2;
    }
  }
  if (
    currentQuiz === 10 ||
    currentQuiz === 11 ||
    currentQuiz === 24 ||
    currentQuiz === 26 ||
    currentQuiz === 33 ||
    currentQuiz === 35 ||
    currentQuiz === 37 ||
    currentQuiz === 47 ||
    currentQuiz === 60 ||
    currentQuiz === 62 ||
    currentQuiz === 77
  ) {
    if (answer === "b") {
      socialCountParent += 1;
    } else if (answer === "c") {
      socialCountParent += 2;
    }
  }
  if (
    currentQuiz === 8 ||
    currentQuiz === 17 ||
    currentQuiz === 39 ||
    currentQuiz === 45 ||
    currentQuiz === 56 ||
    currentQuiz === 57 ||
    currentQuiz === 58 ||
    currentQuiz === 64 ||
    currentQuiz === 68 ||
    currentQuiz === 74 ||
    currentQuiz === 81 ||
    currentQuiz === 82 ||
    currentQuiz === 83 ||
    currentQuiz === 90 ||
    currentQuiz === 98
  ) {
    if (answer === "b") {
      thoughtCountParent += 1;
    } else if (answer === "c") {
      thoughtCountParent += 2;
    }
  }
  if (
    currentQuiz === 0 ||
    currentQuiz === 3 ||
    currentQuiz === 7 ||
    currentQuiz === 9 ||
    currentQuiz === 12 ||
    currentQuiz === 16 ||
    currentQuiz === 40 ||
    currentQuiz === 59 ||
    currentQuiz === 76 ||
    currentQuiz === 78
  ) {
    if (answer === "b") {
      attentionCountParent += 1;
    } else if (answer === "c") {
      attentionCountParent += 2;
    }
  }
  if (
    currentQuiz === 1 ||
    currentQuiz === 25 ||
    currentQuiz === 27 ||
    currentQuiz === 38 ||
    currentQuiz === 42 ||
    currentQuiz === 61 ||
    currentQuiz === 65 ||
    currentQuiz === 70 ||
    currentQuiz === 71 ||
    currentQuiz === 79 ||
    currentQuiz === 80 ||
    currentQuiz === 88 ||
    currentQuiz === 94 ||
    currentQuiz === 97 ||
    currentQuiz === 99 ||
    currentQuiz === 103 ||
    currentQuiz === 104
  ) {
    if (answer === "b") {
      ruleBreakingCountParent += 1;
    } else if (answer === "c") {
      ruleBreakingCountParent += 2;
    }
  }

  if (
    currentQuiz === 2 ||
    currentQuiz === 15 ||
    currentQuiz === 18 ||
    currentQuiz === 19 ||
    currentQuiz === 20 ||
    currentQuiz === 21 ||
    currentQuiz === 22 ||
    currentQuiz === 36 ||
    currentQuiz === 55 ||
    currentQuiz === 66 ||
    currentQuiz === 84 ||
    currentQuiz === 85 ||
    currentQuiz === 86 ||
    currentQuiz === 87 ||
    currentQuiz === 92 ||
    currentQuiz === 93 ||
    currentQuiz === 95 ||
    currentQuiz === 102
  ) {
    if (answer === "b") {
      aggresiveCountParent += 1;
    } else if (answer === "c") {
      aggresiveCountParent += 2;
    }
  }

  if (
    currentQuiz === 46 ||
    currentQuiz === 48 ||
    currentQuiz === 50 ||
    currentQuiz === 53 ||
    currentQuiz === 113 ||
    currentQuiz === 114 ||
    currentQuiz === 115 ||
    currentQuiz === 116 ||
    currentQuiz === 117 ||
    currentQuiz === 118 ||
    currentQuiz === 119
  ) {
    if (answer === "b") {
      somaticCountParent += 1;
    } else if (answer === "c") {
      somaticCountParent += 2;
    }
  }

  if (answer) {
    if (answer === "a") {
      totalScoreParent = totalScoreParent + 0;
    } else if (answer === "b") {
      totalScoreParent = totalScoreParent + 1;
    } else {
      totalScoreParent = totalScoreParent + 2;
    }
    internalizingCountParent =
      withdrawnCountParent + somaticCountParent + anxiousCountParent;
    externalizingCountParent = ruleBreakingCountParent + aggresiveCountParent;
    currentQuiz++;

    //T-Scores
    withdrawnTscoreP =
      50 + 10 * ((withdrawnCountParent - withdrawnMeanP) / withdrawnSDP);
    anxiousTscoreP =
      50 + 10 * ((anxiousCountParent - anxiousMeanP) / anxiousSDP);
    somaticTscoreP =
      50 + 10 * ((somaticCountParent - somaticMeanP) / somaticSDP);
    socialTscoreP =
      50 + 10 * ((socialCountParent - socialMeanP) / socialSDP);
    thoughtTscoreP =
      50 + 10 * ((thoughtCountParent - thoughtMeanP) / thoughtSDP);
    attentionTscoreP =
      50 + 10 * ((attentionCountParent - attentionMeanP) / attentionSDP);
    ruleBreakingTscoreP =
      50 +
      10 * ((ruleBreakingCountParent - ruleBreakingMeanP) / ruleBreakingSDP);
    aggresiveTscoreP = 
      50 +
      10 * ((aggresiveCountParent - aggressiveMeanP) / aggresiveSDP);


    internalizingTscoreP =
      50 +
      10 * ((internalizingCountParent - internalizingMeanP) / internalizingSDP);
    externalizingTscoreP =
      50 +
      10 *
        ((externalizingCountParent - extenernalizingMeanP) /
          extenernalizingSDP);

    totalTscoreP = 50 + 10 * ((totalScoreParent - totalMeanP) / totalSDP);

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      localStorage.setItem("withdrawnTscoreP", withdrawnTscoreP);
      localStorage.setItem("anxiousTscoreP", anxiousTscoreP);
      localStorage.setItem("somaticTscoreP", somaticTscoreP);
      localStorage.setItem("socialTscoreP", socialTscoreP);
      localStorage.setItem("thoughtTscoreP", thoughtTscoreP);
      localStorage.setItem("attentionTscoreP", attentionTscoreP);
      localStorage.setItem("ruleBreakingTscoreP", ruleBreakingTscoreP);
      localStorage.setItem("aggresiveTscoreP", aggresiveTscoreP);
      localStorage.setItem("internalizingTscoreP", internalizingTscoreP);
      localStorage.setItem("externalizingTscoreP", externalizingTscoreP);
      localStorage.setItem("totalTscoreP", totalTscoreP);



      quiz.innerHTML = `<h2 style="font-family: "Ubuntu", sans-serif;">Your Report has been Generated. Click the Button below to view Report.<h2><br>

      <a href="report.html"><button style="background-color:#62cdff; border: white;

      position: relative;
      border-radius: 10px;
      top: 15px;
      color: white;
      font-size: 30px;">View</button></a>
      `;
    }
  }
});
