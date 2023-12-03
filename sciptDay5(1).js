//. For the given JSON iterate over all for loops (for,forin,forof,forEach)


var json = [{
    "Name" : "Amuthesh", 
    "Batch"   : "B54WD-Tamil",
    "Qualification" : "MCA",
    "Studying": "Full Stack Development"
},
{
    "Name" : "Abishek", 
    "Batch"   : "B54WD-Tamil",
    "tid" : "Diploma-EEE",
    "Studying": "Enigneering"
}];

for(let i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(obj.Name);
    console.log(obj.Batch);
}





var json = [{
    "Name" : "Amuthesh", 
    "Batch"   : "B54WD-Tamil",
    "Qualification" : "BCA,MCA",
    "Studying": "Full Stack Development"
},
{
    "Name" : "Yuvan", 
    "Batch"   : "B54WD-Tamil",
    "Qualication" : "B.Arc",
    "Studying": "Designing"
}];

json.forEach((item) => {
  console.log('Name: ' + item.Name);
  console.log('Batch: ' + item.Batch);
  console.log('Qualification: ' + item.Qualification);
  console.log('Studying: ' + item.Studying);
});


//. Create your own resume data in JSON format 

var json = [{
    "Name" : "Amuthesh", 
    "Batch"   : "B54WD-Tamil",
    "Qualification" : "BCA,MCA",
    "Studying": "Full Stack Development",
    "For My Self": "Detail-oriented Technical Writer with 7+ years of experience in writing end-user documentation, specializing in user help guides. Excellent writing, analytical thinking, research, and time management skills. Rewrote over 80% of user help guides for 30+ products at Company X, resulting in a 42% decrease in product-related customer support calls.",
    "Intagram link": "a_m_u_t_h_e_s_h",
    "Github link" : "https://github.com/Mbsamu222",
}];

json.forEach((item) => {
  console.log('Name: ' + item.Name);
  console.log('Batch: ' + item.Batch);
  console.log('Qualification: ' + item.Qualification);
  console.log('Studying: ' + item.Studying);
  console.log('For My Self: ' + item.ForMySelf);
  console.log('Intagram link: ' + item.Intagramlink);
  console.log('Github link: ' + item.Githublink);
});
