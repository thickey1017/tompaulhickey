function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
function expSelection(clicked_id) {
				if (clicked_id=="epic") {
					document.getElementById("expDetail").innerHTML = "Epic text";
				} else if (clicked_id=="education") {
					document.getElementById("expDetail").innerHTML = "Education text";
				} else if (clicked_id=="amazon"){
					document.getElementById("expDetail").innerHTML = "Amazon text";
				}
}
function showSection(clicked_id) {
				if (clicked_id=="aboutMeLink") {
					$("#aboutMe").removeClass("dispNone");
					$("#rehome").removeClass("dispNone");
					$("#patEng").addClass("dispNone");
					$("#profExp").addClass("dispNone");
					$("#favReads").addClass("dispNone");
				} else if (clicked_id=="profExpLink") {
					$("#profExp").removeClass("dispNone");
					$("#rehome").removeClass("dispNone");
					$("#patEng").addClass("dispNone");
					$("#aboutMe").addClass("dispNone");
					$("#favReads").addClass("dispNone");
				} else if (clicked_id=="favReadsLink"){
					$("#favReads").removeClass("dispNone");
					$("#rehome").removeClass("dispNone");
					$("#patEng").addClass("dispNone");
					$("#profExp").addClass("dispNone");
					$("#aboutMe").addClass("dispNone");
				} else if (clicked_id=="patEngLink"){
					$("#patEng").removeClass("dispNone");
					$("#rehome").removeClass("dispNone");
					$("#favReads").addClass("dispNone");
					$("#profExp").addClass("dispNone");
					$("#aboutMe").addClass("dispNone");
				} else if (clicked_id=="rehome"){
					$("#patEng").addClass("dispNone");
					$("#rehome").addClass("dispNone");
					$("#favReads").addClass("dispNone");
					$("#profExp").addClass("dispNone");
					$("#aboutMe").addClass("dispNone");
				}
}
//onclick event example- whenever a .tph class is clicked, action happens
//$(".tph").click(function(){
  // action goes here!!
//});