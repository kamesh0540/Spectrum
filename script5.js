const labels = ['Withdrawn', 'Somatic Complaints', 'Anxious Depressed', 'Social Problems', 'Thought Problems', 'Attention Problems', 'Rule-Breaking Behaviour', 'Aggressive Behaviour'];
const initialData = [0, 10, 20, 30, 30, 20, 10, 0];
const clinicalData = [70, 70, 70, 70, 70, 70, 70, 70];

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: "Your Child's T-Scores",
      data: initialData,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }, {
      label: "Clinical Range",
      data: clinicalData,
      fill: false,
      borderColor: 'rgb(255, 0, 0)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100
        }
      }]
    }
  }
});

// Function to update chart data
function updateChartData(newData) {
  chart.data.datasets[0].data = newData;
  chart.update();
}


var withdrawnTscoreP = 0; // window.withdrawnTscoreP;
var anxiousTscoreP = 0;
var somaticTscoreP = 0;
var socialTscoreP = 0;
var thoughtTscoreP = 0;
var attentionTscoreP = 0;
var ruleBreakingTscoreP =0;
var aggresiveTscoreP = 0;

var internalizingTscoreP = 0;
var externalizingTscoreP =  0;
var totalTscoreP = 0;


//'Withdrawn', 'Somatic Complaints', 'Anxious Depressed', 'Social Problems',
//'Thought Problems', 'Attention Problems', 'Rule-Breaking Behaviour', 'Aggressive Behaviour'

withdrawnTscoreP = localStorage.getItem("withdrawnTscoreP"); // window.withdrawnTscoreP;
anxiousTscoreP = localStorage.getItem("anxiousTscoreP");
somaticTscoreP = localStorage.getItem("somaticTscoreP");
socialTscoreP = localStorage.getItem("socialTscoreP");
thoughtTscoreP = localStorage.getItem("thoughtTscoreP");
attentionTscoreP = localStorage.getItem("attentionTscoreP");
ruleBreakingTscoreP = localStorage.getItem("ruleBreakingTscoreP");
aggresiveTscoreP = localStorage.getItem("aggresiveTscoreP");

internalizingTscoreP = localStorage.getItem("internalizingTscoreP");
externalizingTscoreP =  localStorage.getItem("externalizingTscoreP");
totalTscoreP = localStorage.getItem("totalTscoreP");


const newData = [withdrawnTscoreP, somaticTscoreP, anxiousTscoreP, socialTscoreP, thoughtTscoreP, attentionTscoreP, ruleBreakingTscoreP, aggresiveTscoreP];

updateChartData(newData);

let flag = 1;

if(withdrawnTscoreP>70){
  flag =0;
  withdrawn.innerHTML = ` <p> <br><b>Your child is showing higher than usual scores on the Withdrawn Scale:</b> <br></p>
  Withdrawn is a scale used to assess emotional and behavioral problems in children. High scores on this scale may indicate social and emotional difficulties, 
  such as shyness or social isolation. While not all children with high scores will have a diagnosable disorder, interventions such as counseling or social skills training may be helpful in improving their emotional well-being. It's important to involve a qualified mental health professional for assessment and treatment.
  `;
}

if(anxiousTscoreP>70){
  flag =0;
  anxious.innerHTML =  ` <p> <br> <b>Your child is showing higher than usual scores on the Anxious Scale:</b> <br></p>
  
  <p>The Anxious/Depressed scale is used to assess anxiety and depression in children. High scores on this scale can indicate that a child is experiencing emotional
   distress that may impact their daily functioning and quality of life. Interventions such as therapy, medication, or lifestyle changes can help manage their emotional difficulties, and a qualified mental health professional should be involved in the assessment and treatment process.
  </p>`;
}

if(somaticTscoreP>70){
  flag =0;
  somatic.innerHTML =  ` <p> <br> <b>Your child is showing higher than usual scores on the Somatic Scale: </b> <br></p> 
  <p>Somatic Complaints is a syndrome scale used to assess physical complaints in children. High scores on this scale may indicate frequent physical symptoms such as headaches and stomach aches. While not all children who score high on this scale have a diagnosable mental health disorder, it can indicate significant distress or emotional difficulties that may impact their physical health. Treatment options may include medical evaluation, counseling, or other therapies to improve their emotional well-being.
   A qualified mental health professional should be involved in the assessment and treatment process.
  </p>`;
}

if(socialTscoreP>70){
  flag = 0;
  social.innerHTML =  ` <p> <br> <b>Your child is showing higher than usual scores on the Social Scale: </b> <br></p> 

  <p>Social Problems is a syndrome scale used to assess children's difficulties with social interactions and relationships. High scores may indicate a child is struggling to make and keep friends,
   understand social cues, and experience emotional or behavioral difficulties. Interventions such as social skills training or counseling can help improve their social interactions and emotional well-being. A qualified mental health professional should be involved in the assessment and treatment process.
 
  </p>`;
}

if(thoughtTscoreP>70){
  flag = 0;
  thought.innerHTML =  ` <p> <br> <b>Your child is showing higher than usual scores on the Thought Scale: </b> <br></p>
  <p>Thought Problems is a syndrome scale used to assess emotional and behavioral problems in children. It includes items that assess unusual or distorted thinking, such as bizarre ideas or hearing voices. Children who score high on this scale may have difficulty communicating their thoughts and understanding others. While some level of imagination is normal, high scores can indicate significant cognitive and emotional difficulties that may require interventions such as counseling or therapy. It is important to 
  involve a qualified mental health professional in the assessment and treatment process to ensure appropriate care.

  </p>`;
}

if(attentionTscoreP>70){
  flag = 0;
  attention.innerHTML =  ` <p> <br> <b>Your child is showing higher than usual scores on the Attention Scale: </b> <br></p>
  <p>Attention Problems is a scale used to assess children's ability to sustain attention, control impulses, and manage behavior. High scores on this scale can indicate difficulty with attention, impulsivity, or hyperactivity that can interfere with learning and daily functioning. Treatment options may include behavior therapy or medication.
   A qualified mental health professional should be involved in the assessment and treatment process.
  </p>`;
}

if(ruleBreakingTscoreP>70){
  flag = 0;
  ruleBreaking.innerHTML =  ` <p> <br> <b>Your child is showing higher than usual scores on the Rule Breaking Scale: </b> <br></p> 
  <p>Rule-Breaking Behavior is a syndrome scale to assess emotional and behavioral problems in children. Children who score high on this scale may struggle with anger, defiance, and aggressive behaviors, which can interfere with their ability to form positive relationships and put them at risk for legal consequences.
   Interventions such as family therapy and behavior management techniques may be helpful in managing these behaviors.
  </p>`;
}

if(aggresiveTscoreP>70){
  flag = 0;
  aggresive.innerHTML =  ` <p> <br> <b>Your child is showing higher than usual scores on the Aggresive Scale: </b> <br></p> 
  <p>Aggressive Behavior is a syndrome scale used to assess emotional and behavioral problems in children. It measures the child's tendency to behave aggressively towards others, and high scores can indicate difficulties with emotion regulation and forming positive relationships.
   Interventions such as anger management or therapy may be helpful for children who score high on this scale.
  </p>`;
}

if(flag === 1){
  aggresive.innerHTML = `<p> <br> <b>All the category wise scores seem to be in the normal range.</b> <br></p>`;
}

if(internalizingTscoreP>70){

  internalizing.innerHTML =  `<p> <br> <b>Your child is showing higher than usual scores on the Internalizing Category: </b> <br></p>
  <p>Internalizing problems can have long-term consequences for a child's mental health and well-being. Treatment involves therapy and medication, along with a supportive environment. Early identification and
   intervention are crucial in addressing these problems to help children build skills and resilience for a healthy life.
  </p>`;
}

if(externalizingTscoreP>70){
  externalizing.innerHTML =  `<p> <br> <b>Your child is showing higher than usual scores on the Externalizing Total: </b> <br></p>
  <p>Externalizing problems are expressed through disruptive and aggressive behaviors directed towards others, property, or animals. They can be associated with mental health conditions like ADHD and conduct disorder, and can lead to academic and social difficulties, as well as involvement with the criminal justice system. 
  Treatment involves therapy and medication, and early identification and intervention is important for positive outcomes.
  </p>`;
}

if(totalTscoreP>70){
  total.innerHTML =  `<p> <br> <b>Your child is showing higher than usual Total Scores: </b> <br></p>
  <p>It is important to involve a qualified mental health professional in the assessment and treatment process to ensure appropriate care.
  </p>`;
}
if(totalTscoreP<70){
  total.innerHTML =  ` <p> <br> <b>Your child is showing overall healthy scores. </b> <br></p>`;
}