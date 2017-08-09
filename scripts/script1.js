function showSection(clicked_id) {
				if (clicked_id=="aboutMeLink") {
					$("#aboutMe").removeClass("dispNone");
					$("#rehome").removeClass("dispNone");
					$("#patEng").addClass("dispNone");
					$("#profExp").addClass("dispNone");
					$("#favReads").addClass("dispNone");
					resetBooks();
				} else if (clicked_id=="profExpLink") {
					$("#profExp").removeClass("dispNone");
					$("#rehome").removeClass("dispNone");
					$("#patEng").addClass("dispNone");
					$("#aboutMe").addClass("dispNone");
					$("#favReads").addClass("dispNone");
					resetBooks();
				} else if (clicked_id=="favReadsLink"){
					$("#favReads").removeClass("dispNone");
					$("#rehome").removeClass("dispNone");
					$("#patEng").addClass("dispNone");
					$("#profExp").addClass("dispNone");
					$("#aboutMe").addClass("dispNone");
					resetBooks();
				} else if (clicked_id=="patEngLink"){
					$("#patEng").removeClass("dispNone");
					$("#rehome").removeClass("dispNone");
					$("#favReads").addClass("dispNone");
					$("#profExp").addClass("dispNone");
					$("#aboutMe").addClass("dispNone");
					resetBooks();
				} else if (clicked_id=="rehome"){
					$("#patEng").addClass("dispNone");
					$("#rehome").addClass("dispNone");
					$("#favReads").addClass("dispNone");
					$("#profExp").addClass("dispNone");
					$("#aboutMe").addClass("dispNone");
					resetBooks();
				}
}
function showReadSection(clicked_id) {
				$("#readOptions").addClass("dispNone");
				if (clicked_id=="deepImg") {$("#deepDetails").removeClass("dispNone");
				} else if (clicked_id=="ggsImg") {$("#ggsDetails").removeClass("dispNone");
				} else if (clicked_id=="driveImg") {$("#driveDetails").removeClass("dispNone");
				} else if (clicked_id=="fountainImg") {$("#fountainDetails").removeClass("dispNone");
				}
}
function resetBooks(){
				$("#readOptions").removeClass("dispNone");
				$("#ggsDetails").addClass("dispNone");
				$("#driveDetails").addClass("dispNone");
				$("#deepDetails").addClass("dispNone");
				$("#fountainDetails").addClass("dispNone");
}