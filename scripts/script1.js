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